import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductShowcase from './components/ProductShowcase';
import ItemComponent from './components/ProductDiscount';
import ProductGridComponent from './components/ProductGrid'; 
import SummerSale from './components/SummerSale';
import Footer from './components/Footer';
import ProductCards from './components/ProductCards';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProductShowcase />
      <ProductGridComponent />
      <ProductCards />
      <ItemComponent />
      <SummerSale />
      <Footer />
    </div>
  );
}

export default App;
