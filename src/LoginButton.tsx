import React, { ReactElement } from 'react';
import { Button } from 'react-bootstrap';
import { useAuth } from './AuthContext';

function LoginButton(): ReactElement {
    const { setIsLoggedIn } = useAuth();

    const handleLogin = () => {
        window.Kakao.Auth.login({
            success: function (authObj: any) {
                setIsLoggedIn(true);
            },
            fail: function (err: any) {
                console.error(err);
            },
        });
    };

    return <Button onClick={handleLogin}>Kakao Login</Button>;
}

export default LoginButton;
