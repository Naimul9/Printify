

const Promotion = () => {
    return (
        <div className="flex mt-20 gap-20 px-20 container mb-28 mx-auto">
            <div>
                <img  className="h-[120px] w-[120px] " src="/higher-profits.svg" alt="" />
                <h1 className="font-cerebi font-bold text-2xl mt-7">Higher Profits</h1>
                <p  className="w-[330px] text-base font-roboto normal mt-6" >We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</p>
            </div>


<div>
    <img className="h-[120px] w-[120px] " src="/robust-scaling.svg" alt="" />
    <h1 className="font-cerebi font-bold text-2xl mt-7">Robust Scaling</h1>
    <p  className="w-[330px] text-base font-roboto normal mt-6" >Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.</p>
</div>

<div>
    <img  className="h-[120px] w-[120px] " src="/best-selection.svg" alt="" />
    <h1 className="font-cerebi font-bold text-2xl mt-7">Best Selection</h1>
    <p  className="w-[330px] text-base font-roboto normal mt-6"  >With 900+ products and top quality brands, you can choose the best products for your business.</p>
</div>



        </div>
    );
};

export default Promotion;