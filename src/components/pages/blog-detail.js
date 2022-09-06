import React from 'react';
import Footer from "../global/footer";
import heroData from '../../data/single-page-hero.json'
import BlogDetails from '../blog-details';
import SinglePageHeader from '../global/single-page-header';

const BlogDetail = ({ header }) => {
  const {singleBlogHero} = heroData;
  const {title} = singleBlogHero;
  return (
    <>
      <SinglePageHeader header={header} />
      <BlogDetails blogDetailsTitle={title} />
      <Footer />
    </>
  );
};

export default BlogDetail;
