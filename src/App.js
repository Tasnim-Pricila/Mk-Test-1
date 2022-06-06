import './App.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import PopUnder from './components/PopUnder';
import BannerAd from './components/BannerAd';
import Native from './components/Native';
import Skim from './components/Skim';
AOS.init();

function App() {
  return (
    <div className="App bg-[#F2F2F2]">
      
      <Routes>
        <Route path='/' element={<Home></Home>}>
            <Route index element={<PopUnder></PopUnder>}></Route>
            <Route path='/bannerAd' element={<BannerAd></BannerAd>}></Route>
            <Route path='/native' element={<Native></Native>}></Route>
            <Route path='/skim' element={<Skim></Skim>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
