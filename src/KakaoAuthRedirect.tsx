import { useEffect } from 'react';
import { useAuth } from './AuthContext';

declare global {
  interface Window { authorizationCodeInProcess: string | null; }
}

window.authorizationCodeInProcess = window.authorizationCodeInProcess || null;

const KakaoAuthRedirect = () => {
  console.log('KakaoAuthRedirect render'); 
  const { setIsLoggedIn, setUser } = useAuth();

  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');

    if (authorizationCode) {
      console.log("Sending request to server with authorizationCode:", authorizationCode);

      // Don't send another request if one is already being processed
      if(window.authorizationCodeInProcess === authorizationCode) {
        return;
      }
      // Mark this authorizationCode as being processed
      window.authorizationCodeInProcess = authorizationCode;

      fetch(`${process.env.REACT_APP_BACKEND_DOMAIN}/api/kakaologin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          authorizationCode
        })
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUser({
          ...data.user,
          jwtToken: data.token // Assuming the backend sends the token in 'token' field
        });
        setIsLoggedIn(true);
        
        // Once the request is done, clear the mark
        window.authorizationCodeInProcess = null;
      })
      .catch(err => {
        console.error(err);
        
        // If the request fails, clear the mark
        window.authorizationCodeInProcess = null;
      });
    }
  }, [setIsLoggedIn, setUser]);

  return (
    <div>잠시만 기다려 주세요! 로그인 중입니다.</div>
  );

};

export default KakaoAuthRedirect;
