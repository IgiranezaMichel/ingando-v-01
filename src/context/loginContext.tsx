import {createContext} from 'react';
import {ResponseData} from '../types/responseData';

export const LoginContext = createContext<ResponseData | undefined>(undefined);
// export const useLogin = () => {
//   const user = useContext(LoginContext);
//   if (user === undefined) {
//     throw new Error('User not found');
//   }
//   return user;
// };
