import { Box, styled } from '@mui/material';
import Sidebar from './Sidebar';

const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginLeft: 240,
}));

const MainLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <MainContent>
        {children}
      </MainContent>
    </Box>
  );
};

export default MainLayout;
