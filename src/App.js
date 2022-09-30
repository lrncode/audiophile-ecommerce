import { useState } from 'react';
import { Routes , Route } from 'react-router-dom';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import SharedLayout from './components/SharedLayout';
import CategoryPage from './components/CategoryPage';
import ProductDataProvider from './context/ProductDataContext';
import './css/App.css';
import ProductPage from './components/ProductPage';
import ShoppingCartProvider from './context/ShoppingCartContext';
import PopUpProvider from './context/PopUpContext';

function App() {

  return (
    <ShoppingCartProvider>
      <PopUpProvider>
        <ProductDataProvider>
          {/* <ShoppingCartProvider> */}
            <Routes>
              <Route path='/' element={<SharedLayout />}>
                <Route index element={<Home />}/>
                  <Route path='/:categoryName' element={<CategoryPage />} />    
                  <Route path='/:categoryName/:productName' element={<ProductPage />} />
                <Route path='*' element={<PageNotFound />} />
              </Route>
            </Routes>
          {/* </ShoppingCartProvider> */}
        </ProductDataProvider>
      </PopUpProvider>
    </ShoppingCartProvider>
  );
}

export default App;
