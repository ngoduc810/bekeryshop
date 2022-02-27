import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './component/cart/Cart';
import Meal from './component/container/Meal';
import Footer from './component/footer/Footer';
import Navbar from './component/Navbar/Navbar';
import Navigation from './component/navigation/Navigation';
import Page from './component/pages/Page';

function App() {
  return (
    <>
      <Routes>
        <Route path='navigation' element={<Navigation />} />
        <Route path='/' element={
          <>
            <Navbar />
            <Meal />
            <Footer />
          </>
        } />
        <Route path='/page' element={
        <>
          <Navbar />
          <Page />
          <Footer />
        </>
        } />
        <Route path='/cart' element={
        <>
          <Navbar />
          <Cart />
          <Footer />
        </>
        } />
      </Routes>

    </>
  );
}

export default App;
