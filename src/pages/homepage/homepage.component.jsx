import React from 'react';
import './homepage.style.scss';
import { HomePageContainer } from './homepage.styles.jsx';
import Directory from '../../components/directory/directory.component'
const HomePage = () => (
<HomePageContainer>
<Directory/>
</HomePageContainer>
);

export default HomePage;