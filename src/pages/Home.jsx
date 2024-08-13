import React from 'react';
import Hero from '../components/Hero'
import ItemList from '../components/ItemList';

const Home = () => (
    <div className='container mx-auto'>
        <Hero />
        <ItemList />
    </div>
);

export default Home;