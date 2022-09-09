import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';

function App() {
  const { products }= data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find(elem => elem.id === product.id);
    if (exist) setCartItems(cartItems.map(item =>
      item.id === exist.id ? {...exist, qty: exist.qty + 1} : item));
    else setCartItems([...cartItems, {...product, qty: 1}]);
  };

  const onRemove = (product) => {
    const exist = cartItems.find(elem => elem.id === product.id);
    if (exist.qty === 1) setCartItems(cartItems.filter(elem => elem.id !== product.id))
    else setCartItems(cartItems.map(item =>
      item.id === product.id ? {...product, qty: product.qty - 1} : item));
  };

  return (
    <div className="App">
      <Header countCartItems={ cartItems.length }></Header>
      <div className="row">
        <Main products={ products } onAdd={ onAdd }></Main>
        <Basket cartItems={ cartItems } onAdd={ onAdd } onRemove={ onRemove }></Basket>
      </div>
    </div>
  );
}

export default App;
