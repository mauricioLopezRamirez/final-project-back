const User = ('App/Models/Motorcycle')

class UserService {

  async createUser(names, surnames, sex, birthday, description) {
    try {
      const body = {
        names,
        surnames,
        sex,
        birthday,
        description
      }
      const response = await User.create(body)
      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

module.exports = new UserService()