'use strict'
const UserService = use('App/Services/UserService')
class UserController {

  async create({ request, response }) {
    try {
      const { names, surnames, sex, birthday, description } = request.body
      const response = await UserService.create(names, surnames, sex, birthday, description)
      return response.ok(response)
    } catch (error) {
      console.log(error)
      return response.internalServerError()
    }
  }
}

module.exports = UserController
