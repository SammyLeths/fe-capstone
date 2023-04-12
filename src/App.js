import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';
import Home from './pages/home/Home';
import './app.module.scss';

function App() {
  return (
    <>
      <main>
        <Header />
        <Home />
        <Footer />
      </main>
    </>
  );
}

export default App;
