const User = require('../../models/User');

module.exports = {
    Query: {
        getUsers: () => {
            return User.find().catch(err => console.log(err));
        },
        getUser: (parent, args) => {
            return User.findById(args.id).catch(err => console.log(err));
        }
    },
    Mutation: {
        createUser: (parent, args) => {
            const newUser = new User({
                name: args.name,
            });
            return newUser.save();
        }
    }
}