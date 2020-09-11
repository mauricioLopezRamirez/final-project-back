const Motorcycle = ('App/Models/Motorcycle')

class MotorcycleService {

  async createMotorcycle(license_plate, brand, cylinder_capacity) {
    try {
      const body = {
        license_plate,
        brand,
        cylinder_capacity
      }
      const response = await Motorcycle.create(body)
      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

module.exports = new MotorcycleService()