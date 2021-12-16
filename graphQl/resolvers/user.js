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
            if (typeof args.data.name === "string") user.name = args.data.name;
            if (typeof args.data.age !== "undefined") user.age = args.data.age;

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