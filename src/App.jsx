import Header from "./assets/Components/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainContent from "./assets/Components/MainContent/MainContent";
import Footer from "./assets/Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <MainContent />

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
