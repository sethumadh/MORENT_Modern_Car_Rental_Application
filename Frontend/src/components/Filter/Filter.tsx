import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"

import { CarsContext } from "../../contexts/CarsContext"
import { ActionKind } from "../../contexts/CarsContext"

export const FilterStyle = styled.div`
  .filters {
    background-color: #dadee2;
    color: #231919;
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 20%;
    margin: 10px;
    height: 86vh;
  }
`

type FilterDataType = {
  title: string
  options: string[]
}[]

export default function Filter() {
  const filterData: FilterDataType = [
    {
      title: "TYPE",
      options: ["Sport", "SUV", "MVP", "Sedan", "Coupe", "Hatchback"],
    },
    {
      title: "CAPACITY",
      options: ["2", "4", "6", "8"],
    },
  ]

  const { dispatch } = useContext(CarsContext)
  const [checked, setChecked] = useState<string[]>([])
  const [price, setPrice] = useState<string>("0")
  console.log(checked)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecks = [...checked]
    console.log(e.target.value,"RANGE VALUE")
    if (e.target.type === "checkbox") {
      if (e.target.checked) setChecked([...newChecks, e.target.value])
      else {
        newChecks.splice(checked.indexOf(e.target.value), 1)
        setChecked([...newChecks])
      }
    } else {
      setPrice(e.target.value)
    }
  }
  useEffect(() => {
    dispatch({ type: ActionKind.Filter_Type_Query, payload: checked })
  }, [checked])
  useEffect(() => {
    dispatch({ type: ActionKind.Filter_Price_Query, payload: parseInt(price) })
  }, [price])

  return (
    <FilterStyle>
      {filterData.map((data) => {
        return (
          <>
            <h4>{data.title}</h4>
            <form>
              {data.options.map((option) => (
                <>
                  <input
                    type="checkbox"
                    id={option}
                    key={option}
                    onChange={(e) => {
                      handleChange(e)
                      
                    }}
                    name={option}
                    value={option}
                  />
                  <label htmlFor={option}>{option}</label>
                </>
              ))}
            </form>
            <br />
            <hr />
          </>
        )
      })}
      <form>
        <h4>{"PRICE"}</h4>
        <input
          type="range"
          id={"PRICE"}
          onChange={(e) => handleChange(e)}
          name={"PRICE"}
        />
        <label htmlFor={"PRICE"}>Price Range- ${price}</label>
        <br />
      </form>
    </FilterStyle>
  )
}
