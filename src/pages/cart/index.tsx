import Carousel from "antd/es/carousel";
import { Link, useLocation } from "react-router-dom";
import WhiteNike from "../../assets/img/shoes pink/W+NIKE+CORTEZ Pink.png";
import { InterestedIcon } from "../../components/icons/IconSvg";
import { Button, Tooltip } from "antd";
import { useState } from "react";
import { QuestionCircleFilled } from "@ant-design/icons";
import { decrementQuantity, getProductInCartDetails, incrementQuantity } from "../../reducers/cartSlice";
import { useAppDispatch, useAppSelector } from "../../stores/hook";
import formatPrice from "../../utils/formatter";
import { ProductCartDetail } from "../../type/cart-types";

const shoesSlides = Array(6).fill({
  imgSrc: "https://picsum.photos/535/669",
  alt: "AirMax90 shoes",
  title: "nike air max 90 lv8",
  description: "women's shoes",
  price: "4,109,000₫",
});

const text =
  "The subtotal reflects the total price of your order, including taxes, before any applicable discounts. It does not include delivery costs and international transaction fees.";

const CartPage = () => {
  const productToCart = useAppSelector(getProductInCartDetails)
  const dispatch = useAppDispatch();
  console.log(productToCart);
  
  const handleIncrement = (productDetails: ProductCartDetail) => {
    dispatch(incrementQuantity(productDetails))
  };

  const handleDecrement = (productDetails: ProductCartDetail) => {
    dispatch(decrementQuantity(productDetails))
  };

  const totalCartPrice = productToCart.reduce((acc: any, item) => {
    return acc + item.quantity * item.price;
  }, 0)

  return (
    <>
      <div className="mt-9">
        <div className="flex w-full justify-center">
          <div className="mr-6 max-w-2/3">
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
            <div className="mt-3">
              <h2 className="capitalize text-2xl font-bold">bag</h2>
              {productToCart.length > 0 && productToCart.map(item => (
                <>
                  <div className="flex items-start py-6">
                    <div>
                      <img
                        src={item.thumbnail}
                        alt="Nike Cortez Textile"
                        className="w-[164px] h-[164px] mr-5"
                      />
                    </div>
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p className="text-gray-500">{item.brand_name}</p>
                      <p className="text-gray-500">
                        Size <span className="underline cursor-pointer">{item.size}</span>
                      </p>
                    </div>
                    <div className="ml-12">
                      <p className="font-bold">{formatPrice(item.price)}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 pb-6 border-b border-gray-300">
                    <div className="flex items-center gap-2 border border-gray-300 rounded-full">
                      <Button
                        className="border-0 w-10 h-10 rounded-full hover:!bg-gray-300 hover:!text-black"
                        onClick={() => handleDecrement(item)}
                      >
                        -
                      </Button>
                      <div className="min-w-[20px] text-center">{item.quantity}</div>
                      <Button
                        className="border-0 w-10 h-10 rounded-full hover:!bg-gray-300 hover:!text-black"
                        onClick={() => handleIncrement(item)}
                      >
                        +
                      </Button>
                    </div>
                    <div className="p-2 rounded-full border border-gray-300 hover:bg-gray-300">
                      <InterestedIcon />
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="mt-6">
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
          <div className="max-w-1/3">
            <h2 className="capitalize text-2xl font-bold mt-6">Sumary</h2>
            <div className="grid grid-cols-2 gap-y-2 py-4">
              <div className="flex items-center">
                <span>Subtotal</span>
                <Tooltip
                  placement="bottomRight"
                  title={text}
                  className="ml-2"
                  color="rgb(88, 88, 88)"
                >
                  <QuestionCircleFilled className="w-3" />
                </Tooltip>
              </div>
              <span className="text-right">{formatPrice(totalCartPrice)}</span>

              <span>Estimated Delivery & Handling</span>
              <span className="text-right">Free</span>

              <div className="col-span-2 py-4 my-3 border border-y-gray-300">
                <div className="flex justify-between">
                  <span>Total</span>
                  <span className="text-right">{formatPrice(totalCartPrice)}</span>
                </div>
              </div>
            </div>
            <div>
              <button className="w-full py-[18px] px-6 bg-black text-white capitalize rounded-[30px] font-bold mb-3">
                guest checkout
              </button>
              <button className="w-full py-[18px] px-6 bg-black text-white capitalize rounded-[30px] font-bold">
                member checkout
              </button>
            </div>
          </div>
        </div>
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
            <Link to={`/`} key={index + Date.now()}>
              <div className="slide p-2">
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
