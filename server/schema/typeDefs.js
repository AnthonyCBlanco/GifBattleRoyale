const typeDefs = `
    type User {
        _id: ID!
        username: String!
        email: String!
        highScore: Int
    }

    type Prompt {
        _id: ID!
        text: String!
        gifs: [Gif]
        caption:String!
    }

    type Gif {
        endpoint: String!
        votes: Int! 
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
        prompt: [Prompt]
        leaderboard: User
    }
`

module.exports = typeDefs;