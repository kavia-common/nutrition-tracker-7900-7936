import api from '../utils/api';

export const mealService = {
  async getMeals() {
    return api.get('/meals');
  },

  async getMealById(id) {
    return api.get(`/meals/${id}`);
  },

  async createMeal(mealData) {
    return api.post('/meals', mealData);
  },

  async updateMeal(id, mealData) {
    return api.put(`/meals/${id}`, mealData);
  },

  async deleteMeal(id) {
    return api.delete(`/meals/${id}`);
  },
};
