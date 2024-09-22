const Product = () => {
    return (
        <div className="h-[1310px] bg-[#f7f7f7] relative">
            <div className="justify-center flex">
                <svg className="w-[300px] h-[64px]" viewBox="0 0 300 62" xmlns="http://www.w3.org/2000/svg">
                    <path d="M161.773 58.977a30 30 0 0 1-23.546 0L0 0h300L161.773 58.977z" fill="white" />
                </svg>
            </div>

            <div className="relative z-10">
                <img className="h-[648px] w-[461px] bg-[#18c75a] mt-20 ml-24 rounded-xl" src="/public/clothes-CMPWJ6JG.webp" alt="" />
                
            </div>
            <img className="absolute w-96 ml-56  -mt-[129px] z-40" src="/public/clothes-bottom-53OO5ML3.svg" alt="" />

            {/* White background placed under the image */}
            <div className="absolute top-[300px] left-10 right-0 h-[490px]  bg-white z-0 mx-16 rounded-xl">
            </div>
        </div>
    );
};

export default Product;
