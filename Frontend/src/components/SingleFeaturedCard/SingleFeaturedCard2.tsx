import { FC } from "react";

import { FeaturedContent, FeaturedContentDesc, FeaturedContentImage, FeaturedContentTitle, FeaturedImage, FeaturedWrapper, FeaturedWrapper2, RentNowButton2 } from "./styles";

import car from "/src/assets/cars/car3.png";


const SingleFeaturedCard2: FC = () => {
    return (
        <FeaturedWrapper2>
            <FeaturedContent>
                <FeaturedContentTitle>
                    <h1>Easy way to rent a car at a low price</h1>
                </FeaturedContentTitle>
                <FeaturedContentDesc>
                    <h3>Providing cheap car rental services and safe and comfortable facilities.</h3>
                </FeaturedContentDesc>
                <RentNowButton2>
                    Rent Now
                </RentNowButton2>
                <FeaturedContentImage>
                    <FeaturedImage src={car} />
                </FeaturedContentImage>
            </FeaturedContent>
        </FeaturedWrapper2>
    );
};

export default SingleFeaturedCard2;
