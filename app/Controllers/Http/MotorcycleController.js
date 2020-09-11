'use strict'
const MotorcycleService = use('App/Services/MotorcycleService')

class MotorcycleController {

  async create({ request, response }) {
    try {
      const { license_plate, brand, cylinder_capacity } = request.body
      const response = await MotorcycleService.create(license_plate, brand, cylinder_capacity)
      return response.ok(response)
    } catch (error) {
      console.log(error)
      return response.internalServerError()
    }
  }

}

module.exports = MotorcycleController
