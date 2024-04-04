const { User, Prompt } = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
      
              return userData;
            }
      
            throw AuthenticationError;
          },

        prompt: async (parent, args) => {
          const promptData = await Prompt.findById(args)
          if(!promptData) {
            console.error("Having trouble finding that prompt")
            return
          }
          return promptData
        },
        leaderboard: async (parent, args) => {
          const leaderboardData = await User
          .find()
          .sort({ highscore: -1 }) 
          .limit(10)

          return leaderboardData
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
          console.log(args)
          const user = await User.create(args);
          const token = signToken(user);
    
          return { token, user };
        },
        login: async (parent, { email, password }) => {
          const user = await User.findOne({ email });
    
          if (!user) {
            throw AuthenticationError;
          }
    
          const correctPw = await user.isCorrectPassword(password);
    
          if (!correctPw) {
            throw AuthenticationError;
          }
    
          const token = signToken(user);
          return { token, user };
        },
        addScore: async (parent, { score, email}) => {
            const user = await User.findOneAndUpdate({ email }, {score: highscore});
            console.log(user)
            return(user)
        }
    },
}

module.exports = resolvers