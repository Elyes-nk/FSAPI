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
        },
        updateUser: (parent, args) => {
            const user = User.find(user => user.id === args.id);
            if (!user) throw new Error('User not found');

            // This way, only the fields that are passed-in will be changed.
            if (typeof args.data.username === "string") user.username = args.data.username;
            if (typeof args.data.email === "string") user.email = args.data.email;
            if (typeof args.data.password === "string") user.password = args.data.password;

            return user;
        },
        deleteUser: (parent, args) => {
            const userIndex = User.filter((user) => user.id !== args.id);
            if (userIndex === -1) throw new Error('User not found');

            const user = User.splice(userIndex, 1);
            return user[0];
        }
    }
}