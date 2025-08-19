import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Slider,
  LinearProgress,
} from '@mui/material';
import { useState } from 'react';

const GoalsPage = () => {
  const [goals, setGoals] = useState({
    calories: 2000,
    protein: 150,
    carbs: 250,
    fat: 70,
  });

  const [progress] = useState({
    calories: 85,
    protein: 90,
    carbs: 75,
    fat: 80,
  });

  const handleGoalChange = (name) => (event) => {
    setGoals({
      ...goals,
      [name]: event.target.value,
    });
  };

  const GoalProgress = ({ label, value, goal, progress }) => (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography>{label}</Typography>
        <Typography>
          {value} / {goal} ({progress}%)
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: '#e0e0e0',
          '& .MuiLinearProgress-bar': {
            backgroundColor: progress >= 100 ? '#ff9800' : '#4CAF50',
          },
        }}
      />
    </Box>
  );

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Nutritional Goals
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Set Daily Goals
            </Typography>
            <Box component="form">
              <TextField
                fullWidth
                label="Daily Calorie Goal"
                type="number"
                value={goals.calories}
                onChange={handleGoalChange('calories')}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Protein Goal (g)"
                type="number"
                value={goals.protein}
                onChange={handleGoalChange('protein')}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Carbohydrates Goal (g)"
                type="number"
                value={goals.carbs}
                onChange={handleGoalChange('carbs')}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Fat Goal (g)"
                type="number"
                value={goals.fat}
                onChange={handleGoalChange('fat')}
                sx={{ mb: 2 }}
              />
              <Button variant="contained" color="primary">
                Save Goals
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Today's Progress
            </Typography>
            <Box sx={{ mt: 3 }}>
              <GoalProgress
                label="Calories"
                value={1700}
                goal={goals.calories}
                progress={progress.calories}
              />
              <GoalProgress
                label="Protein"
                value={135}
                goal={goals.protein}
                progress={progress.protein}
              />
              <GoalProgress
                label="Carbohydrates"
                value={188}
                goal={goals.carbs}
                progress={progress.carbs}
              />
              <GoalProgress
                label="Fat"
                value={56}
                goal={goals.fat}
                progress={progress.fat}
              />
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Macronutrient Distribution
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Typography gutterBottom>Protein: 30%</Typography>
                <Slider
                  value={30}
                  valueLabelDisplay="auto"
                  sx={{
                    color: '#4CAF50',
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography gutterBottom>Carbohydrates: 50%</Typography>
                <Slider
                  value={50}
                  valueLabelDisplay="auto"
                  sx={{
                    color: '#81C784',
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography gutterBottom>Fat: 20%</Typography>
                <Slider
                  value={20}
                  valueLabelDisplay="auto"
                  sx={{
                    color: '#FF7043',
                  }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GoalsPage;
