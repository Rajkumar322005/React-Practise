import React from "react";
// import Prop from "./components/Props/prop.jsx";
// import UserCart from "./components/Usercarts/UserCart.jsx";
// import QRCodeGenerator from "./components/QRcode-Project/Qrcode.jsx";
// import Cart from "./components/Usestate/CartPractise/Cart.jsx";
// import RegisterForm from "./components/Usestate/RegisterForm/RegisterForm.jsx";
// import Advice from "./components/Usestate/AdviceApp/Advice.jsx";
// import Temp from "./components/UseEffect/baseTemp.jsx";
// import Grandparent from "./components/UseContext/Grandparent.jsx";
// import Quiz from "./components/Quiz_app/quiz.jsx";
import Home from "./components/Foodcart/Home.jsx";
import About from "./components/Foodcart/About.jsx";
import Cart from "./components/Foodcart/Cart.jsx";
import Header from "./components/Foodcart/header.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      {/* <Prop name = "Rajesh"></Prop> */}
      {/* <UserCart/> */}
      {/* <QRCodeGenerator /> */}
      {/* <Cart/> */}
      {/* <RegisterForm/> */}
      {/* <Advice/> */}
      {/* <Temp/> */}
      {/* <Quiz/> */}
      {/* <Grandparent /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
