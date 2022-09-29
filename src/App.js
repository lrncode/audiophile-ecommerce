import { useState } from 'react';
import { Routes , Route } from 'react-router-dom';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import SharedLayout from './components/SharedLayout';
import CategoryPage from './components/CategoryPage';
import ProductDataProvider from './context/ProductDataContext';
import './css/App.css';
import ProductPage from './components/ProductPage';

function App() {

  const [showMobileMenu,setShowMobileMenu] = useState(false)

  function toggleMobileMenu(){
    setShowMobileMenu(prev => !prev)
  }

  return (
    <ProductDataProvider>
      <Routes>
        <Route path='/' element={<SharedLayout toggleMobileMenu={toggleMobileMenu}
                                               showMobileMenu={showMobileMenu}/>}>
          <Route index element={<Home />}/>
            <Route path='/:categoryName' element={<CategoryPage />} />    
            <Route path='/:categoryName/:productName' element={<ProductPage />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </ProductDataProvider>
  );
}

export default App;
