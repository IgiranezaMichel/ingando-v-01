/* eslint-disable @typescript-eslint/no-shadow */
import {useEffect, useState} from 'react';
import {ResponseType} from '../../types/responseType';
import {PageInput} from '../../types/pageInput';
import {BOOK_PAGE} from '../../graphql/book/query';
import {useQuery} from '@apollo/client';

export const useBookPage = (input: PageInput, accountHolderId: string) => {
  const [response, setResponse] = useState<ResponseType>({
    responseCode: 0,
    responseContent: [],
    responseReady: false,
  });
  const {data, refetch} = useQuery(BOOK_PAGE, {
    variables: {input: input, accountHolderId: accountHolderId},
  });
  useEffect(() => {
    const fetch = async () => {
      if (data) {
        return data.accountHolderBookPage;
      }
    };
    fetch().then(data => {
      setResponse({
        responseCode: 200,
        responseContent: data,
        responseReady: true,
      });
    });
  }, [data]);
  return {response, refetch};
};
