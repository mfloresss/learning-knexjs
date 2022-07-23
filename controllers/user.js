const userService = require("../service/user");

class UserController {
  async createUser(req, res) {
    try {
      const user = await userService.createUser(req.body);
      console.log({ user });
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json({ detail: err.sqlMessage });
    }
  }
  async getUser(req, res) {
    try {
      const user = await userService.getUser(req.params);
      if (user.length === 0) {
        return res.status(404).json({ detail: "User not found" });
      }
      console.log({ user });
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
  async getUsers(req, res) {
    try {
      const users = await userService.getUsers();
      if (users.length === 0) {
        return res.status(404).json({ detail: "Users not found" });
      }
      console.log({ users });
      res.status(201).json(users);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

module.exports = new UserController();
