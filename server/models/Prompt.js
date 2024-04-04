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

const Prompt = model('Prompt', promptSchema) // @TODO: This should be 'Prompt'

module.exports = Prompt