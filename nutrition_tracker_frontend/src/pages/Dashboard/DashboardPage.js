import { Grid, Paper, Typography, Box } from '@mui/material';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const mockData = {
  dailyStats: {
    calories: 1850,
    protein: 75,
    carbs: 220,
    fat: 60
  },
  weeklyData: [
    { day: 'Mon', calories: 2000 },
    { day: 'Tue', calories: 1800 },
    { day: 'Wed', calories: 2200 },
    { day: 'Thu', calories: 1900 },
    { day: 'Fri', calories: 2100 },
    { day: 'Sat', calories: 1700 },
    { day: 'Sun', calories: 1850 }
  ]
};

const StatCard = ({ title, value, unit }) => (
  <Paper sx={{ p: 2 }}>
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    <Typography variant="h4">
      {value}
      <Typography variant="subtitle1" component="span">
        {unit}
      </Typography>
    </Typography>
  </Paper>
);

const DashboardPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <StatCard 
            title="Calories" 
            value={mockData.dailyStats.calories} 
            unit="kcal" 
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatCard 
            title="Protein" 
            value={mockData.dailyStats.protein} 
            unit="g" 
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatCard 
            title="Carbs" 
            value={mockData.dailyStats.carbs} 
            unit="g" 
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatCard 
            title="Fat" 
            value={mockData.dailyStats.fat} 
            unit="g" 
          />
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 2, height: 400 }}>
            <Typography variant="h6" gutterBottom>
              Weekly Calorie Intake
            </Typography>
            <ResponsiveContainer>
              <BarChart data={mockData.weeklyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="calories" fill="#4CAF50" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;
