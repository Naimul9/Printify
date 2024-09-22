import Banner from "../Banner";
import Product from "../Product";
import Promotion from "../Promotion";

const Home = () => {
    return (
        <div className="pt-28" >
            <Banner/>
            <Promotion/>
            <Product/>
          
        </div>
    );
};

export default Home;