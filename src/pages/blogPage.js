import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Header from '../components/Header/header';
import Blogging from '../components/Blogging/blogging';
import Footer from '../components/Footer/footer';
import BlogImg from '../assets/blog.jpg';

const BlogPage = () => {
  return (
    <div>
      <Navbar/>
      <Header pName="header-mid"
      Image={BlogImg}
      title="Blog"
      btnClass="hide"
     />
     <Blogging/>
     <Footer/>
    </div>
  )
}

export default BlogPage;


