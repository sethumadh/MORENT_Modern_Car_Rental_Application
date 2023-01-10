import React, { useContext, useEffect, useState } from "react"

import { CarsList, Filter } from "../../components"
import { CarsContext, CarType } from "../../contexts/CarsContext"
import { SearchWrapper } from "./styles"

export default function SearchFilter() {
  const context = useContext(CarsContext)
  const { cars, searchItems, query, addToSearch, filterPrice, filterType } =
    context
  const [results, setResults] = useState<CarType[]>([] as CarType[])

  console.log(filterPrice)

  useEffect(() => {
    setResults(cars)
    console.log(results, "results")
    console.log(cars, "cars")
  }, [cars])

  useEffect(() => {
    const searchCarList = cars.filter(
      (car) =>
        car.car_brand.toLowerCase().includes(query) ||
        car.car_title.toLowerCase().includes(query)
    )
    addToSearch(searchCarList)
    setResults(searchCarList)

    if (filterType.length != 0 || filterPrice != 0) {
      let filteredCars = searchItems.filter(
        (car) =>
          filterType.some(
            (filter) =>
              filter.includes(car.car_body_type) ||
              parseInt(filter) <= car.seat_capacity
          ) && car.daily_rate > filterPrice
      )
      if (filterType.length == 0) {
        filteredCars = searchItems.filter((car) => car.daily_rate > filterPrice)
      }
    

      setResults(filteredCars)
    } else {
      setResults(searchCarList)
    }
  }, [query, filterPrice, filterType])

  return (
    <>
      {query && <h3>You are searching for - {`"${query}"`}</h3>}
      <SearchWrapper>
        <Filter />
        <CarsList searchItems={results} />
      </SearchWrapper>
    </>
  )
}
