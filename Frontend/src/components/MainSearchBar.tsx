import React, { useContext, useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import styled from "styled-components"

import { CarsContext } from "../contexts/CarsContext"

const Icon = styled.input`
  margin: 15px;
  width: 500px;
  height: 50px;
  text-indent: 10px;
  border: 1px solid #444;
  border-radius: 10px;
  display: block;
  cursor: pointer;
`

const SearchBar = () => {
  const context = useContext(CarsContext)
  const { pathname } = useLocation()
  const { addToQuery } = context
  const [term, setTerm] = useState("")
  const [debounceTerm, setDebounceTerm] = useState("")
  const navigate = useNavigate()
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const q = queryParams.get("query") as string

  useEffect(() => {
    const timer = setTimeout(() => {
      setTerm(debounceTerm)
    }, 500)
    return () => clearTimeout(timer)
  }, [debounceTerm])
  useEffect(() => {
    addToQuery(term)
    if (term.length != 0) {
      navigate(`/search?query=${term}`)
    } else {
      if (pathname === "/search") navigate("/search")
    }
  }, [term])

  return (
    <>
      <Icon
        type="text"
        placeholder="Search.."
        onChange={(e) => {
          setDebounceTerm(e.target.value)
        }}
        value={debounceTerm}
        name="search"
      />
    </>
  )
}
export default SearchBar
