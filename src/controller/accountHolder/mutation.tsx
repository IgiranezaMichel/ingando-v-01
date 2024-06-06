/* eslint-disable prettier/prettier */
import {useMutation} from '@apollo/client';
import {LOGIN, UPDATE_PASSWORD, VERIFY_ACCOUNT_HOLDER_EMAIL} from '../../graphql/accountHolder/mutation';
import { useState} from 'react';
import {ResponseType} from '../../types/responseType';

export const useFindByEmail = (email: string) => {
  const [findEmail] = useMutation(VERIFY_ACCOUNT_HOLDER_EMAIL);
  const findEmailHandler = async () => {
    return await findEmail({variables: {email: email}});
  };
  return {findEmailHandler};
};
export const useLoginForm = (email: string,password:String) => {
  const [findEmailAndPassword] = useMutation(LOGIN);
  const [response, setResponse] = useState<ResponseType>({
    responseCode: 0,
    responseContent: {},
    responseReady: false,
  });
  const findEmailAndPasswordHandler = async () => {
    return await findEmailAndPassword({variables: {email: email,password:password}})
    .then(data => {
      console.log(data.data.login);
      if (data.data.login === null) {throw new Error('Invalid credentials');}
      else
      {setResponse({responseCode:200,responseReady:true, responseContent: data.data.login});}
    });
  };
  return {response,findEmailAndPasswordHandler};
};
export const useUpdateAccountHolderPassword = (accountHolderEmail:string,oldPassword:string,newPassword:string) => {
    const [findEmail] = useMutation(UPDATE_PASSWORD);
    const updatePassword = async () => {
      return await findEmail({variables: {accountHolderEmail:accountHolderEmail,
        oldPassword:oldPassword,
        newPassword:newPassword}});
    };
    return {updatePassword};
  };
