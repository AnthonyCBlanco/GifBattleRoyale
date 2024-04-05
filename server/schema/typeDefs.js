const typeDefs = `
    type User {
        _id: ID!
        username: String!
        email: String //  @TODO: this is not required here but not in your User model it is. The validation reqs in your models and typeDefs should look the same 
        highestScore: Int // @TODO: This is called higestSore here but 'highscore' on the user model, make them consistent 
    }

    type Prompt {
        _id: ID!
        text: String!
        gifs: [Gif]
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
        prompt: Prompt
        leaderboard: User
    }
`

module.exports = typeDefs;