const { Schema } = require('mongoose')

const gifSchema = new Schema(
    {
        endpoint: {
            type: String,
            required: true,
            // match: [/(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/, 'Must Be A Valid URL']
        },
        votes: {
            type: Number,
            required: true,
            default: 0
        }
    }
)

module.exports = gifSchema