const { Schema } = require('mongoose')

const gifSchema = new Schema(
    {
        endpoint: {
            type: String,
            required: true,
            match: [/(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/, 'Must Be A Valid URL']
        },
        votes: {
            type: Int,
            // @TODO: Make this required but just default it to 0, to prevent something from ever accidentally showing null votes
            require: 0
        }
    }
)

module.exports = gifSchema