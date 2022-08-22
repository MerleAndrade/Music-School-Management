
import AllRoutes from "./components/AllRoutes";
import Footer from "./components/Footer";
import {HashRouter} from "react-router-dom";
import React from "react";
import Header from "./components/Header";

function App() {
    return (
        <HashRouter>
            <Header/>
            <AllRoutes/>
            <Footer/>
        </HashRouter>
    );
}
export default App;
