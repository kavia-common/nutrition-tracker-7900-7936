import { Drawer, List, ListItem, ListItemIcon, ListItemText, styled } from '@mui/material';
import { 
  Dashboard,
  Restaurant,
  Timeline,
  Settings,
  Search,
  Calculate
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: 240,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 240,
    boxSizing: 'border-box',
    backgroundColor: theme.palette.background.paper,
  },
}));

const menuItems = [
  { text: 'Dashboard', icon: <Dashboard />, path: '/' },
  { text: 'Log Meal', icon: <Restaurant />, path: '/log-meal' },
  { text: 'Statistics', icon: <Timeline />, path: '/statistics' },
  { text: 'Goals', icon: <Calculate />, path: '/goals' },
  { text: 'Food Search', icon: <Search />, path: '/food-search' },
  { text: 'Settings', icon: <Settings />, path: '/settings' },
];

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <StyledDrawer variant="permanent">
      <List>
        {menuItems.map((item) => (
          <ListItem 
            button 
            key={item.text}
            onClick={() => navigate(item.path)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </StyledDrawer>
  );
};

export default Sidebar;
