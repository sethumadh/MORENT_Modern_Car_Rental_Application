import { FC } from "react";

import { FeaturedContent, FeaturedContentDesc, FeaturedContentImage, FeaturedContentTitle, FeaturedImage, FeaturedWrapper, RentNowButton } from "./styles";

import car from "/src/assets/cars/car3.png";


const SingleFeaturedCard3: FC = () => {
    return (
        <FeaturedWrapper>
            <FeaturedContent>
                <FeaturedContentTitle>
                    <h1>Easy way to rent a car at a low price</h1>
                </FeaturedContentTitle>
                <FeaturedContentDesc>
                    <h3>Providing cheap car rental services and safe and comfortable facilities.</h3>
                </FeaturedContentDesc>

                <RentNowButton>
                    Rent Car
                </RentNowButton>
                <FeaturedContentImage>
                    <FeaturedImage src={car} />
                </FeaturedContentImage>
            </FeaturedContent>
        </FeaturedWrapper>
    );
};

export default SingleFeaturedCard3;
