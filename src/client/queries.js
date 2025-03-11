import gql from "graphql-tag";

export const GET_AMOUNTS = gql`
  query {
    totalPets
    availablePets
    checkedOutPets
  }
`;

export const GET_ALL_PETS = gql`
  query {
    allPets {
      __typename
      id
      name
      weight
      photo {
        thumb
      }
    }
  }
`;

export const GET_CURRENT_USER_DATA = gql`
  query getCurrentUserData {
    me {
      username
      name
      dateCreated
      currentPets {
        __typename
        id
        name
        weight
        photo {
          thumb
        }
      }
    }
  }
`;

export const GET_CURRENT_USER_HISTORY = gql`
  query getCurrentUserData {
    me {
      checkoutHistory {
        pet {
          name
        }
        checkOutDate
        checkInDate
        late
      }
    }
  }
`;

export const GET_PET_BY_ID = gql`
  query ($id: ID!) {
    petById(id: $id) {
      id
      name
      weight
      photo {
        full
      }

      ... on Cat {
        sleepAmount
      }
      ... on Dog {
        good
      }
      ... on Rabbit {
        favoriteFood
        floppy
      }
      ... on Stingray {
        chill
        fast
      }
    }

    allCheckedOutPets {
      id
    }

    me {
      currentPets {
        id
      }
    }
  }
`;
