import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ItemDetail from './pages/ItemDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartPage from './pages/CartPage';
import SummaryPage from './pages/SummaryPage';
import { CartProvider } from './context/CartContext';

const App = () => (
  <CartProvider>
    <Router>
      <Navbar />
      <main className='flex-grow relative z-10'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/items/:id' element={<ItemDetail />} /> 
          <Route path='/cart' element={<CartPage />} />
          <Route path='/summary' element={<SummaryPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </CartProvider>
);

export default App;
