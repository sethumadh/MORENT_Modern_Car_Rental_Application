import React, { useContext } from "react"

import { PopularCarTitle, PopularCarViewAll, RecommendedCarDiv } from "./styles"

import CarsList from "./Cars"
import { CarsContext } from "../../contexts/CarsContext"
import CarCard from "../CarCard/CarCard"

const RecomendationCar = () => {
    const context = useContext(CarsContext)

    const { cars } = context
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <RecommendedCarDiv>
        <PopularCarTitle>Recomendation Car</PopularCarTitle>
        <PopularCarViewAll>View All</PopularCarViewAll>
        {cars.map((car) => (
          <CarCard car={car} />
        ))}
      </RecommendedCarDiv>
    </div>
  )
}

export default RecomendationCar
