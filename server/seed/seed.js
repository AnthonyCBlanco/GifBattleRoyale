const { Prompt } = require('../models')
const mongoose = require('mongoose');
const promptData = require('./seedData')

mongoose.connect('mongodb://localhost:27017/GifBattleRoyale', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function seedDatabase() {

    try {
        await Prompt.deleteMany()

        await Prompt.create(promptData)
    } catch (err) {
        console.error(err)
    } finally {
        mongoose.disconnect()
    }
}

seedDatabase()
