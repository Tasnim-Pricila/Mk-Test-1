import './App.css';
import About from './components/About/About';
import Available from './components/Available/Available';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Reviews from './components/Reviews/Reviews';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App bg-[#F2F2F2]">
      <Header></Header>
      <Banner></Banner>
      <Available></Available>
      <About></About>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
}

export default App;
