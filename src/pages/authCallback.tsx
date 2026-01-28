import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom";

export const AuthCallback = () => {
const [searchParams] = useSearchParams();
const navigate = useNavigate();

useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
        localStorage.setItem('authToken', token);
        navigate('/', { replace: true });
    } else {
        navigate('/?error=auth_failed', { replace: true });
    }
}, [searchParams, navigate]);

 return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <p>Completing sign in...</p>
        </div>
    );
}