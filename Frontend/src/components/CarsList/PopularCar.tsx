import React, { useContext } from "react"

import {
  PopularCarDiv,
  PopularCarHorizontal,
  PopularCarSection,
  PopularCarTitle,
  PopularCarViewAll,
} from "./styles"

import CarCard from "../CarCard/CarCard"
import { CarsContext } from "../../contexts/CarsContext"

const PopularCar = () => {
  const context = useContext(CarsContext)

  const { cars } = context
  
  return (
    <PopularCarSection>
      <PopularCarDiv>
        <PopularCarTitle>Popular Car</PopularCarTitle>
        <PopularCarViewAll>View All</PopularCarViewAll>
      </PopularCarDiv>
      <PopularCarHorizontal>
        {cars.map((car) => (
          <CarCard car={car} />
        ))}
      </PopularCarHorizontal>
    </PopularCarSection>
  )
}

export default PopularCar
