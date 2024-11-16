import {
  AppBar,
  Box,
  CircularProgress,
  Container,
  CssBaseline,
  IconButton,
  Skeleton,
  Stack,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material';

import { MenuOutlined } from '@mui/icons-material';
import { Outlet } from 'react-router-dom';
import { Suspense, useState } from 'react';
import Content from './Content';
import { lightTheme } from '../../utils/Theme';
import { useGetUserQuery } from '../../services/user';
import ModalWithConfirmationBox from '../../common/ModalWIthConfirmation/ModalWithConfirmationBox';

export default function Layout() {
  const { data: currentUser, isLoading: isUserQueryLoading } = useGetUserQuery();
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => setOpenDrawer(true);
  const handleDrawerClose = () => setOpenDrawer(false);

  if (isUserQueryLoading) {
    return <Skeleton height="10rem" />;
  }

  if (!currentUser) {
    return (
      <ModalWithConfirmationBox maxWidth={'sm'} open={!currentUser} secondaryButton={'Login'}>
      </ModalWithConfirmationBox>
    );
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Suspense
        fallback={
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <CircularProgress color="inherit" />
          </Box>
        }
      >
        <AppBar elevation={0}>
          <Toolbar>
            <IconButton onClick={handleDrawerOpen}>
              <MenuOutlined />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              HomeSquad
            </Typography>
          </Toolbar>
        </AppBar>
        <Stack direction="row" spacing="1rem" sx={{ mt: '5rem' }}>
          <Content openDrawer={openDrawer} handleDrawerClose={handleDrawerClose} />
          <Stack sx={{ py: '1rem', flexGrow: 1 }}>
            <Container maxWidth="md">
              <Outlet />
            </Container>
          </Stack>
        </Stack>
      </Suspense>
    </ThemeProvider>
  );
}
