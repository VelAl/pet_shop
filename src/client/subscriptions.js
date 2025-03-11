import gql from "graphql-tag";

export const PET_RETURNED_SUBSC = gql`
  subscription {
    petReturned {
      pet {
        id
        name
      }
      checkOutDate
      checkInDate
      late
    }
  }
`;
