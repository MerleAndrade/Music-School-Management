
import AllRoutes from "./AllRoutes";
import Header from "./Header";
import Footer from "./Footer";
import {HashRouter} from "react-router-dom";

export default function App() {

  return (
      <HashRouter>
          <Header/>
          <main>
          <AllRoutes/>
          </main>
          <Footer/>
      </HashRouter>
                  );}

