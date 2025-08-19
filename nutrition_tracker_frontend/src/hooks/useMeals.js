import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { mealService } from '../services/mealService';
import { useNotification } from '../contexts/NotificationContext';

export const useMeals = () => {
  const queryClient = useQueryClient();
  const { showNotification } = useNotification();

  const { data: meals = [], isLoading, error } = useQuery({
    queryKey: ['meals'],
    queryFn: mealService.getMeals,
  });

  const createMeal = useMutation({
    mutationFn: mealService.createMeal,
    onSuccess: () => {
      queryClient.invalidateQueries(['meals']);
      showNotification('Meal logged successfully!');
    },
    onError: (error) => {
      showNotification(error.message, 'error');
    },
  });

  const updateMeal = useMutation({
    mutationFn: ({ id, data }) => mealService.updateMeal(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['meals']);
      showNotification('Meal updated successfully!');
    },
    onError: (error) => {
      showNotification(error.message, 'error');
    },
  });

  const deleteMeal = useMutation({
    mutationFn: mealService.deleteMeal,
    onSuccess: () => {
      queryClient.invalidateQueries(['meals']);
      showNotification('Meal deleted successfully!');
    },
    onError: (error) => {
      showNotification(error.message, 'error');
    },
  });

  return {
    meals,
    isLoading,
    error,
    createMeal,
    updateMeal,
    deleteMeal,
  };
};
