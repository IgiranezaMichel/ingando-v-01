import {useQuery} from '@apollo/client';
import {DISPLAY_CAMP_APPLICATION_HISTORY_PAGE} from '../../graphql/campApplicant/query';
import {PageInput} from '../../types/pageInput';
import {useEffect, useState} from 'react';
import {ResponseData} from '../../types/responseData';

export const useDisplayCampHistoryPage = (input: PageInput, email: string) => {
  const [response, setResponse] = useState<ResponseData>({
    responseContent: [],
    responseReady: false,
    refresh: () => {},
  });
  const {data, refetch} = useQuery(DISPLAY_CAMP_APPLICATION_HISTORY_PAGE, {
    variables: {input: input, email: email},
  });
  useEffect(() => {
    const fetch = async () => {
      if (data) {
        return data.accountHolderCampApplicationPage;
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
