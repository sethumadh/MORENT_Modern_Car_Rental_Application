import { FC } from 'react';

import { Header, Footer, ProfileComponent } from '../../components';
import { ProfileWrapper } from './styles';

const Profile: FC = () => {
    return (
        <ProfileWrapper>
            <ProfileComponent />
            <Footer />
        </ProfileWrapper>
    )
}

export default Profile; 