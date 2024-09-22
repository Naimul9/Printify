
import Banner from "../Banner";
import Connect from "../Connect";
import Product from "../Product";
import Promotion from "../Promotion";

const Home = () => {
    return (
        <div className="pt-28" >
            <Banner/>
            <Promotion/>
            <Product/>
            <Connect/>
            
          
        </div>
    );
};

export default Home;