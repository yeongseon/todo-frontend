// NavigationBar.tsx

import React, { useCallback } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import KakaoLoginButton from './KakaoLoginButton';

const NavigationBar = React.memo(() => {
  console.log('NavigationBar render');
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  // useCallback을 사용하여 핸들러 함수의 재생성을 최소화합니다.
  const handleLogout = useCallback(() => {
    // 로그아웃 로직 처리 후, 로그인 상태를 false로 설정
    setIsLoggedIn(false);
  }, [setIsLoggedIn]);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Todo App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          {isLoggedIn && <Nav.Link as={Link} to="/todos">Todo List</Nav.Link>}
        </Nav>
        {!isLoggedIn ? <KakaoLoginButton /> : <Button onClick={handleLogout}>Logout</Button>}
      </Navbar.Collapse>
    </Navbar>
  );
});

export default NavigationBar;
