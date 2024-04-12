import {gql} from '@apollo/client';

export const ACTIVE_CAMP = gql`
  query ($page: PageInput) {
    activeCamp(input: $page) {
      pageSize
      total
      content {
        id
        title
        cost
        address
        startingDate
        endingDate
        description
        content
        timeStamp
      }
    }
  }
`;
