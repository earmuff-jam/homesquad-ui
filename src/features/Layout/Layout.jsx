import {
  AppBar,
  Box,
  CircularProgress,
  Container,
  CssBaseline,
  IconButton,
  Stack,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material';

import Content from './Content';
import { Outlet } from 'react-router-dom';
import { Suspense, useState } from 'react';
import { darkTheme, lightTheme } from '../../utils/Theme';
import { DarkModeRounded, LightModeRounded, LogoutRounded, MenuOutlined } from '@mui/icons-material';
import LoginForm from '../Auth/LoginForm';
import SignupForm from '../Auth/SignupForm';
import ModalWithConfirmationBox from '../../common/ModalWIthConfirmation/ModalWithConfirmationBox';
import { logout } from '../../utils/utils';
import { authenticationAPI } from '../../services/authentication';

export default function Layout() {
  const [signOutMutation] = authenticationAPI.useGetSignOutMutation();
  const [user, setUser] = useState(localStorage.getItem('userID'));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [isLightMode, setIsLightMode] = useState(true);
  const [showSignupModal, setShowSignUpModal] = useState(false);

  const handleDrawerOpen = () => setOpenDrawer(true);
  const handleDrawerClose = () => setOpenDrawer(false);

  const handleLoginSuccess = (data) => {
    setUser(data.id);
  };

  const handleSignout = async () => {
    await signOutMutation();
    logout(); // remove user session from local storage
  };

  const handleTheme = () => setIsLightMode(!isLightMode);

  if (!user) {
    return (
      <ModalWithConfirmationBox maxWidth={'sm'} open={!user}>
        {showSignupModal ? (
          <SignupForm setShowSignUpModal={setShowSignUpModal} />
        ) : (
          <LoginForm
            setShowSignUpModal={setShowSignUpModal}
            onLoginSuccess={handleLoginSuccess} // Pass success handler to LoginForm
          />
        )}
      </ModalWithConfirmationBox>
    );
  }

  return (
    <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
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
            <Stack direction="row">
              <IconButton onClick={handleTheme}>{!isLightMode ? <LightModeRounded /> : <DarkModeRounded />}</IconButton>
              <IconButton onClick={handleSignout}>
                <LogoutRounded />
              </IconButton>
            </Stack>
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
