import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Divider,
} from '@mui/material';
import { useState } from 'react';

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    firstName: '',
    lastName: '',
    email: '',
    height: '',
    weight: '',
    age: '',
    activityLevel: '',
    notifications: true,
    emailUpdates: false,
  });

  const handleChange = (field) => (event) => {
    setSettings({
      ...settings,
      [field]: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here we would typically make an API call to update settings
    console.log('Saving settings:', settings);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Personal Information
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    value={settings.firstName}
                    onChange={handleChange('firstName')}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    value={settings.lastName}
                    onChange={handleChange('lastName')}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={settings.email}
                    onChange={handleChange('email')}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Height (cm)"
                    type="number"
                    value={settings.height}
                    onChange={handleChange('height')}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Weight (kg)"
                    type="number"
                    value={settings.weight}
                    onChange={handleChange('weight')}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Age"
                    type="number"
                    value={settings.age}
                    onChange={handleChange('age')}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Activity Level"
                    select
                    value={settings.activityLevel}
                    onChange={handleChange('activityLevel')}
                    SelectProps={{
                      native: true,
                    }}
                  >
                    <option value=""></option>
                    <option value="sedentary">Sedentary</option>
                    <option value="light">Lightly Active</option>
                    <option value="moderate">Moderately Active</option>
                    <option value="very">Very Active</option>
                    <option value="extreme">Extremely Active</option>
                  </TextField>
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 3 }}
              >
                Save Changes
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Preferences
            </Typography>
            <Box>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.notifications}
                    onChange={handleChange('notifications')}
                    color="primary"
                  />
                }
                label="Enable Push Notifications"
              />
              <Typography variant="body2" color="textSecondary" sx={{ ml: 3, mb: 2 }}>
                Receive notifications for meal reminders and goal updates
              </Typography>

              <FormControlLabel
                control={
                  <Switch
                    checked={settings.emailUpdates}
                    onChange={handleChange('emailUpdates')}
                    color="primary"
                  />
                }
                label="Email Updates"
              />
              <Typography variant="body2" color="textSecondary" sx={{ ml: 3 }}>
                Receive weekly progress reports and tips via email
              </Typography>

              <Divider sx={{ my: 3 }} />

              <Button
                variant="outlined"
                color="error"
                sx={{ mt: 2 }}
              >
                Delete Account
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SettingsPage;
