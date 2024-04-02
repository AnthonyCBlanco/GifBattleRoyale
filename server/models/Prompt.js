const { Schema, model } = require('mongoose');

const gifSchema = require('./Gif')

const promptSchema = new Schema(
    {
        text: {
            type: String,
            required: true,
        },
        gifs: [gifSchema]
    }
)

const Prompt = model('Prompy', promptSchema) // @TODO: This should be 'Prompt'

module.exports = Prompt