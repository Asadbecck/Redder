import { useSelector } from 'react-redux';

export function useAuth() {
    const { email, id, token } = useSelector((state) => state.email);
    return {
        isAuth: !!email,
        email,
        token,
        id,
    };
}
