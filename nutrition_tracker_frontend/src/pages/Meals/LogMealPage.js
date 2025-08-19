import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Grid,
  MenuItem,
  CircularProgress,
} from '@mui/material';
import { useMeals } from '../../hooks/useMeals';

const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];

const LogMealPage = () => {
  const { createMeal } = useMeals();
  const [mealData, setMealData] = useState({
    name: '',
    type: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMealData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    createMeal.mutate(mealData, {
      onSuccess: () => {
        setMealData({
          name: '',
          type: '',
          calories: '',
          protein: '',
          carbs: '',
          fat: '',
        });
      },
    });
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Log a Meal
      </Typography>

      <Paper sx={{ p: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Meal Name"
                name="name"
                value={mealData.name}
                onChange={handleChange}
                required
                error={!mealData.name}
                helperText={!mealData.name && "Meal name is required"}
                disabled={createMeal.isLoading}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                label="Meal Type"
                name="type"
                value={mealData.type}
                onChange={handleChange}
                required
                error={!mealData.type}
                helperText={!mealData.type && "Please select a meal type"}
                disabled={createMeal.isLoading}
              >
                {mealTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="number"
                label="Calories (kcal)"
                name="calories"
                value={mealData.calories}
                onChange={handleChange}
                required
                error={!mealData.calories}
                helperText={!mealData.calories && "Calories are required"}
                disabled={createMeal.isLoading}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="number"
                label="Protein (g)"
                name="protein"
                value={mealData.protein}
                onChange={handleChange}
                required
                error={!mealData.protein}
                helperText={!mealData.protein && "Protein content is required"}
                disabled={createMeal.isLoading}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="number"
                label="Carbohydrates (g)"
                name="carbs"
                value={mealData.carbs}
                onChange={handleChange}
                required
                error={!mealData.carbs}
                helperText={!mealData.carbs && "Carbohydrates content is required"}
                disabled={createMeal.isLoading}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="number"
                label="Fat (g)"
                name="fat"
                value={mealData.fat}
                onChange={handleChange}
                required
                error={!mealData.fat}
                helperText={!mealData.fat && "Fat content is required"}
                disabled={createMeal.isLoading}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                disabled={createMeal.isLoading}
                startIcon={createMeal.isLoading ? <CircularProgress size={20} /> : null}
              >
                {createMeal.isLoading ? 'Saving...' : 'Log Meal'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default LogMealPage;
