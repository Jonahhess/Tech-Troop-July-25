const UsersModule = function () {
  const _users = ["Aaron", "Avi"];

  const addUser = function (user) {
    _users.push(user);
  };

  const listUsers = function () {
    for (let user of _users) {
      console.log(user);
    }
  };

  return {
    addUser: addUser,
    listUsers: listUsers,
  };
};

const usersModule = UsersModule();

usersModule.addUser("Narkis");
usersModule.listUsers();
usersModule.addUser("bert");
usersModule.addUser("ernie");
console.log(usersModule.users);
