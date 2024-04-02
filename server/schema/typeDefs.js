const typeDefs = `
    type User {
        _id: ID!
        username: String!
        email: String
        highestScore: Int
    }

    type Prompt {
        _id: ID!
        text: String!
        gifs: [Gif]
    }

    type Gif {
        endpoint: String!
        votes: Int
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addScore(email: String!, score: Int): User
      }

    type Query {
        me: User
    }
`

module.exports = typeDefs;