import { useContext } from 'react';
import { Auth } from '@/modules/app/AuthProvider';

const useAuth = () => useContext(Auth);

export default useAuth;
