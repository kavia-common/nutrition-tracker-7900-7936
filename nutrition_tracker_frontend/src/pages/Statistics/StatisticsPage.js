import {
  Box,
  Typography,
  Paper,
  Grid,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';
import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const mockWeeklyData = [
  { date: '2024-01-01', calories: 2100, protein: 80, carbs: 250, fat: 70 },
  { date: '2024-01-02', calories: 1950, protein: 85, carbs: 230, fat: 65 },
  { date: '2024-01-03', calories: 2200, protein: 90, carbs: 260, fat: 75 },
  { date: '2024-01-04', calories: 2000, protein: 82, carbs: 240, fat: 68 },
  { date: '2024-01-05', calories: 1850, protein: 78, carbs: 220, fat: 62 },
  { date: '2024-01-06', calories: 2300, protein: 95, carbs: 270, fat: 78 },
  { date: '2024-01-07', calories: 2150, protein: 88, carbs: 255, fat: 72 },
];

const nutritionDistribution = [
  { name: 'Protein', value: 25 },
  { name: 'Carbs', value: 50 },
  { name: 'Fat', value: 25 },
];

const COLORS = ['#4CAF50', '#81C784', '#FF7043'];

const StatisticsPage = () => {
  const [timeRange, setTimeRange] = useState('week');

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4">Statistics</Typography>
        <FormControl sx={{ minWidth: 120 }}>
          <Select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            size="small"
          >
            <MenuItem value="week">Week</MenuItem>
            <MenuItem value="month">Month</MenuItem>
            <MenuItem value="year">Year</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Calorie Intake Trend
            </Typography>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer>
                <LineChart data={mockWeeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="calories"
                    stroke="#4CAF50"
                    name="Calories"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Macronutrient Distribution
            </Typography>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={nutritionDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {nutritionDistribution.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Nutrient Trends
            </Typography>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer>
                <LineChart data={mockWeeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="protein"
                    stroke="#4CAF50"
                    name="Protein"
                  />
                  <Line
                    type="monotone"
                    dataKey="carbs"
                    stroke="#81C784"
                    name="Carbs"
                  />
                  <Line
                    type="monotone"
                    dataKey="fat"
                    stroke="#FF7043"
                    name="Fat"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StatisticsPage;
