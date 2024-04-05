const { Prompt } = require('../models')
const mongoose = require('mongoose');
const promptData = require('./seedData')

async function seedDatabase() {

    try {
        await Prompt.deleteMany()

        await Prompt.create(promptData)
    } catch (err) {
        console.error(err)
    }
}

seedDatabase()
