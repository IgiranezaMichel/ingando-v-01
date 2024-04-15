import {gql} from '@apollo/client';
export const BOOK_PAGE = gql`
  query ($input: PageInput, $accountHolderId: ID) {
    accountHolderBookPage(input: $input, accountHolderId: $accountHolderId) {
      pageNumber
      pageSize
      total
      content {
        name
        file
        fileEncoding
        cover
        author
        publisher
        serialNumber
      }
    }
  }
`;
