import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header'
import MainBody from './pages/MainBody'
import Footer from './pages/Footer'
function App() {
  return (
    <div className="App">
      <Header/>
      <MainBody/>
      <Footer/>
    </div>
  );
}

export default App;
