import React from 'react';
import About from '../About/About';
import Available from '../Available/Available';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Ad from '../AD/Ad';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Available></Available>
            <Ad></Ad>
            <About></About>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;