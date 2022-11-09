import Head from 'next/head'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PhotosGrid from './photoGrid'
import Carousel from '../components/carousel';
import SectionBreaker from '../components/section_breaker';




export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='banner__wrapper'>
        <div className="banner__img__wrapper">
          <img src="https://images.unsplash.com/photo-1571867424485-369464ed33cc?ixlib=rb-4.0.3" alt="" />
        </div>
        <div className='banner__title'>
          <h3>Our Vibrant Launch Ever</h3>
          <p>The softest, coziest merino wool is back and bigger than ever.</p>
          <div className='banner__buttons'>
            <button>Shop Men</button>
            <button>Shop Women</button>
          </div>
        </div>
      </div>

      <div className="grid__wrapper">
        <h1>Our Best Selling Gems</h1>
        <PhotosGrid />
      </div>

      
      <SectionBreaker img='https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3'>
        <>
          <h2>As Cozy as a Sheep. And Much Easier to Wrap.</h2>
          <p>Fully Fluff-graded shoes and apparel for the entire family can only mean one thing: it is never been easier to give the gift of comfort.</p>
          <button>SHOP NOW</button>
        </>
      </SectionBreaker>

      <>
        <Carousel />
      </>

      <SectionBreaker img='https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3'>
        <>
          <h2>As Cozy as a Sheep. And Much Easier to Wrap.</h2>
          <p>Fully Fluff-graded shoes and apparel for the entire family can only mean one thing: it is never been easier to give the gift of comfort.</p>
          <button>SHOP NOW</button>
        </>
      </SectionBreaker>
    </div>
  )
}
