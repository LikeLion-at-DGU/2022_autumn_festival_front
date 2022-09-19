import * as React from 'react';
import { BrowserRouter as Router, Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import CloseIcon from '@mui/icons-material/Close';

// 우선은 로고 대신
import Typography from '@mui/material/Typography';
import { SwipeableDrawer } from '@mui/material';

import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B2F4E',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#FD9903',
    },
  },
  swiperabledrawer: {
    fontFamily: ['GmarketSansLight'],
  },
});
const drawerWidth = 240;
// 상단바
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

// drawerheader
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function Navbar() {
  const [state, setState] = React.useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) =>
    setState({ ...state, [anchor]: open });

  const menus = [
    { text: '공지사항', path: '/notice' },
    { text: '타임테이블', path: '/timetable' },
    { text: '부스', path: '/booth' },
    { text: 'About', path: '/about' },
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* 메뉴 */}
      <List>
        {menus.map((menu) => (
          <ListItem
            key={menu.text}
            disablePadding
            component={RouterLink}
            // 파란 글씨 제거
            style={{ color: 'inherit', textDecoration: 'inherit' }}
            to={menu.path}
          >
            <ListItemButton>
              <ListItemText primary={menu.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div classname="nav">
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{ bgcolor: '# 1B2F4E', display: 'flex' }}
            theme={theme}
          >
            <Toolbar>
              {/* 우선은 로고 대신 */}
              <Typography
                variant="h6"
                noWrap
                component={RouterLink}
                to="/"
                style={{ color: 'inherit', textDecoration: 'inherit' }}
              >
                레츠끼릿
              </Typography>

              <IconButton
                color="inherit"
                aria-label="open drawer"
                sx={{ marginLeft: 'auto' }}
                edge="start"
                onClick={toggleDrawer(anchor, true)}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>

          <SwipeableDrawer
            sx={{}}
            theme={theme}
            anchor={anchor}
            open={state.right}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            paperProps={{ style: { borderRadius: 20 } }}
          >
            <DrawerHeader>
              <IconButton onClick={toggleDrawer(anchor, false)}>
                <CloseIcon />
              </IconButton>
            </DrawerHeader>
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
