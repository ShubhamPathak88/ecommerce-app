import Blog from "../Component/Blog/Blog";
import FeactureProduct from "../Component/Feature/FeactureProduct";
import NewArrival from "../Component/NewArrival/NewArrival";

import Contact from "../Component/Contact/Contact"


export default function Home(){
    return(
        <>  
           
            <NewArrival/>
            <Blog/>
            <FeactureProduct/>
            <Contact/>
            
           

            
        </>
    );
}