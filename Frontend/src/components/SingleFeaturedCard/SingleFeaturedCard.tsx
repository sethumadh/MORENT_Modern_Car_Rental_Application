import { FC } from "react";

import { FeaturedContent, FeaturedContentDesc, FeaturedContentImage, FeaturedContentTitle, FeaturedImage, FeaturedWrapper, RentNowButton } from "./styles";

import car from "/src/assets/cars/car2.png";


const SingleFeaturedCard: FC = () => {
  return (
    <FeaturedWrapper>
      <FeaturedContent >
        <FeaturedContentTitle>
          <h1>The Best Platform for Car Rental</h1>
        </FeaturedContentTitle>
        <FeaturedContentDesc>
          <h3>Ease of doing a car rental safely and reliably. Of course at a low price.</h3></FeaturedContentDesc>
        {/* <ButtonBlueLg /> */}

        <RentNowButton>
          Rent Car
        </RentNowButton>

        <FeaturedContentImage>
          <FeaturedImage src={car} />
        </FeaturedContentImage>
      </FeaturedContent>
    </FeaturedWrapper>
  )
}

export default SingleFeaturedCard;