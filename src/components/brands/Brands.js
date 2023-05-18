import NavigationBar from "../NavigationBar";
import Content from "../Content";
import { useLocation } from "react-router-dom";


function Brands({products}) {


    return(
        <div>
            <NavigationBar/>
            <p>Brand:</p>
        </div>
    )
}

export default Brands;