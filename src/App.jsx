import React from "react";
import Prop from "./components/Props/prop.jsx";
import UserCart from "./components/Usercarts/UserCart.jsx";
import QRCodeGenerator from "./components/QRcode-Project/Qrcode.jsx";
import Cart from "./components/Usestate/cart.jsx";
// import './Styles/QrCode.css';

const App = () => {
  return (
    <div>
      {/* <Prop name = "Rajesh"></Prop> */}
      {/* <UserCart/> */}
      {/* <QRCodeGenerator /> */}
      <Cart/>
    </div>
  );
};

export default App;
