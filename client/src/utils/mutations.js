import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
  `;

export const ADD_SCORE = gql`
  mutation addScore($username: String!, $highscore: Int!) {
    addScore(username: $username, highscore: $highscore) {
      user {
        username
        highscore
      }
    }
  }
`;

export const ADD_VOTE = gql`
mutation addVote($promptText: String!, $gifIndex: Int!) {
  addVote(promptText: $promptText, gifIndex: $gifIndex) {
    _id
    text
    gifs {
      endpoint
      caption
      votes
    }
  }
}
`