// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Home from './Home';
import NavigationBar from './NavigationBar';
import KakaoAuthRedirect from './KakaoAuthRedirect';
import Todos from './Todos';

function App() {

  return (
    <AuthProvider>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/kakao/callback" element={<KakaoAuthRedirect />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
