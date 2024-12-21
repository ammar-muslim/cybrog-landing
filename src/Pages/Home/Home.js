import "./Home.css"

import { Hero , MostPopular , GamingLibirary } from '../../sections/index';


const Home = () => {
  return (
    <>
    <h1 className="home-title"> Home page </h1>
            <Hero />
        <MostPopular />
        <GamingLibirary />
        </>
  )
}

export default Home