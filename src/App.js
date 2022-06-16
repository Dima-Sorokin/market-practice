import './App.css';
import React, { useState } from 'react'
import Product from './components/Product';
import homeLogo from './logos/home.png'
import cartLogo from './logos/shopping-cart.png';


function App() {
  const [products, setProducts] = useState([{ id: 1, name: 'Bold toothbrush', price: 5 }, { id: 2, name: 'Paper buket', price: 7 }, { id: 3, name: 'Crazy racoon', price: 30 }, { id: 4, name: 'Lumpy Pan', price: 29 }])
  const [cartList, setCartList] = useState();


  const addItems = (i) => {
    const newItem = products.filter((item) => item.id === i);
    if (cartList) {
      setCartList([...cartList, ...newItem]);
    } else {
      setCartList([...newItem]);
    }
  };

  const delCartItem = (i) => {
    const newCartList = cartList.filter((item) => item.id !== i);
    setCartList(newCartList);
  }

  const [nav, setNav] = useState(<div className="cart">
    <h1>Immediately buy in our fantastic shop!</h1>
    {products.map((item) => {
      return (<Product Prod={item} add={addItems} />)
    })}
  </div>);



  const renavigate = (dest) => {
    if (nav === 'cart') {
      return (
        <div className="cartContainer">
          <h1>Consider buying all the products in the shop.</h1>
          {Cart()}
        </div>
      )
    } else if (nav === 'buy') {
      return (
        <div>
          <h1>Congratulations!!!</h1><br></br>
          <h2>$$$$ All you'r money was transferd to US and you'r products was sent to NEPAL.$$$$ <br></br>
            Good luck.</h2>
        </div>
      )
    } else {
      return (
        <div className="cart">
          <h1>Immediately buy in our fantastic shop!</h1>
          {products.map((item) => {
            return (<Product page={'home'} Prod={item} add={addItems} />)
          })}
        </div>
      );
    }
  }

  const Cart = () => {
    debugger
    let totalPrice = 0;
    if (cartList) {
      return (
        <>{cartList.map((item) => {
          totalPrice = totalPrice + item.price;
          return (<Product page={'cart'} Prod={item} add={addItems} del={delCartItem} />)
        })}
          < div > <p>Total price: {totalPrice}</p><button onClick={() => { setNav('buy') }} style={{ width: '200px', fontSize: '20px', backgroundColor: 'green' }}>Buy everything</button></div></>
      )
    } else {
      return (<h2>The cart is still empty.</h2>);
    }
  }

  return (
    <div className="App">
      <div className='navBar'>
        <button onClick={() => { setNav('home') }} className='homeLogo' ><img className='button' src={homeLogo} alt='Home' width='50px' height='50px' /></button>
        <button onClick={() => { setNav('home') }} className='shopName'>The First International Useless Shop</button>
        <button onClick={() => { setNav('cart') }} className='cartLogo'> <img className='button' src={cartLogo} alt='Cart' width='50px' height='50px' /></button>
      </div>
      <div className='productContainer'>
        {renavigate()}
      </div>
      <p style={{color:`red`}}>Test content works !!!</p>
    </div>
  );
}

export default App;
