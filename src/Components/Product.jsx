const Product = () => {
    return (
        <div className="lg:h-[1310px] h-[2080px] bg-[#f7f7f7] relative">
            <div className="justify-center flex">
                <svg className="w-[300px] h-[64px]" viewBox="0 0 300 62" xmlns="http://www.w3.org/2000/svg">
                    <path d="M161.773 58.977a30 30 0 0 1-23.546 0L0 0h300L161.773 58.977z" fill="white" />
                </svg>
            </div>

            <div className="relative  z-10">
                <img className="h-[648px] lg:block hidden w-[461px] bg-[#18c75a] mt-20 ml-24 rounded-xl" src="/clothes-CMPWJ6JG.webp" alt="" />
                <img className="h-[248px] lg:hidden sm:block w-11/12 mx-auto bg-[#18c75a] mt-16 rounded-xl "  src="/clothes-mobile-Q6UN6X6P.webp" alt="" />
            </div>
            <img className="absolute w-96 lg:ml-56 ml-3  -mt-[129px] z-40" src="/clothes-bottom-53OO5ML3.svg" alt="" />

            {/* White background placed under the image with text */}
            <div className="absolute top-[300px] lg:left-10 right-0 h-[490px] bg-white z-0 mx-5 lg:mx-16 rounded-xl  ">
                <div className="flex justify-end lg:px-28 lg:py-20">
                <div className="lg:w-[450px] w-[380px] pl-10 lg:mt-20 mt-24">
                <h1 className=" font-cerebi text-[32px] ">Easily add your design to a  wide range of products</h1> 
                <p className="font-roboto text-base mt-5">With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</p>

                <p className="mt-5 text-[#39B75D] font-roboto font-medium flex items-center gap-2 ">All Products <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0L6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8-8-8z" fill="#29AB51"/></svg>  </p>
                </div>
                
                </div>
                
            </div>

{/* Create , sell , handle */}

<div className="flex lg:flex-row flex-col container gap-20 mx-auto lg:mt-[112px] mt-[450px] px-20">

<div className="w-[320px]">

<img className="w-[156px]  " src="/custom-products.png" alt="" />
<p className="font-cerebi text-[24px] mt-12 ">
    <span className=" text-[#29ab51] text-[18px] ">CREATE</span> <br />  custom products
</p>

<p className="text-[#485256] text-[14px] font-roboto mt-3 ">Easily add your designs to a wide range of products using our free tools</p>

</div>


<div className="w-[320px]"  >
    <img className="w-[156px] "  src="/your-products.png"  alt="" />

    <p className="font-cerebi text-[24px] mt-12 ">
    <span className=" text-[#29ab51] text-[18px] ">SELL</span> <br />  on your terms
</p>

<p className="text-[#485256] text-[14px] font-roboto mt-3 ">You choose the products, sale price, and where to sell</p>
</div>


<div className="w-[320px]" >
    <img className="w-[156px] "  src="/fullfillment.png" alt="" />


    <p className="font-cerebi text-[24px] mt-12 ">
    <span className=" text-[#29ab51] text-[18px] ">WE HANDLE</span> <br />  fulfillment
</p>

<p className="text-[#485256] text-[14px] font-roboto mt-3 "> Once an order is placed, we automatically handle all the printing and delivery logistics </p>

</div>

</div>
{/* Create , sell , handle */}

<div className="justify-center flex mt-16">
                <svg className="w-[300px] h-[64px]" viewBox="0 0 300 62" xmlns="http://www.w3.org/2000/svg">
                    <path d="M161.773 58.977a30 30 0 0 1-23.546 0L0 0h300L161.773 58.977z" fill="#f7f7f7" />
                </svg>
            </div>

   



        </div>
    );
};

export default Product;
