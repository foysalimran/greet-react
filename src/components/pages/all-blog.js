import React from 'react';
import Footer from "../global/footer";
import AllBlogs from '../all-blogs';
import heroData from '../../data/single-page-hero.json'
import SinglePageHeader from '../global/single-page-header';

const AllBlog = ({ header }) => {
    const {allBlogHero} = heroData;
   const {title} = allBlogHero;
    return (
        <div>
            <SinglePageHeader header={header} />
            <AllBlogs title={title} />
            <Footer />
        </div>
    );
};

export default AllBlog;