import { FC } from 'react';

import { Header, Footer, AsideLeft, DetailCar, SearchBar } from '../../components';
import { CarsForRent, RentedCars } from '../../components/CarsList';
import { CarDetailsWrapper, Container, MainContent } from './styles';


const CarDetails: FC = () => {
    return (
        <CarDetailsWrapper>
            <SearchBar showSearchBar={true} showFilter={true} />
            <Container>
                <AsideLeft />
                <MainContent>
                    <DetailCar />
                    <RentedCars />
                    <CarsForRent />
                </MainContent>
            </Container>
            <Footer />
        </CarDetailsWrapper>
    )
}

export default CarDetails; 