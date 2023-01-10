

import { FC, useContext, useEffect, useState } from "react"

import {
  Article,
  CarCardWrapper,
  CardRow1,
  CardRow2,
  CardRow3,
  CardRow4,
  CardSpesification,
  CardSpesificationDiv,
  CardTag,
  CardTitle,
  Icon,
  PricePerDay,
  PricePerDaySmall,
  RentNowButton,
} from "./styles"

import { CarsContext } from "../../contexts/CarsContext"
import { useModalContext } from "../../contexts/ModalContext"
import { UserContextObj } from "../../contexts/UserContext"

import carImg from "/src/assets/cars/car.png"
import { FavoriteRed, GasIcon, Users, Wheel, Favorite } from "../../assets/icon"
import { Link } from "react-router-dom"
import { json } from "stream/consumers"
import { CarType } from "../../contexts/CarsContext"

type CarCardType = {
  car: CarType
}
type CarFavouriteType = {
  googleId: number
  isFavourite: boolean
}
const CarCard = ({ car }: CarCardType) => {
  const [error, setError] = useState(false)
  const [favourite, setFavourite] = useState<boolean>(false)
  const context = useContext(CarsContext)
  const { googleId } = useContext(UserContextObj)
  const { addToFavourite } = context
  const [carFavourite, setCarFavourite] = useState<CarFavouriteType>({
    googleId: parseInt(googleId),
    isFavourite: false,
  } as CarFavouriteType)

  useEffect(() => {
    if (googleId) {
      console.log("ran")
      let lS = localStorage.getItem("isFavourite") as string
      console.log(lS,"LS")
      if (lS) {
        setCarFavourite(JSON.parse(lS))
        console.log(lS, ":LS")
      } else {
        setCarFavourite((prevState) => {
          return {
            ...prevState,
            googleId: parseInt(googleId),
            isFavourite: false,
          }
        })
      }
    } else {
      // setError(false)
      setCarFavourite((prevState) => {
        return { ...prevState, googleId: 0, isFavourite: false }
      })
    }
  }, [googleId])

  useEffect(() => {
    setCarFavourite((prevState) => {
      return { ...prevState, isFavourite: favourite }
    })
    localStorage.setItem("isFavourite", JSON.stringify(carFavourite))
  }, [favourite])
  const handleFavourite = (id: number) => {
    setFavourite((prevState) => !prevState)
    addToFavourite(id)
  }
  // console.log(googleId)

  const features = [
    {
      icon: <Icon src={GasIcon} />,
      title: "90L",
    },
    {
      icon: <Icon src={Wheel} />,
      type: "Manual",
    },
    {
      icon: <Icon src={Users} />,
      qty: "2 People",
    },
  ]
  return (
    <CarCardWrapper>
      <Article>
        <CardRow1>
          <CardTitle>
            Koenigsegg <CardTag>Sport</CardTag>
          </CardTitle>
          <Icon
            src={
              carFavourite.googleId == parseInt(googleId)
                ? carFavourite.isFavourite
                  ? FavoriteRed
                  : Favorite
                : Favorite
            }
            onClick={() => handleFavourite(car._id)}
          />
        </CardRow1>
        <CardRow2>
          <img src={carImg} />
        </CardRow2>
        <CardRow3>
          {features.map((feature) => (
            <CardSpesificationDiv key={feature.type}>
              {feature.icon}{" "}
              <CardSpesification>{feature.title}</CardSpesification>
              <CardSpesification>{feature.type}</CardSpesification>
              <CardSpesification>{feature.qty}</CardSpesification>
            </CardSpesificationDiv>
          ))}
        </CardRow3>
        <CardRow4>
          <div>
            <PricePerDay>
              $99.00/<PricePerDaySmall>day</PricePerDaySmall>
            </PricePerDay>
            <PricePerDaySmall>$100.00</PricePerDaySmall>
          </div>
          <RentNowButton>
            <Link
              to="/car-details"
              style={{ textDecoration: "none", color: "white" }}
            >
              Rent Now
            </Link>
          </RentNowButton>
        </CardRow4>
      </Article>
    </CarCardWrapper>
  )
}

export default CarCard
