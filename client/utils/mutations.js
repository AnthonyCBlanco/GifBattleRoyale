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

  export const CREATE_POST = gql`
  mutation savePost($postData: PostInput!) {
    createdPost(postData: $postData) {
      _id
      username
      email
      createdPost {
        postId
      }
    }
  }
`;

export const REMOVE_POST = gql`
  mutation removePost($postId: ID!) {
    removePost(postId: $postId) {
      _id
      username
      email
      createdPost {
        postId
      }
    }
  }
`;

export const UPDATE_POST = gql`
  mutation updatePost($postId: ID!, $postData: PostInput!) {
    updatePost(postId: $postId, postData: $postData) {
      _id
      username
      email
      createdPost {
        postId
      }
    }
  }
  `;