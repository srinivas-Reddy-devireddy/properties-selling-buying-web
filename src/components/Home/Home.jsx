import React from 'react';

import './home.css'
import Sliders from '../Sliders/Sliders';
import Properties from '../Properties/Properties';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
const Home = () => {
  return (
    <>
    <Navbar/>
   
    <div className='home-container'>
       
       
       <div className='silders-container'>
       <Sliders/>
     {/* <img src="https://cdn.pixabay.com/animation/2023/03/28/02/15/02-15-52-868_512.gif" alt="Logo" className='img' /> */}
       </div>

     <div className='title-container'>
        <h1>Find Your Perfect Space with US</h1>
        <div className='conteant-container'>
        <p><a href="https://hometownlands.com/ ">Hometownlands.com </a> is designed to serve the individuals who looking to purchase or manage the properties.
</p> 
<p>The focus is on NRI's working abroad,settled in abroad.For every Individual there is a hometown.</p>
<p>There is saying, <span>JANANI JANMABHUMISHCHA SWARGADAPI GARIYASI</span> meaning mother and motherland arealways superior.</p>
<p> This is the tagline and motto where company derive its purpose and action working to provide better services to NRI's.</p>
<p>Company acts as agent between property owner and customer and helps the customer to find out thegenuine property </p>

<p>which is having perfect title and also manages those properties if customer requires</p>
        </div>

  
     </div>
     <Properties/>
     <Footer/>
    </div>
    </>
  );
};

export default Home;
