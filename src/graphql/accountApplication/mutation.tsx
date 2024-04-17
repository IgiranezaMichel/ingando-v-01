import {gql} from '@apollo/client';

export const VERIFY_ACCOUNT_HOLDER_EMAIL = gql`
  mutation ($email: ID!) {
    findByEmail(email: $email) {
      id
      name
      gender
      email
      phoneNumber
      profilePicture
      dob
    }
  }
`;
export const UPDATE_PASSWORD = gql`
  mutation (
    $accountHolderEmail: String
    $oldPassword: String
    $newPassword: String
  ) {
    updateAccountHolderPassword(
      accountHolderEmail: $accountHolderEmail
      oldPassword: $oldPassword
      newPassword: $newPassword
    )
  }
`;
