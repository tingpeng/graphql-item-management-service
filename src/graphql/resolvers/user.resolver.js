const User = require('../../models/user');    

function users() {                     
  return User.find({});
}

function user(args) {
  return User.findById(args.id)
}

function createUser(args) {
  let user = new User(args.userInput);
  return user.save();
}

function deleteUser(args) {
  return User.findByIdAndRemove(args.id);
}

function updateUser(args) {
  return User.findByIdAndUpdate(args.id, args.userInput, { new: true });
}

module.exports = {
  Query: {
    users: () => users(),
    user: (_, args) => user(args),
  },
  Mutation: {
    createUser: (_, args) => createUser(args),
    updateUser: (_, args) => updateUser(args),
    deleteUser: (_, args) => deleteUser(args),
  },
}

// module.exports = { users, user, createUser, deleteUser, updateUser }
