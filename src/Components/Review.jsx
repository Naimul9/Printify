import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "Robert A. Voltaire",
    storeLink: "Store link",
    review: "Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!",
    rating: 5,
    image: "/robert-voltaire-RIZV7QXV.png"
  },
  {
    name: "Quinten Barney",
    storeLink: "Etsy Merchant",
    review: "We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top notch, and their platform just keeps getting better and better.",
    rating: 5,
    image: "/quinten-barney-CHC7B3FG.png",
  },
  {
    name: "Nikki",
    storeLink: "Store link",
    review: "Printify has been a amazing partner to work with as we grow our business, from the range of merch we can make for our customers to working with our Customer Service team (Hi Martin!) it's truly made the whole process a breeze.",
    rating: 5,
    image: "/nikki-TJP4NANB.png",
  },
  {
    name: "Spencer, Brett, and Kyle",
    storeLink: "Store link",
    review: "Using Printify has been a great experience. Customer service is always very quick to respond and handle any issues that our customers may have. The premium account has more than paid for itself and has increased our margins significantly.",
    rating: 5,
    image: "/spencer-brett-kyle-NLHTAZDT.png",
  },
];

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // For tablet and below
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For mobile and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-20 bg-[#f7f7f7]">

      {/* Trusted by over 8M */}
      <div className="w-full px-4 lg:px-0 lg:w-[1168px] mx-auto pt-16 lg:pt-28 flex flex-col lg:flex-row gap-6 lg:gap-14 text-center lg:text-left">
        <h1 className="text-[32px] lg:text-[40px] font-cerebi lg:w-[386px]">Trusted by over 8M sellers around the world</h1>
        <p className="font-roboto text-[14px] lg:text-[16px]">Whether you are just getting started or run an <br className="hidden lg:block"/> enterprise-level e-commerce business, we do <br className="hidden lg:block"/> everything we can to ensure a positive merchant <br className="hidden lg:block"/> experience.</p>
      </div>

      {/* Reviews Slider */}
      <div className="mt-12 lg:mt-16 h-auto lg:h-[500px] bg-[#f7f7f7] p-4 lg:p-10">
  <Slider {...settings}>
    {reviews.map((review, index) => (
      <div key={index} className="p-2 lg:p-6">
        <div className="bg-white p-4 lg:p-8 rounded-lg shadow-lg h-full flex flex-col justify-between">
          <div className="flex items-center mb-4">
            <img
              src={review.image}
              alt={review.name}
              className="w-10 h-10 lg:w-16 lg:h-16 rounded-xl object-cover"
            />
            <div className="ml-3 lg:ml-4">
              <h3 className="font-bold text-sm lg:text-lg">{review.name}</h3>
              <p className="text-green-600 text-xs lg:text-sm">{review.storeLink}</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            {Array(review.rating)
              .fill(0)
              .map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="none"
                  className="w-3 h-3 lg:w-5 lg:h-5 text-yellow-500"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
          </div>
          <p className="text-gray-600 text-xs lg:text-base leading-relaxed">
            {review.review}
          </p>
        </div>
      </div>
    ))}
  </Slider>
</div>


      {/* Decorative Bottom Element */}
      <div className="justify-center flex -mt-1">
        <svg className="w-[200px] lg:w-[300px] h-[42px] lg:h-[64px]" viewBox="0 0 300 62" xmlns="http://www.w3.org/2000/svg">
          <path d="M161.773 58.977a30 30 0 0 1-23.546 0L0 0h300L161.773 58.977z" fill="#f7f7f7" />
        </svg>
      </div>

    </div>
  );
};

export default Review;
