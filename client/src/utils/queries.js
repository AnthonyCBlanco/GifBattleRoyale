import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      highestScore 
    }
  }
`;
export const QUERY_PROMPT = gql`
{
  prompt {
    text
    gifs {
      endpoint
      votes
      caption
    }
  }
}
`
export const QUERY_LEADERBOARD = gql`
{
  leaderboards {
    highestScore
    username
  }
}
`