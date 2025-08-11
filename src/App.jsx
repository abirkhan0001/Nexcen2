
import './App.css'
import Achivment from './components/Achivment'
import Calendar from './components/Calendar'
import Customar from './components/Customar'
import Header from './components/Header'
import Hero from './components/heroSection/Hero'
import Card from './components/manageEntire/Card'
import ManageText from './components/manageEntire/ManageText'
import OurClients from './components/OurClients'
import Unlock from './components/Unlock'
import CommunityText from './components/Community/CommunityText'
import CommunityUpdate from './components/Community/CommunityUpadate'
import FooterText from './components/footer/FooterText'
import FooterMain from './components/footer/FooterMain'

function App() {
 

  return (
    <>
      <Header />
      <Hero />
      <OurClients />
      <ManageText />
      <Card />
      <Unlock />
      <Achivment />
      <Calendar />
      <Customar />
      <CommunityText />
      <CommunityUpdate />
      <FooterText/>
      <FooterMain />
      
    </>
  )
}

export default App
