import React from "react";
import Prop from "./components/Props/prop.jsx";
import UserCart from "./components/Usercarts/UserCart.jsx";
import QRCodeGenerator from "./components/QRcode-Project/Qrcode.jsx";
import Cart from "./components/Usestate/CartPractise/Cart.jsx";
import RegisterForm from "./components/Usestate/RegisterForm/RegisterForm.jsx";
import Advice from "./components/Usestate/AdviceApp/Advice.jsx";
// import Temp from "./components/UseEffect/baseTemp.jsx";
// import  from "module"; Quiz from "./components/Quiz_app/Quiz.jsx";
import Grandparent from "./components/UseContext/Grandparent.jsx";

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
      <Grandparent />

    </div>
  );
};

export default App;
