
import AllRoutes from "./components/AllRoutes";
import Footer from "./components/Footer";
import {HashRouter} from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <>
        <HashRouter>
            <Header/>
            <AllRoutes/>
            <Footer/>
        </HashRouter>
        <ToastContainer className="toast" position="top-center" style={{width: "150px"}} />
        </>
    );
}
export default App;
