//rfce or rfc or rafc 아무거나 사용 -> 차이?? 찾아볼것

import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { BrowserRouter as Router, Link as RouterLink } from 'react-router-dom';
// mui
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

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
      <div className="nav__logo"> {' Navbar'}</div>
      {/*show가 true면 nav__black css 적용*/}
      {/* <img
        alt="Netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
        className="nav__logo"
        onClick={() => (window.location.href = '/')} //이미지 눌렀을때 reload 되게
      /> */}
      <div className="nav__menu">
        {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
            <IconButton
              sx={{ marginLeft: 'auto' }}
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={toggleDrawer(anchor, true)}
            >
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}
