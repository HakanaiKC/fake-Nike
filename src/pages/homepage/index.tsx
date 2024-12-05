import styles from "./index.module.css";
import { Carousel } from "antd";
import Nike1 from "../../assets/img/nike-just-do-it.jpg";
import Nike2 from "../../assets/img/nike-just-do-it.jfif";
import Nike3 from "../../assets/img/image.jfif";
import Nike4 from "../../assets/img/nike-just-do-it-2.jpg";
import NikeMember from "../../assets/img/nike-member.jpg";
import { Product, ProductCategory } from "../../type/product-types";
import { Link, useSearchParams } from "react-router-dom";
import productsService from "../../services/productsService";
import { useEffect, useState } from "react";
import formatPrice from "../../utils/formatter";
const listProductStatus = [
  {
    imgUrl: Nike1,
    category: ProductCategory.JUST_IN,
    name: "P6000",
    status: "just_in",
  },
  {
    imgUrl: Nike2,
    category: ProductCategory.RUN_IN_RAIN,
    name: "Nike Pegasus 41 GORE-TEX",
    status: "run_in_the_rain",
  },
  {
    imgUrl: Nike3,
    category: ProductCategory.EASY_ON,
    name: "For playtime",
    status: "easy_on",
  },
];
const HomepageComponent = () => {
  const [listNewestProducts, setListNewestProducts] = useState<Product[]>([]);
  const [listSpotlightProducts, setListSpotlightProducts] = useState<Product[]>(
    []
  );
  const [listProductByCategory, setListProductByCategory] = useState<Product[]>(
    []
  );
  const [, setSearchParams] = useSearchParams();
  const [, setSearchStatus] = useSearchParams();
  const [, setSearchColor] = useSearchParams();

  const updateSearchParams = (category: string[]) => {
    setSearchParams({ category: category.join(",") });
  };

  const updateSearchStatus = (status: string) => {
    setSearchStatus({ status: status });
  };

  const updateSearchColor = (color: string) => {
    setSearchColor({ color: color });
  };

  const fetchNewestProduct = () => {
    const rs = productsService.getNewestProduct(
      productsService.getProduct() as Product[]
    );
    setListNewestProducts(rs.slice(0, 10));
  };

  const fetchSpotlightProduct = () => {
    const rs = productsService.getBlackSpotlight();
    setListSpotlightProducts(rs as Product[]);
  };

  const fetchProductByCategory = () => {
    const rs = productsService.getProductByCategory(["running"]);
    setListProductByCategory(rs as Product[]);
  };

  useEffect(() => {
    fetchNewestProduct();
    fetchSpotlightProduct();
    fetchProductByCategory();
  }, []);

  const membersSlides = Array(8).fill({
    imgSrc: NikeMember,
    alt: "Nike Member",
    title: "your exclusive access",
    description: "member product",
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
            src="public/video/Nike Shoes Ad Motion Graphics_ A Visual Masterpiece __ after effects - VIKAZ OFFICIAL (1080p, h264, youtube).mp4"
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
            {listProductStatus.map((item, index) => (
              <div
                className="relative"
                key={item.imgUrl + index}
                onClick={() => updateSearchStatus(item.status)}
              >
                <Link to={"/product/listproducts"}>
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
                </Link>
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
            {listNewestProducts.map((slide) => (
              <Link to={`product/${slide.id}`} key={slide.id}>
                <div className="slide p-2">
                  <img
                    src={slide.main_picture_url}
                    alt={slide.nickname}
                    className="h-full w-full"
                  />
                  <h4 className="pt-3 font-bold">{slide.nickname}</h4>
                  <h5 className="text-gray-500">{slide.name}</h5>
                  <h3 className="pt-2 font-bold">
                    {formatPrice(slide.retail_price_cents)}
                  </h3>
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
            src="public/video/Nike - You Can t Stop Us (2020).mp4"
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
            {listSpotlightProducts.map((slide, index) => (
              <div
                key={index}
                className="slide p-2"
                onClick={() => updateSearchColor(slide.color)}
              >
                <Link to={"/product/listproducts"}>
                  <img
                    src={slide.main_picture_url}
                    alt={slide.nickname}
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
            {listProductByCategory.map((slide, index) => (
              <div
                key={index}
                className="relative p-2"
                onClick={() => updateSearchParams(slide.category)}
              >
                <img
                  src={slide.main_picture_url}
                  alt={slide.name}
                  className="h-full w-full bg-gray-100"
                />
                <div className="absolute bottom-12 left-12">
                  {slide.category.map((item, index) => (
                    <Link to={"/product/listproducts"} key={index + item}>
                      <button
                        className="bg-white text-black rounded-full capitalize px-4 py-1 font-bold mr-3"
                        key={index + item}
                      >
                        {item}
                      </button>
                    </Link>
                  ))}
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
