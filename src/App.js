import './App.css';
import About from './components/About/About';
import Available from './components/Available/Available';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App bg-slate-100">
      <Header></Header>
      <Banner></Banner>
      <Available></Available>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
