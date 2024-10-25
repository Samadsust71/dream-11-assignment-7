import Header from "./assets/Components/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainContent from "./assets/Components/MainContent/MainContent";
import Footer from "./assets/Components/Footer/Footer";
import { useState } from "react";
import { toast } from 'react-toastify';

function App() {

  const [coin, setCoin] = useState(0);
  const handleFreeCredit= ()=>{
    setCoin(coin+1000000)
    toast.success('Free Credit Claimed Successfully!');
  }
  const moneyCount = (playerPrice=0)=>{
    if (playerPrice<=coin) {
      setCoin(coin-playerPrice)
    }
    else {
     return toast.warn("You do not have enough money")
    }
}
  return (
    <>
      <Header handleFreeCredit={handleFreeCredit} coin={coin} />
      <MainContent moneyCount={moneyCount} />

      <Footer />

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={false}
        draggable={true}
        theme="light"
      />
    </>
  );
}

export default App;
