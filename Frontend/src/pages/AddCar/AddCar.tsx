import { FC } from 'react';

import { Header, Footer, ProfileComponent, AddCarForm, Confirmation } from '../../components';
import { AddCarWrapper, FormSection } from './styles';


const AddCar: FC = () => {
    return (
        <AddCarWrapper>
            <FormSection>
                <AddCarForm />
                <Confirmation />
            </FormSection>
            <Footer />
        </AddCarWrapper>
    )
}

export default AddCar; 