
import Banner from "../Banner";
import Connect from "../Connect";
import Product from "../Product";
import Promotion from "../Promotion";
import Review from "../Review";

const Home = () => {
    return (
        <div className="pt-28" >
            <Banner/>
            <Promotion/>
            <Product/>
            <Connect/>
            <Review/>
            
          
        </div>
    );
};

export default Home;