import React, { createContext, useContext, useEffect, useState } from "react"
import Cars from "../components/CarsList/Cars"
import { CarsContext } from "./CarsContext"
import { UserContextObj } from "./UserContext"

type CarFavouriteContextProviderProps = {
  children: React.ReactNode
}
type CarFavouriteContextType = {
  userFavourite: {
    carId: number
    value: boolean
    gId: number
  }[]

  handleFavourite: (id: number) => void
}
type userFavType = {
  carId: number
  value: boolean
  gId: number
}[]
type lSType = {
  carId: number
  value: boolean
  gId: number
}[]
type userFavouriteType = {
  carId: number
  value: boolean
  gId: number
}[]
const CarFavouriteContext = createContext<CarFavouriteContextType>(
  {} as CarFavouriteContextType
)

export default function CarFavouriteContextProvider({
  children,
}: CarFavouriteContextProviderProps) {
  const context = useContext(CarsContext)
  const { cars } = context

  
  const [userFavourite, setUserFavourite] = useState<userFavouriteType>(
    {} as userFavouriteType
  )
  const { Provider } = CarFavouriteContext
  const { googleId } = useContext(UserContextObj)
  const gId = parseInt(googleId)
  console.log(userFavourite,":userFavourite")
  useEffect(() => {
    //googleId will be null if user is in a logged out state
    if (googleId) {
      console.log("logged-in")
      let lS: lSType = JSON.parse(localStorage.getItem(`${gId}`) as string)
      console.log(lS)
      // here the lS (local storage value) is undefined for the first time user logs in
      if (lS) {
        setUserFavourite(lS)
      } else {
        let userFav: userFavType = cars.map(({ _id }) => {
          return { carId: _id, value: false, gId: gId }
        })
        localStorage.setItem(`${gId}`, JSON.stringify(userFav))
        setUserFavourite(userFav)
      }
    }else{
        console.log("logged out")
        let userFav: userFavType = cars.map(({ _id }) => {
            return { carId: _id, value: false, gId: 0 }
          })
          localStorage.setItem(`${0}`, JSON.stringify(userFav))
          setUserFavourite(userFav)

    }
  }, [gId,cars])

  //   const currentUser=lS.filter(l=>gId==l.gId)

  const handleFavourite = (id: number) => {
    
    let lS: lSType = JSON.parse(localStorage.getItem(`${gId}`) as string)
    let userFav: userFavType = lS.map((l) => {
      if (l.carId == id) {
        return { ...l, value: !l.value }
      }
      return l
    })
    localStorage.setItem(
        `${gId}`,
      JSON.stringify(userFav)
    )
    setUserFavourite(userFav)
  }
  return (
    <Provider value={{ userFavourite, handleFavourite }}>{children}</Provider>
  )
}
export { CarFavouriteContextProvider, CarFavouriteContext }
