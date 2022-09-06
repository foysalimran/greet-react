import React from 'react';
import Footer from "../global/footer";
import heroData from '../../data/single-page-hero.json'
import AllProjects from '../all-projects';
import SinglePageHeader from '../global/single-page-header';

const AllProject = ({ header }) => {
    const {allProjectHero} = heroData;
   const {title} = allProjectHero;
    return (
        <div>
            <SinglePageHeader header={header} />
            <AllProjects title={title} />
            <Footer />
        </div>
    );
};

export default AllProject;