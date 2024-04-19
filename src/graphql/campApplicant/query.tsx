import {gql} from '@apollo/client';

export const DISPLAY_CAMP_APPLICATION_HISTORY_PAGE = gql`
  query ($input: PageInput, $email: String) {
    accountHolderCampApplicationPage(input: $input, email: $email) {
      pageNumber
      pageSize
      total
      content {
        id
        levels {
          name
          fromAge
          toAge
          photo
        }
        camp {
          title
          cost
          location
          description
        }
        campApplicantStatus
        paymentCode
        telephone
        comment
        timeStamp
      }
    }
  }
`;
