import Featured from "../../components/Featured/Featured"
import FeaturedList from "../../components/FeaturedList/FeaturedList"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import MailList from "../../components/MailList/MailList"
import Navbar from "../../components/navbar/Navbar"
import PropertyList from "../../components/PropertyList/PropertyList"
import "./home.css"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedList />
        <MailList />
        <Footer/>
      </div>
      
    </div>
  )
}

export default Home
