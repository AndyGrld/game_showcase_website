import './App.css';
import {useState} from 'react'
import Hero from './Components/Hero/Hero'
import MySlider from './Components/MySlider/MySlider'
import Footer from './Components/Footer/Footer'
import CardCollection from './Components/CardCollection/CardCollection';
import Heading from './Components/Heading/Heading';
import SubController from './Components/SubController/SubController';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const toogleTheme = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
      <div className={isDarkMode ? 'dark' : 'light' }>
        <Hero/>
        {/* <MySlider/> */}
        <Heading text='Top Downloads'/>
        <CardCollection/>
        <Heading text='Featured'/>
        <SubController/>
        <Footer/>
      </div>
  );
}

export default App;
