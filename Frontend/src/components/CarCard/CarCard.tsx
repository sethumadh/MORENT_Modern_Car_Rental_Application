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
import { UserContextObj } from "../../contexts/UserContext"

import { FavoriteRed, GasIcon, Users, Wheel, Favorite } from "../../assets/icon"
import { Link } from "react-router-dom"
import { CarType } from "../../contexts/CarsContext"
import { CarFavouriteContext } from "../../contexts/CarFavouriteContext"

type CurrentValueType = {
  carId: number
  value: boolean
  gId: number
}[]
type CarCardType = {
  car: CarType
}

const CarCard = ({ car }: CarCardType) => {
  const [toggle, setToggle] = useState<boolean>(false)
  const context = useContext(CarsContext)
  const carFavouriteContext = useContext(CarFavouriteContext)
  const { addToFavourite } = context
  const { handleFavourite, userFavourite } = carFavouriteContext
  const [userId, setUserId] = useState(0)
  const [userValue, setUserValue] = useState(false)

  useEffect(() => {
    console.log("immediate")
    let cV: CurrentValueType = userFavourite.filter(
      (item) => item.carId == car._id
    )
    console.log(cV[0], ":currentValue")
    setUserId(cV[0]?.gId)
    setUserValue(cV[0]?.value)
  }, [userFavourite, toggle])

  const features = [
    {
      icon: <Icon src={GasIcon} />,
      title: `${car.maximum_gasoline}L`,
    },
    {
      icon: <Icon src={Wheel} />,
      type: "Manual",
    },
    {
      icon: <Icon src={Users} />,
      qty: `${car.seat_capacity} People`,
    },
  ]
  return (
    <CarCardWrapper>
      <Article>
        <CardRow1>
          <CardTitle>
            {car.car_title} <CardTag>{car.car_body_type}</CardTag>
          </CardTitle>
          <Icon
            src={userId ? (userValue ? FavoriteRed : Favorite) : Favorite}
            onClick={() => {
              handleFavourite(car._id)
              setToggle(!toggle)
              addToFavourite(car._id)
            }}
          />
        </CardRow1>
        <CardRow2>
          <img src={car.file_path} />
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
              ${car.daily_rate}/<PricePerDaySmall>day</PricePerDaySmall>
            </PricePerDay>
            <PricePerDaySmall>${car.daily_rate}</PricePerDaySmall>
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
