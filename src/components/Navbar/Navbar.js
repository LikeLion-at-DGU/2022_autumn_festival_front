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
  const [show, setShow] = useState(false);

  useEffect(() => {
    //리스너 등록
    window.addEventListener('scroll', () => {
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

  let location = useLocation().pathname.split('/')[1];

  const listName = (path, name) => {
    return (
      <>
        {location === path ? (
          <ListFontBold>{name} </ListFontBold>
        ) : (
          <ListFont>{name} </ListFont>
        )}
      </>
    );
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
            <ListItemButton>{listName('notice', '공지사항')}</ListItemButton>
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
              {listName('timetable', '타임테이블')}
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
            <ListItemButton>{listName('booth', '부스')}</ListItemButton>
          </ListItem>

          <ListItem
            key="About"
            disablePadding
            component={RouterLink}
            // 파란 글씨 제거
            style={{ color: 'inherit', textDecoration: 'inherit' }}
            to="/about"
          >
            <ListItemButton>{listName('about', 'About')}</ListItemButton>
          </ListItem>
        </List>{' '}
      </div>
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
              <div className="start__festival">
                <>
                  {' '}
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
              <hr className="hr"></hr>
              <div>{list(anchor)}</div>
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}
