/* eslint-disable prettier/prettier */
import {useMutation} from '@apollo/client';
import {UPDATE_PASSWORD, VERIFY_ACCOUNT_HOLDER_EMAIL} from '../../graphql/accountHolder/mutation';
import {useState} from 'react';
import {ResponseType} from '../../types/responseType';

export const useFindByEmail = (email: string) => {
  const [findEmail] = useMutation(VERIFY_ACCOUNT_HOLDER_EMAIL);
  const [response, setResponse] = useState<ResponseType>({
    responseCode: 0,
    responseContent: {},
    responseReady: false,
  });
  const findEmailHandler = async () => {
    return await findEmail({variables: {email: email}}).then(data => {
      setResponse({responseCode:200,responseReady:true, responseContent: data.data.findByEmail});
    });
  };
  return {response,findEmailHandler};
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
