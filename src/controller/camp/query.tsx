import {useQuery} from '@apollo/client';
import {PageInput} from '../../types/pageInput';
import {ACTIVE_CAMP} from '../../graphql/camp/mutation';
import {useEffect, useState} from 'react';
import {ResponseData} from '../../types/responseData';

export const useActiveCamp = (page: PageInput) => {
  const [response, setResponse] = useState<ResponseData>({
    responseContent: [],
    responseReady: false,
    refresh: () => {},
  });
  const {data, refetch} = useQuery(ACTIVE_CAMP, {variables: {page: page}});
  useEffect(() => {
    const fetch = async () => {
      if (data) {
        return data.activeCamp;
      }
    };
    fetch().then(responseData => {
      setResponse({
        responseContent: responseData,
        responseReady: true,
        refresh: () => {},
      });
    });
  }, [data]);
  return {response, refetch};
};
