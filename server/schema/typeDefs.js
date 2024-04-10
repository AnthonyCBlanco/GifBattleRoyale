const typeDefs = `
    type User {
        _id: ID!
        username: String!
        email: String!
        highScore: Int!
    }

    type Prompt {
        _id: ID!
        text: String!
        gifs: [Gif]
        
    }

    type Gif {
        endpoint: String!
        votes: Int! 
        caption: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addScore(username: String!, highscore: Int): Auth
        addVote(promptText: String!, gifIndex: Int!): Prompt
    }

    type Query {
        me: User
        prompt: [Prompt]
        leaderboard: User
    }
`

module.exports = typeDefs;