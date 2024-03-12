import { BrowserRouter,Routes,Route } from "react-router-dom"
import ContactPage from "../pages/contactpage";
import LandingPage from "../pages/landingpage";

const Routing=()=>{
    return(<>
            <BrowserRouter>
        <Routes>
        <Route path="/" element={<LandingPage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>

        </Routes>
        </BrowserRouter>
    </>)
}
export default Routing;