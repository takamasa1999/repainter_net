"use client"
import { Box, CssBaseline, Drawer, IconButton, Toolbar, Typography, Button, AppBar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { UserProfile, useUser } from '@auth0/nextjs-auth0/client';
import DrawerItems from './DrawerItems';
import { ItemListUser } from './ItemListUser';
import LocaleSwitcher from '../LocaleSwitcher';
import { ItemListAdmin } from './ItemListAdmin';
import LoginOutMenu from './LoginOutMenu';

const drawerWidth = 240;

function DrawerContents({ user, isAdmin }: {
  user: UserProfile | undefined;
  isAdmin: boolean;
}) {
  return (
    <>
      <Toolbar />
      <DrawerItems items={ItemListUser} />
      {isAdmin && <DrawerItems items={ItemListAdmin} />}
      <LoginOutMenu user={user} />
    </>
  );
}

export default function ResponsiveDrawer(props: {
  children?: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    if (user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL_ADDRESS) {
      setIsAdmin(true);
    }
  }, [user]);

  const t = useTranslations('Metadata');

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {t('title')}
          </Typography>
          <LocaleSwitcher />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <DrawerContents user={user} isAdmin={isAdmin} />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <DrawerContents user={user} isAdmin={isAdmin} />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          overflow: 'auto', // Ensure content is scrollable if it overflows
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}
