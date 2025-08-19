import { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  InputAdornment,
  IconButton,
  Grid,
} from '@mui/material';
import { Search } from '@mui/icons-material';

const mockFoodData = [
  { name: 'Apple', calories: 95, protein: 0.5, carbs: 25, fat: 0.3 },
  { name: 'Banana', calories: 105, protein: 1.3, carbs: 27, fat: 0.4 },
  { name: 'Chicken Breast', calories: 165, protein: 31, carbs: 0, fat: 3.6 },
];

const FoodSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Here we would typically make an API call to search for foods
    const results = mockFoodData.filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Food Search
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <TextField
          fullWidth
          label="Search for a food"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearch}>
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Paper>

      {searchResults.length > 0 && (
        <Paper>
          <List>
            {searchResults.map((food, index) => (
              <ListItem key={index} divider={index < searchResults.length - 1}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={3}>
                    <ListItemText
                      primary={food.name}
                      secondary="Per 100g serving"
                    />
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Grid container spacing={2}>
                      <Grid item xs={3}>
                        <Typography variant="body2" color="textSecondary">
                          Calories: {food.calories}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="body2" color="textSecondary">
                          Protein: {food.protein}g
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="body2" color="textSecondary">
                          Carbs: {food.carbs}g
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="body2" color="textSecondary">
                          Fat: {food.fat}g
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
};

export default FoodSearchPage;
