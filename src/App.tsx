import React, { useEffect, ReactElement } from 'react';
import { AuthProvider } from './AuthContext';
import NavigationBar from './Navbar';
import { KAKAO_APP_KEY } from './config';

function App(): ReactElement {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {  // Kakao가 초기화되지 않았다면 초기화를 수행
      window.Kakao.init(KAKAO_APP_KEY);
  }

  }, []);

    return (
        <AuthProvider>
            <NavigationBar />
        </AuthProvider>
    );
}

export default App;
