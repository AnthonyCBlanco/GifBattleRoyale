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
        votes: required // @: Go ahead and make this required, when a gif is new the value will be 0. But having it be 0 over null might prevent later runtime errors trying to check against a null vote count
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