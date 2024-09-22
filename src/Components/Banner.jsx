
const Banner = () => {
    return (
        <div className="h-[612px] font-roboto  container mx-auto px-6 py-14 flex">

<div className="text-[#17262b]">
    <p className="text-[56px] font-cerebi font-bold mt-10">Create and sell <br /> custom products</p>
     
    <div className="space-y-2 mt-2">
    <p className="font-medium text-[#485256] text-base flex "> <img className="object-contain mr-3" src="/check-mark-EHPN4OB5.svg" alt="" />  100% Free to use</p>
     <p className="font-medium text-[#485256] text-base flex "> <img className="object-contain mr-3" src="/check-mark-EHPN4OB5.svg" alt="" /> 900+ High-Quality Products</p>
     <p className="font-medium text-[#485256] text-base flex "> <img className="object-contain mr-3" src="/check-mark-EHPN4OB5.svg" alt="" /> Largest global print network</p>
    </div>

    <div className="mt-12  flex gap-4">
        <button className="text-white font-medium  btn bg-[#39B75D] h-12 rounded-none w-[155px] ">Start for free</button>
        <button className="font-medium btn bg-transparent hover:bg-transparent h-12 rounded-none w-[175px] ">  <img className="h-4 w-4"  src="/play-JMSHNOGL.svg" alt="" />  How it works?</button>
    </div>

    <p className="mt-5 font-medium text-[#37a155]">Trusted by over 8M sellers around the world</p>

</div>



   <img className="ml-20" src="/background-IAMAETLT (1).svg" alt="" />

   <img className="-ml-[500px] z-20 h-[300px] p-5 bg bg-white rounded-xl mt-10 border border-gray-100" src="/img_5.png" alt="" />
     
     <div className="-ml-[150px]  h-[320px] w-[288px] p-5 bg bg-white rounded-xl mt-36 border border-gray-100" ></div>
            
        </div>
    );
};

export default Banner;