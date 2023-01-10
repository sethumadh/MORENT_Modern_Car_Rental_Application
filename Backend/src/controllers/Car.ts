import { NextFunction, Request, Response } from "express"
import mongoose from "mongoose"

import Car from "../models/Car"

const createCar = async (req: Request, res: Response, next: NextFunction) => {
	const {
		car_title,
		car_brand,
		car_body_type,
		maximum_gasoline,
		transmission_type,
		seat_capacity,
		daily_rate,
		pickUp_Location,
		dropOff_Location,
		availability_From,
		availability_To,
		file_path,
		uploaded_car_image
	} = req.body;

	try {
		const car = new Car({
			_id: new mongoose.Types.ObjectId(),
			car_title,
			car_brand,
			car_body_type,
			maximum_gasoline,
			transmission_type,
			seat_capacity,
			daily_rate,
			pickUp_Location,
			dropOff_Location,
			availability_From,
			availability_To,
			file_path,
			uploaded_car_image
		});

    await car.save()

    car
      ? res.status(201).json({ car })
      : res.status(404).json({ message: "Car was not created" })
  } catch (error) {
    res.status(500).json({ error })
  }
}

const findByOneCar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const carId = req.params.carId
  try {
    const car = await Car.findById(carId)
    car
      ? res.status(200).json({ car })
      : res.status(404).json({ message: "Car not found" })
  } catch (error) {
    res.status(500).json({ error })
  }
}

const allCars = async (req: Request, res: Response, next: NextFunction) => {
  const q: string = (req.query.q as string) || ""
  if (q) {
    try {
      const cars = await Car.find()
      if (cars) {
        const searchResults = cars.filter(
          (car) =>
            car.car_brand.toLowerCase().includes(q) ||
            car.car_title.toLowerCase().includes(q)
        )

        res.status(200).json({ searchResults })
      }
    } catch (error) {
      res.status(500).json({ error })
    }
  } else {
    try {
      const car = await Car.find()
      if (car) res.status(200).json({ car })
    } catch (error) {
      res.status(500).json({ error })
    }
  } // to search for car results
}

const updateCar = async (req: Request, res: Response, next: NextFunction) => {
  const carId = req.params.carId
  try {
    const car = await Car.findById(carId)

    if (car) {
      car.set(req.body)
      return res.status(201).json({ car })
    } else {
      return res.status(404).json({ message: "No car found" })
    }
  } catch (error) {
    return res.status(500).json({ error })
  }
}

const deleteCar = async (req: Request, res: Response, next: NextFunction) => {
  const carId = req.params.carId
  try {
    const car = await Car.findByIdAndDelete(carId)
    car
      ? res.status(201).json({ car, message: "Deleted the car" })
      : res.status(404).json({ message: "No car by that id was found" })
  } catch (error) {
    res.status(500).json({ error })
  }
}

export default {
  createCar,
  findByOneCar,
  allCars,
  updateCar,
  deleteCar,
}
