//rfce or rfc or rafc 아무거나 사용 -> 차이?? 찾아볼것

import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link as RouterLink } from 'react-router-dom';
import navLogo from '../../assets/img/navLogo.png';
// mui
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { styled } from '@mui/material/styles';

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

export default function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    //리스너 등록
    window.addEventListener('scroll', () => {
      console.log('window.scrollY', window.scrollY);
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      // 이 컴포넌트를 안쓸 경우 리스너 제거
      window.removeEventListener('scroll', () => {});
    };
  }, []);

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
    <nav className={'nav ${show && "nav__navy"}'}>
      <img
        alt="navLogo"
        src={navLogo}
        className="nav__logo"
        onClick={() => (window.location.href = '/')}
      />

      <div className="nav__menu">
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
              {' '}
              <DrawerHeader>
                <FontAwesomeIcon
                  icon={faXmark}
                  onClick={toggleDrawer(anchor, false)}
                />
              </DrawerHeader>
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}
