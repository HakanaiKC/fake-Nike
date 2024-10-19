import {
  CartIcon,
  InterestedIcon,
  JordanLogo,
  LanguageIcon,
  Nikelogo,
} from "../../components/icons/IconSvg";
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
import { Link } from "react-router-dom";
import { ProductCategory } from "../../type/product-types";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";


const Product = [
  {
    imgUrl: Nike1,
    category: ProductCategory.JUST_IN,
    name: 'P6000'
  },
  {
    imgUrl: Nike2,
    category: ProductCategory.RUN_IN_RAIN,
    name: 'Nike Pegasus 41 GORE-TEX'
  },
  {
    imgUrl: Nike3,
    category: ProductCategory.EASY_ON,
    name: 'For playtime'
  },
]
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

  const footerItems = [
    [
      "Resources",
      "Find A Store",
      "Become A Member",
      "Send Us Feedback",
      "Find A Store",
      "Become A Member",
      "Send Us Feedback",
    ],
    [
      "Help",
      "Get Help",
      "Order Status",
      "Delivery",
      "Returns",
      "Payment Options",
      "Contact Us",
    ],
    [
      "About Nike",
      "About Nike",
      "News",
      "Careers",
      "Investors",
      "Sustainability",
    ],
  ];

  return (
    <section>
      <header className="bg-gray-300 flex justify-between px-10 py-2">
        <JordanLogo />
        <nav className="flex justify-items-end font-bold">
          <a
            href="#"
            className=" hover:text-gray-600 border-2  border-r-black pr-2 pl-2"
          >
            Find a Store
          </a>
          <a
            href="#"
            className=" hover:text-gray-600 border-2 border-r-black pr-2 pl-2"
          >
            Help
          </a>
          <a
            href="#"
            className=" hover:text-gray-600 border-2 border-r-black pr-2 pl-2"
          >
            Join Us
          </a>
          <Link to="/register" className=" hover:text-gray-600 border-2 pl-2">
            Sign Up
          </Link>
          <Link to="/login" className=" hover:text-gray-600 border-2 pl-2">
            Sign In
          </Link>
        </nav>
      </header>

      <header className="bg-white grid grid-cols-12 gap-4 items-center px-10 py-2">
        <div className="col-span-2">
          <Nikelogo />
        </div>

        <nav className="col-span-7 flex justify-center font-bold space-x-3">
          <a href="#" className="px-3">
            New & Featured
          </a>
          <a href="#" className="px-3">
            Men
          </a>
          <a href="#" className="px-3">
            Women
          </a>
          <a href="#" className="px-3">
            Kids
          </a>
          <a href="#" className="px-3">
            Sale
          </a>
          <a href="#" className="px-3">
            Customise
          </a>
          <a href="#" className="">
            SNKRS
          </a>
        </nav>

        <div className="col-span-3 flex items-center justify-end gap-4">
          <form className="border border-slate-300 rounded-3xl bg-gray-200 hover:bg-gray-300">
            <input
              type="text"
              className={`${styles.search_form} `}
              placeholder="Search"
            />
          </form>
          <div className="flex items-center space-x-4">
            <div className="p-2 hover:bg-gray-300 rounded-full">
              <InterestedIcon />
            </div>
            <div className="p-2 hover:bg-gray-300 rounded-full">
              <CartIcon />
            </div>
          </div>
        </div>
      </header>

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
            {Product.map(item => (
              <div className="relative">
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
                <img
                  src={slide.imgSrc}
                  alt={slide.alt}
                  className="h-full w-full"
                />
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

      <footer>
        <div className="menu-grid p-12 ">
          <div className="grid grid-cols-4 text-sm border-t-gray-300 border-2">
            {footerItems.map((column, colIndex) => (
              <ul key={colIndex} className="space-y-2 mt-12">
                {column.map((item, index) =>
                  index === 0 ? (
                    <h4 key={index} className="font-bold text-gray-900 pb-6">
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
            <span className="inline-flex justify-end mt-12">
              <LanguageIcon /> Vietnam
            </span>
          </div>
        </div>

        <div className="p-12 text-gray-600">
          <ul className="flex">
            <li className="mr-5">© 2024 Nike, Inc. All rights reserved</li>
            <li className="mr-5">Guides</li>
            <li className="mr-5">Terms of Sale</li>
            <li className="mr-5">Terms of Use</li>
            <li className="mr-5">Nike Privacy Policy</li>
          </ul>
        </div>
      </footer>
    </section>
  );
};

export default HomepageComponent;
