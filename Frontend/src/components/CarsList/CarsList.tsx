import { FC, useContext, useState } from "react"

import { CarsListWrapper, CarsListItems } from "./styles"
import { CarCard } from "../"
import { CarsContext, CarType } from "../../contexts/CarsContext"


type carListProps = {
  searchItems?: CarType[] 
}

const CarsList = ({ searchItems }: carListProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage, setRecordsPerPage] = useState(5)
  const context = useContext(CarsContext)
  const { cars } = context
  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  const carsData = searchItems ? searchItems : cars
  const nPages = Math.ceil(carsData.length / recordsPerPage)
  const currentRecords = carsData.slice(indexOfFirstRecord, indexOfLastRecord)
  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1)
  }
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1)
  }
  return (
    <>
      <CarsListWrapper>
        <CarsListItems>
          {currentRecords.map((car) => (
            <CarCard car={car} />
          ))}
        </CarsListItems>
      </CarsListWrapper>
      <div>
        <button onClick={prevPage}>Previous Page</button>
        <button onClick={nextPage}>Next Page</button>
      </div>
    </>
  )
}

export default CarsList
