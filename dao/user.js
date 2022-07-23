const db = require("../db/index");

class UserDAO {
  async createUser(name, age, email, phone) {
    await db("user").insert({
      name,
      age,
      email,
      phone,
    });
    return { name, age, email, phone };
  }

  async getUser(name) {
    const user = await db("user")
      .where({
        name,
      })
      .select("*");
      return user;
  }

  async getUsers() {
    const users = await db("user").select("*");
    return users;
  }
}

module.exports = new UserDAO();
