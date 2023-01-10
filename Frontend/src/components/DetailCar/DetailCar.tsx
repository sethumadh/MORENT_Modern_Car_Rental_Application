import SingleFeaturedCard3 from '../SingleFeaturedCard/SingleFeaturedCard3'
import { ActionButton, CarDescription, CarDetailImages, CarInfo, CarInfoContent, CarPrice, CarPriceAmt, CarRating, CarSpec, Container, InnerDiv } from './styles'

import carview1 from '../../assets/img/carview1.png'
import carview2 from '../../assets/img/carview2.png'
import carview3 from '../../assets/img/carview3.png'

import { FavoriteRed, starFill, starOutline } from '../../assets/icon'

const DetailCar = () => {
    return (
        <Container>
            <InnerDiv>
                <div><SingleFeaturedCard3 /></div>
                <CarDetailImages>
                    <div><img src={carview1} /></div>
                    <div><img src={carview2} /></div>
                    <div><img src={carview3} /></div>
                </CarDetailImages>
            </InnerDiv>
            <InnerDiv>
                <CarInfo>
                    <CarDescription>
                        <div>Nissan GT - R</div>
                        <img src={FavoriteRed} />
                    </CarDescription>
                    <CarRating>
                        <div>
                            <img src={starFill} />
                            <img src={starFill} />
                            <img src={starFill} />
                            <img src={starFill} />
                            <img src={starOutline} />
                        </div>
                        <div>440+ Reviewer</div>
                    </CarRating>
                    <CarInfoContent>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</CarInfoContent>
                    <CarSpec>
                        <div>
                            <div>Type Car</div>
                            <span>Sport</span>
                        </div>
                        <div>
                            <div>Capacity</div>
                            <span>2 Person</span>
                        </div>
                    </CarSpec>
                    <CarSpec>
                        <div>
                            <div>Type Car</div>
                            <span>Sport</span>
                        </div>
                        <div>
                            <div>Capacity</div>
                            <span>2 Person</span>
                        </div>
                    </CarSpec>
                    <CarPrice>
                        <div>
                            <div>$80.00/ <span>days</span></div>
                            <CarPriceAmt>$100.00</CarPriceAmt>
                        </div>
                        <ActionButton>Rent Now</ActionButton>
                    </CarPrice>
                </CarInfo>
            </InnerDiv>
        </Container>
    )
}

export default DetailCar