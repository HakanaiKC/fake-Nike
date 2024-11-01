import Carousel from "antd/es/carousel";
import { Link } from "react-router-dom";
import WhiteNike from "../../assets/img/shoes pink/W+NIKE+CORTEZ Pink.png";
import { InterestedIcon } from "../../components/icons/IconSvg";
import { Button, Col, InputNumber, Row } from "antd";
import { useState } from "react";

const shoesSlides = Array(6).fill({
  imgSrc: "https://picsum.photos/535/669",
  alt: "AirMax90 shoes",
  title: "nike air max 90 lv8",
  description: "women's shoes",
  price: "4,109,000₫",
});

const CartPage = () => {
  const [value, setValue] = useState<number>(0);

  const handleIncrement = () => {
    setValue((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (value > 0) {
      setValue((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="mt-9">
        <main className="flex">
          <div>
            <div className="border border-gray-400 p-3">
              <h2 className="text-xl text-[#FF5000] font-bold">
                Free Delivery for Members.
              </h2>
              <p>
                Become a Nike Member to get fast and free delivery.{" "}
                <Link to={"/register"} className="underline text-gray-500">
                  Join us
                </Link>{" "}
                or{" "}
                <Link to={"/login"} className="underline text-gray-500">
                  Sign in
                </Link>
              </p>
            </div>
            <div>
              <h2 className="capitalize text-2xl font-bold">bag</h2>
              <div className="flex items-center">
                <div>
                  <img
                    src={WhiteNike}
                    alt="Nike Cortez Textile"
                    className="w-[164px] h-[164px]"
                  />
                </div>
                <div>
                  <p className="font-bold">Nike Air Max 95</p>
                  <p className="text-gray-500">Men's Shoes</p>
                  <p className="text-gray-500">
                    Sequoia/Cargo Khaki/Medium Olive/White
                  </p>
                  <p className="text-gray-500">
                    Size <span className="underline">5.5</span>
                  </p>
                  <p className="text-gray-500 underline">Gift Options</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex">
                  <Button className="rounded-full" onClick={handleDecrement}>-</Button>
                  <div className="border border-t-gray-300 border-b-gray-300">{value}</div>
                  <Button className="rounded-full" onClick={handleIncrement}>+</Button>
                </div>
                <div className="p-2 hover:bg-gray-300 rounded-full border border-gray-300">
                  <InterestedIcon />
                </div>
              </div>
            </div>
            <div>
              <h2 className="capitalize text-2xl font-bold">favourites</h2>
              <p>
                Want to view your favourites?{" "}
                <Link to={"/register"} className="underline text-gray-500">
                  Join us
                </Link>{" "}
                or{" "}
                <Link to={"/login"} className="underline text-gray-500">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
          <div></div>
        </main>
      </div>
      <div className="pt-20 px-12">
        <h2 className="capitalize text-2xl pb-6 mt-10">you might also like</h2>
        <Carousel
          slidesToShow={3}
          infinite
          draggable
          dots={false}
          centerMode
          className="capitalize"
        >
          {shoesSlides.map((slide, index) => (
            <Link to={`/`}>
              <div key={index} className="slide p-2">
                <img
                  src={slide.imgSrc}
                  alt={slide.alt}
                  className="h-full w-full"
                />
                <h4 className="pt-3 font-bold">{slide.title}</h4>
                <h5 className="text-gray-500">{slide.description}</h5>
                <h3 className="pt-2 font-bold">{slide.price}</h3>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CartPage;
