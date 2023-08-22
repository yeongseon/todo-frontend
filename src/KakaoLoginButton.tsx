// KakaoLoginButton.tsx
import React, { MouseEvent } from 'react';

const KakaoLoginButton = () => {
  console.log('KakaoLoginButton render'); 
  const clientID = process.env.REACT_APP_KAKAO_CLIENT_ID;
  const redirectUri = `${window.location.origin}/auth/kakao/callback`;

  const handleLogin = (event: MouseEvent) => {
    console.log('Button clicked', event.target, event.currentTarget);
    const url = `https://kauth.kakao.com/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectUri}&response_type=code`;

    window.location.href = url;
  };

  return (
    <button onClick={handleLogin}>Kakao Login</button>
  );
};

export default KakaoLoginButton;
