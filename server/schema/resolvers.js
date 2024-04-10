const { User, Prompt } = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
        Query: {
          me: async (parent, args, context) => {
              if (context.user) {
                  try {
                      const userData = await User.findById(context.user.id);
                      return userData;
                  } catch (error) {
                      throw new Error('Failed to fetch user data');
                  }
              } else {
                  throw new AuthenticationError('You are not authenticated');
          }
        },
        prompt: async (parent, args) => {
          const promptData = await Prompt.find()
          if(!promptData) {
            console.error("Having trouble finding that prompt")
            return
          }
          return promptData
        },
        leaderboard: async (parent, args) => {
          try{
            const leaderboardData = await User.find()
            return leaderboardData
          } catch(err){
            console.log(err)
            return err
          }
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
        addScore: async (parent, { highscore, username }) => {
          try {
              const user = await User.findOneAndUpdate(
                  { username }, 
                  { highscore: highscore }, 
                  { new: true } 
              );
    
              return user;
          } catch (error) {
              console.error("Error updating user highscore:", error);
              throw new Error("Failed to update user highscore");
          }
        },
        addVote : async (parent, { promptText, gifIndex}) => {
          const prompt = await Prompt.findOne({ text: promptText });

          if (gifIndex < 0 || gifIndex >= prompt.gifs.length) {
            throw new Error("Invalid GIF index");
          }
          prompt.gifs[gifIndex].votes++;
          await prompt.save();

          return(prompt)
        }
    },
}

module.exports = resolvers