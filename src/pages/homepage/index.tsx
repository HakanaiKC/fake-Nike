import styles from "./index.module.css";
import { Carousel } from "antd";
import Nike1 from "../../assets/img/nike-just-do-it.jpg";
import Nike2 from "../../assets/img/nike-just-do-it.jfif";
import Nike3 from "../../assets/img/image.jfif";
import Nike4 from "../../assets/img/nike-just-do-it-2.jpg";
import V2k from "../../assets/img/v2k_shoes.png";
import AirMax90 from "../../assets/img/air-max-90-lv8-shoes-5KhTdP.png";
import NikeRunning from "../../assets/img/nike_running.jpg";
import NikeMember from "../../assets/img/nike-member.jpg";
import { ProductCategory } from "../../type/product-types";
import { Link } from "react-router-dom";

const Product = [
  {
    imgUrl: Nike1,
    category: ProductCategory.JUST_IN,
    name: "P6000",
  },
  {
    imgUrl: Nike2,
    category: ProductCategory.RUN_IN_RAIN,
    name: "Nike Pegasus 41 GORE-TEX",
  },
  {
    imgUrl: Nike3,
    category: ProductCategory.EASY_ON,
    name: "For playtime",
  },
];
const HomepageComponent = () => {
  const membersSlides = Array(8).fill({
    imgSrc: NikeMember,
    alt: "Nike Member",
    title: "your exclusive access",
    description: "member product",
  });

  const sportSlides = Array(8).fill({
    imgSrc: NikeRunning,
    alt: "Nike Running",
    buttonText: "running",
  });

  const vkSlides = Array(6).fill({
    imgSrc: V2k,
    alt: "V2K shoes",
  });

  const shoesSlides = Array(6).fill({
    imgSrc: AirMax90,
    alt: "AirMax90 shoes",
    title: "nike air max 90 lv8",
    description: "women's shoes",
    price: "4,109,000₫",
  });

  const menuItems = [
    ["Icons", "Air Force 1", "Huarache", "Air Max 90", "Air Max 95"],
    [
      "All Shoes",
      "Custom Shoes",
      "Jordan Shoes",
      "Running Shoes",
      "Basketball Shoes",
    ],
    [
      "Clothing",
      "All Clothing",
      "Modest Wear",
      "Hoodies & Pullovers",
      "Shirts & Tops",
    ],
    [
      "Kids'",
      "Infant & Toddler Shoes",
      "Kids' Shoes",
      "Kids' Jordan Shoes",
      "Kids' Basketball Shoes",
    ],
  ];

  return (
    <section>
      <main>
        <Carousel
          className="text-center p-4 h-auto bg-gray-300"
          autoplay
          dots={false}
        >
          <div>
            <p className="text-base">New Styles On Sale: Up To 40% Off</p>
            <a href="#" className="underline text-xs">
              Shop All Our New Markdowns
            </a>
          </div>
          <div>
            <p className="text-base">
              Move, Shop, Customise & Celebrate With Us
            </p>
            <p className="text-xs">
              No matter what you feel like doing today, It's better as a Member.
            </p>
            <a href="#" className="underline text-xs">
              Join Us
            </a>
          </div>
          <div>
            <p className="text-base">
              Free Standard Delivery & 30-Day Free Returns
            </p>
            <a href="#" className="underline pr-3 text-xs">
              Join Now
            </a>
            <a href="#" className="underline text-xs">
              View Details
            </a>
          </div>
        </Carousel>

        <>
          <video
            className="h-[900px] w-full object-cover"
            muted
            loop
            autoPlay
            controls={false}
            src="src/assets/video/Nike Shoes Ad Motion Graphics_ A Visual Masterpiece __ after effects - VIKAZ OFFICIAL (1080p, h264, youtube).mp4"
          />

          <div className="text-center py-9">
            <p className="capitalize text-base pb-2">nike running</p>
            <h3
              className={`${styles.text_banner} uppercase font-bold text-7xl text-banner`}
            >
              winning isn't comfortable
            </h3>
            <p className="text-base pb-5 pt-2">
              If you don't hate running a little, you don't love running enough.
            </p>
            <button className="bg-black text-white rounded-full capitalize px-4 py-2 font-bold">
              shop running
            </button>
          </div>
        </>

        <div className="pt-20 px-12">
          <h2 className="capitalize text-2xl pb-6">featured</h2>
          <div className="grid grid-cols-3 gap-4">
            {Product.map((item, index) => (
              <div className="relative" key={item.imgUrl + index}>
                <div className="h-full w-full overflow-hidden">
                  <img
                    src={item.imgUrl}
                    alt="Nike Just Do It!"
                    className="hover:scale-125"
                  />
                </div>
                <div className="absolute bottom-12 left-12">
                  <p className="pb-2 text-white">{item.category}</p>
                  <h3 className="pb-5 text-white text-xl">{item.name}</h3>
                  <button className="bg-white text-black rounded-full capitalize px-4 py-1">
                    shop
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-20 px-12">
          <h2 className="capitalize text-2xl pb-6">see what's new</h2>
          <Carousel
            slidesToShow={3}
            infinite
            draggable
            dots={false}
            centerMode
            className="capitalize"
          >
            {shoesSlides.map((slide, index) => (
              <Link to={`product/1`}>
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

        <div className="pt-20 px-12">
          <h2 className="capitalize text-2xl pb-6">trending</h2>
          <video
            className="h-[900px] w-full object-cover"
            muted
            loop
            autoPlay
            controls={false}
            src="src/assets/video/Nike - You Can t Stop Us (2020).mp4"
          />
          <div className="text-center py-9">
            <h3
              className={`${styles.text_banner} uppercase font-bold text-7xl text-banner`}
            >
              i get up
            </h3>
            <p className="text-base pb-5 pt-2">
              Meet the JA 2. Built to help hoopers get up and rise above it all.
            </p>
            <button className="bg-black text-white rounded-full capitalize px-4 py-2 font-bold">
              shop
            </button>
          </div>
        </div>

        <div className="pt-20 px-12">
          <h2 className="capitalize text-2xl pb-6">classic spotlight</h2>
          <Carousel
            arrows
            slidesToShow={5}
            infinite
            draggable
            dots={false}
            centerMode
          >
            {vkSlides.map((slide, index) => (
              <div key={index} className="slide p-2">
                <Link to={"/product/listproducts"}>
                  <img
                    src={slide.imgSrc}
                    alt={slide.alt}
                    className="h-full w-full"
                  />
                </Link>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="pt-20 px-12">
          <h2 className="capitalize text-2xl pb-6">don't miss</h2>
          <img src={Nike4} alt="Just Do It" />
          <div className="text-center py-9">
            <p className="capitalize text-base pb-2">men's jordan spizike</p>
            <h3
              className={`${styles.text_banner} uppercase font-bold text-7xl text-banner`}
            >
              it's gotta be the remix
            </h3>
            <p className="text-base pb-5 pt-2">
              It's back like it never left. Five Air Jordan retros cut it up in
              the classic Spizike.
            </p>
            <button className="bg-black text-white rounded-full capitalize px-4 py-2 font-bold">
              shop
            </button>
          </div>
        </div>

        <div className="pt-20 px-12">
          <h2 className="capitalize text-2xl pb-6">shop by sport</h2>
          <Carousel
            arrows
            slidesToShow={3}
            infinite
            draggable
            dots={false}
            centerMode
          >
            {sportSlides.map((slide, index) => (
              <div key={index} className="relative p-2">
                <img
                  src={slide.imgSrc}
                  alt={slide.alt}
                  className="h-full w-full"
                />
                <div className="absolute bottom-12 left-12">
                  <button className="bg-white text-black rounded-full capitalize px-4 py-1 font-bold">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="pt-20 px-12">
          <h2 className="capitalize text-2xl pb-6">member benefits</h2>
          <Carousel
            arrows
            slidesToShow={3}
            infinite
            draggable
            dots={false}
            centerMode
          >
            {membersSlides.map((slide, index) => (
              <div key={index} className="relative p-2">
                <img
                  src={slide.imgSrc}
                  alt={slide.alt}
                  className="h-full w-full"
                />
                <div className="absolute bottom-12 left-12 p-4 font-bold capitalize">
                  <p className="pb-2 text-white">{slide.description}</p>
                  <h3 className="pb-5 text-white text-2xl">{slide.title}</h3>
                  <button className="bg-white text-black rounded-full capitalize px-4 py-1">
                    shop
                  </button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="menu-grid py-6 px-52 divide-y">
          <div className="grid grid-cols-4">
            {menuItems.map((column, colIndex) => (
              <ul key={colIndex} className="space-y-2">
                {column.map((item, index) =>
                  index === 0 ? (
                    <h4
                      key={index}
                      className="text-xl font-bold text-gray-900 pb-6"
                    >
                      {item}
                    </h4>
                  ) : (
                    <li key={index} className="text-gray-500 font-medium">
                      {item}
                    </li>
                  )
                )}
              </ul>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default HomepageComponent;
