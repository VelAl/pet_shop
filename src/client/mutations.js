import gql from "graphql-tag";

export const SIGN_UP = gql`
  mutation ($input: CreateAccountInput!) {
    createAccount(input: $input) {
      username
    }
  }
`;

export const SIGN_IN = gql`
  mutation LogIn($username: ID!, $password: String!) {
    logIn(username: $username, password: $password) {
      token
    }
  }
`;

export const CHECK_OUT_PET = gql`
  mutation ($id: ID!) {
    checkOut(id: $id) {
      pet {
        name
      }
    }
  }
`;

export const CHECK_IN = gql`
  mutation ($id: ID!) {
    checkIn(id: $id) {
      pet {
        name
      }
    }
  }
`;
