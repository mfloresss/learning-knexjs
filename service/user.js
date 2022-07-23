const userDAO = require("../dao/user");

class UserService {
  createUser(userDto) {
    const { name, age, email, phone } = userDto;
    return userDAO.createUser(name, age, email, phone);
  }
  getUser(userDto) {
    const { name } = userDto;
    return userDAO.getUser(name);
  }
  getUsers() {
    return userDAO.getUsers();
  }
}

module.exports = new UserService();
