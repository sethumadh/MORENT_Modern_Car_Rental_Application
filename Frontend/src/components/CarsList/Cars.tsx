import { FC, useContext } from "react"

import { CarsListWrapper, CarsListItems } from "./styles"

import { CarCard } from ".."
import { CarsContext } from "../../contexts/CarsContext"

const Cars: FC = () => {
  const context = useContext(CarsContext)

  const { cars } = context
  return (
    <CarsListWrapper>
      <CarsListItems>
        {cars.map((car) => (
          <CarCard car={car} />
        ))}
      </CarsListItems>
    </CarsListWrapper>
  )
}

export default Cars
