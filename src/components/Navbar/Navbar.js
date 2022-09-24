//rfce or rfc or rafc 아무거나 사용 -> 차이?? 찾아볼것

import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import navLogo from '../../assets/img/navLogo.png';
import navC from '../../assets/img/navC.png';
// mui
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { ListFontBold, ListFont } from './style';

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

// drawerheader
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 3),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

// const theme = createTheme({
//   typography: {
//     fontFamily: [GmarketSansMedium].join(','),
//   },
// });

export default function Navbar() {
  // drawer
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* 메뉴 */}
      <div>
        <List>
          <ListItem
            key="공지사항"
            disablePadding
            component={RouterLink}
            // 파란 글씨 제거
            style={{ color: 'inherit', textDecoration: 'inherit' }}
            to="/notice"
          >
            <ListItemButton>
              <div className="list__font__bold" style={{ color: '#fd9903' }}>
                공지사항{' '}
              </div>
            </ListItemButton>
          </ListItem>

          <ListItem
            key="타임테이블"
            disablePadding
            component={RouterLink}
            // 파란 글씨 제거
            style={{ color: 'inherit', textDecoration: 'inherit' }}
            to="/timetable"
          >
            <ListItemButton>
              <div className="list__font">타임테이블 </div>
            </ListItemButton>
          </ListItem>

          <ListItem
            key="부스"
            disablePadding
            component={RouterLink}
            // 파란 글씨 제거
            style={{ color: 'inherit', textDecoration: 'inherit' }}
            to="/booth"
          >
            <ListItemButton>
              <div className="list__font">부스 </div>
            </ListItemButton>
          </ListItem>

          <ListItem
            key="About"
            disablePadding
            component={RouterLink}
            // 파란 글씨 제거
            style={{ color: 'inherit', textDecoration: 'inherit' }}
            to="/about"
          >
            <ListItemButton>
              <div className="list__font">About </div>
            </ListItemButton>
          </ListItem>
        </List>{' '}
      </div>
    </Box>
  );

  return (
    <nav className="nav">
      <div className="nav__logo">
        <img
          alt="navLogo"
          className="nav__logo__img"
          src={navLogo}
          onClick={() => (window.location.href = '/')}
        />{' '}
      </div>
      <div className="container">
        <div className="nav__menu">
          <></>
          {['right'].map((anchor) => (
            <React.Fragment key={anchor}>
              <FontAwesomeIcon
                icon={faBars}
                onClick={toggleDrawer(anchor, true)}
              />
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                <DrawerHeader>
                  <FontAwesomeIcon
                    icon={faXmark}
                    onClick={toggleDrawer(anchor, false)}
                  />
                </DrawerHeader>
                <div className="start__festival">
                  <>
                    <span style={{ color: '#fd9903' }}>축제</span>를
                  </>
                  <br></br>
                  <>시작해봐요</>
                </div>
                <img
                  className="navC"
                  alt="navC"
                  src={navC}
                  onClick={() => (window.location.href = '/')}
                />
                <hr></hr>
                <div>{list(anchor)}</div>
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
}
