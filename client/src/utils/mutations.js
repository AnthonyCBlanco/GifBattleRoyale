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
  mutation addScore($username: String!, $score: Number!) {
    addScore($username: String!, $score: Number!) {
      token
      user {
        _id
        username
        higheScore
      }
    }
  }
`