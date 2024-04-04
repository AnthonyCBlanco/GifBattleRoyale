import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      highestScore 
    }
    prompt {
      text
      gifs
    }
    leaderboards {
      highestScore
      username
    }
  }
`;