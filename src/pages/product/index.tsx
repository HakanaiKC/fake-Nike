import { Button, Carousel, Collapse, CollapseProps, Modal, Rate, Space } from "antd";
import { InterestedIcon } from "../../components/icons/IconSvg";
import { useState } from "react";
import { Link } from "react-router-dom";
import shoesPink1 from "../../assets/img/shoes pink/W+NIKE+CORTEZ Pink.png";
import shoesPink2 from "../../assets/img/shoes pink/W+NIKE+CORTEZ Pink-1.png";
import shoesPink3 from "../../assets/img/shoes pink/W+NIKE+CORTEZ Pink-2.png";
import shoesPink4 from "../../assets/img/shoes pink/W+NIKE+CORTEZ Pink-3.png";
import shoesPink5 from "../../assets/img/shoes pink/W+NIKE+CORTEZ Pink-4.png";
import shoesPink6 from "../../assets/img/shoes pink/W+NIKE+CORTEZ Pink-5.png";
import shoesPink7 from "../../assets/img/shoes pink/W+NIKE+CORTEZ Pink-6.png";
import shoesPink8 from "../../assets/img/shoes pink/W+NIKE+CORTEZ Pink-7.png";
import shoesPink9 from "../../assets/img/shoes pink/W+NIKE+CORTEZ Pink-8.png";
import shoesWhite1 from "../../assets/img/shoes White/W+NIKE+CORTEZ White.png";
import shoesWhite2 from "../../assets/img/shoes White/W+NIKE+CORTEZ White-1.png";
import shoesWhite3 from "../../assets/img/shoes White/W+NIKE+CORTEZ White-2.png";
import shoesWhite4 from "../../assets/img/shoes White/W+NIKE+CORTEZ White-3.png";
import shoesWhite5 from "../../assets/img/shoes White/W+NIKE+CORTEZ White-4.png";
import shoesWhite6 from "../../assets/img/shoes White/W+NIKE+CORTEZ White-5.png";
import shoesWhite7 from "../../assets/img/shoes White/W+NIKE+CORTEZ White-6.png";
import shoesWhite8 from "../../assets/img/shoes White/W+NIKE+CORTEZ White-7.png";
import shoesWhite9 from "../../assets/img/shoes White/W+NIKE+CORTEZ White-8.png";
import { CheckCircleFilled, CheckCircleOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import ProductDetailModal from "../../components/Modal/ProductDetailModal";

interface ImageColor {
  id: string;
  imgUrl: string;
  color: string;
  imgList: { imgUrl: string; id: number }[];
}

const ListImagesShoesPink = [
  {
    id: 1,
    imgUrl: shoesPink1,
  },
  {
    id: 2,
    imgUrl: shoesPink2,
  },
  {
    id: 3,
    imgUrl: shoesPink3,
  },
  {
    id: 4,
    imgUrl: shoesPink4,
  },
  {
    id: 5,
    imgUrl: shoesPink5,
  },
  {
    id: 6,
    imgUrl: shoesPink6,
  },
  {
    id: 7,
    imgUrl: shoesPink7,
  },
  {
    id: 8,
    imgUrl: shoesPink8,
  },
  {
    id: 9,
    imgUrl: shoesPink9,
  },
];

const ListImagesShoesWhite = [
  {
    id: 1,
    imgUrl: shoesWhite1,
  },
  {
    id: 2,
    imgUrl: shoesWhite2,
  },
  {
    id: 3,
    imgUrl: shoesWhite3,
  },
  {
    id: 4,
    imgUrl: shoesWhite4,
  },
  {
    id: 5,
    imgUrl: shoesWhite5,
  },
  {
    id: 6,
    imgUrl: shoesWhite6,
  },
  {
    id: 7,
    imgUrl: shoesWhite7,
  },
  {
    id: 8,
    imgUrl: shoesWhite8,
  },
  {
    id: 9,
    imgUrl: shoesWhite9,
  },
];

const ListSizes = [
  { id: 1, size: "EU 35.5" },
  { id: 2, size: "EU 36" },
  { id: 3, size: "EU 36.5" },
  { id: 4, size: "EU 37" },
  { id: 5, size: "EU 37.5" },
  { id: 6, size: "EU 38" },
  { id: 7, size: "EU 38.5" },
  { id: 8, size: "EU 39" },
  { id: 9, size: "EU 39.5" },
  { id: 10, size: "EU 40" },
];

const ListImagesColor = [
  {
    id: "item-image-1",
    imgUrl: shoesPink1,
    color: "pink",
    imgList: ListImagesShoesPink,
  },
  {
    id: "item-image-2",
    imgUrl: shoesWhite1,
    color: "black",
    imgList: ListImagesShoesWhite,
  },
];

const shoesSlides = Array(6).fill({
  imgSrc: "https://picsum.photos/535/669",
  alt: "AirMax90 shoes",
  title: "nike air max 90 lv8",
  description: "women's shoes",
  price: "4,109,000₫",
});

const InfoItems: CollapseProps["items"] = [
  {
    key: "1",
    label: <p className="text-xl">Free Delivery and Returns</p>,
    children: (
      <div className="text-base">
        <p className="mb-10">
          Your order of 5.000.000₫ or more gets free standard delivery.{" "}
        </p>
        <ul className="list-disc ml-4 mb-10">
          <li>Standard delivered 4-5 Business Days</li>
          <li>Express delivered 2-4 Business Days</li>
        </ul>
        <p className="mb-10">
          Orders are processed and delivered Monday-Friday (excluding public
          holidays)
        </p>
        <p className="mb-2">
          Nike Members enjoy{" "}
          <a href="#" className="underline font-bold">
            free returns.
          </a>
        </p>
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <Space className="w-full justify-between" style={{ width: "100%" }}>
        <span className="text-xl">Reviews (0)</span>
        <Rate defaultValue={0} disabled />
      </Space>
    ),
    children: (
      <div className="text-base">
        <Space className="w-full mb-2" style={{ width: "100%" }}>
          <Rate defaultValue={0} disabled />
          <span>No Stars</span>
        </Space>
        <p className="mb-2">
          Have your say. Be the first to review the Nike Cortez Textile.
        </p>
        <a href="#" className="underline font-bold mb-2">
          Write a review
        </a>
      </div>
    ),
  },
];

const ProductDetail = () => {
  const [activeProductColor, setActiveProductColor] = useState<string>(ListImagesColor[0].id);
  const [listImages, setListImages] = useState<ImageColor>(
    ListImagesColor[0]
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalCartOpen, setIsModalCartOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<number>();
  const [isSelectedSize, setIsSelectedSize] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClickGetListActive = (image: ImageColor) => {
    setActiveProductColor(image.id);
    const selectedList = ListImagesColor.find(
      (item) => item.color === image.color
    );
    setListImages(selectedList!);
    setCurrentImageIndex(selectedList!.imgList[0].id);
  };

  const handleOk = () => {
    setIsModalCartOpen(false);
  };

  const handleCancel = () => {
    setIsModalCartOpen(false);
  };

  const handleSelectSize = (id: number) => {
    setSelectedSize(id);
    setIsSelectedSize(true)
    setErrorMessage("")
  }

  const handleHoverOnImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleAddToCart = () => {
    if (isSelectedSize) {
      setIsModalCartOpen(true)
    }else{
      setErrorMessage("Please select a size.")
    }
  }

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % listImages.imgList.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? listImages.imgList.length - 1 : prevIndex - 1
    );
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <section>
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
      <main className="p-12">
        <div className="grid grid-cols-12">
          <div className="col-span-2 flex flex-col gap-2 justify-start h-full items-end mr-4">
            {listImages &&
              listImages.imgList.map((img, index) => (
                <div
                  className="relative overflow-hidden bg-cover bg-no-repeat"
                  key={index + img.imgUrl}
                >
                  <img
                    src={img.imgUrl}
                    className="w-[60px] h-[60px] rounded"
                    alt="lorem picsum"
                  />
                  <div
                    onMouseEnter={() => handleHoverOnImage(index)}
                    className={`${currentImageIndex === index ? "opacity-40" : ""}
                    absolute bottom-0 left-0 right-0 top-0 h-[60px] w-[60px] overflow-hidden bg-gray-300 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-40`}
                  ></div>
                </div>
              ))}
          </div>
          <div className="col-span-5">
            <div>
              <div className="relative">
                <img
                  src={listImages.imgList[currentImageIndex].imgUrl}
                  alt={`Lorem Ipsum`}
                  className="rounded"
                />
                <div className="absolute right-6 bottom-6">
                  <Button onClick={prevImage} shape="circle" className="mr-2 !border-white h-[36px] w-[36px]">
                    <LeftOutlined />
                  </Button>
                  <Button onClick={nextImage} shape="circle" className="!border-white h-[36px] w-[36px]">
                    <RightOutlined />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 ml-6 max-w-[400px]">
            <h1 className="text-xl">Nike Cortez Textile</h1>
            <h2 className="text-gray-500">Women's Shoes</h2>
            <span>2,999,900₫</span>
            <div className="mt-8 flex flex-row gap-3">
              {ListImagesColor.map((image) => (
                <div
                  className={`w-[70px] h-[70px] hover:border-black hover:border-2 rounded ${activeProductColor === image.id ? "border-2 border-black" : ""
                    }`}
                  key={image.id}
                  onClick={() => handleClickGetListActive(image)}
                >
                  <img
                    src={image.imgUrl}
                    className="rounded w-full h-full"
                    alt="Sample"
                  />
                </div>
              ))}
            </div>
            <div className="mt-8 mb-8">
              <div className="flex flex-row justify-between items-center">
                <span className={`${errorMessage && "text-red-700"}`}>Select Size</span>
                <a href="#" className="text-sm flex flex-row gap-2">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 24 24"
                    role="img"
                    width="24px"
                    height="24px"
                    fill="none"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="1.5"
                      d="M21.75 10.5v6.75a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V10.5m3.308-2.25h12.885"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeWidth="1.5"
                      d="M15.79 5.599l2.652 2.65-2.652 2.653M8.21 5.599l-2.652 2.65 2.652 2.653M17.25 19v-2.5M12 19v-2.5M6.75 19v-2.5"
                    ></path>
                  </svg>
                  Size Guide
                </a>
              </div>
              <div className="grid grid-cols-5 gap-2 mt-3">
                {ListSizes.map((size, index) => (
                  <div
                    className={`border border-gray-300 rounded py-3 hover:border-black cursor-pointer ${selectedSize === size.id ? "!border-black" : ""}`}
                    key={index + size.size}
                    onClick={() => handleSelectSize(size.id)}
                  >
                    <p className="text-center">{size.size}</p>
                  </div>
                ))}
              </div>
              <p className="text-red-700 mt-3">{errorMessage}</p>
            </div>
            <div className="mb-8">
              <button className="bg-black text-white rounded-full h-[60px] px-6 mb-3 font-bold w-[328px] flex items-center justify-center hover:opacity-70" onClick={handleAddToCart}>
                Add to Bag
              </button>
              <button className="rounded-full h-[60px] px-6 mb-3 font-bold w-[328px] flex items-center justify-center border-2 border-gray-300 hover:border-black">
                Favourite <InterestedIcon />
              </button>
            </div>
            <Modal
              title={
                <p><CheckCircleFilled className="mr-3 text-green-500" />Added to Bag</p>
              }
              style={{ top: 80 }}
              footer={[<>
                <button className="rounded-full h-[60px] px-6 mb-3 font-bold w-full flex items-center justify-center border-2 border-gray-300 hover:border-black">
                  View Bag (0)
                </button>
                <button className="bg-black text-white rounded-full h-[60px] px-6 mb-3 font-bold w-full flex items-center justify-center hover:opacity-70">
                  Checkout
                </button>
              </>]}
              open={isModalCartOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              className="p-8 !w-full flex justify-end"
            >
              <div className="flex items-center space-x-4 p-4">
                <img
                  src="https://picsum.photos/535/669"
                  alt="Nike Cortez Textile"
                  className="w-[100px] h-[100px]"
                />
                <div>
                  <p className="font-bold">Nike Free Metcon 6</p>
                  <p className="text-gray-500">Men's Workout Shoes</p>
                  <p className="text-gray-500">Size EU 40</p>
                  <p className="font-bold">3,519,000₫</p>
                </div>
              </div>
            </Modal>
            <div>
              <p>
                One word: tradition. From heritage running to a fashion phenom,
                the Cortez's retro appeal, sponge-soft midsole and seesaw
                detailing deliver decade after decade. This iteration combines
                ribbon lacing and a monochromatic look for elevated style.
              </p>
              <ul className="my-3 ml-7 list-disc">
                <li>
                  Colour Shown: Medium Soft Pink/Pink Ice/Medium Soft Pink
                </li>
                <li>Style: FV5420-600</li>
                <li>Country/Region of Origin: Indonesia</li>
              </ul>
              <a onClick={showModal} className="font-bold underline">
                View Product Details
              </a>
              <ProductDetailModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
              <Collapse items={InfoItems} className="custom-collapse mt-10" />
            </div>
          </div>
        </div>

        <div className="pt-20 px-12">
          <div>
            <h2 className="capitalize text-2xl pb-6 font-bold">
              how others are wearing it
            </h2>
            <p>
              Upload your photo or mention @Nike on Instagram for a chance to be
              featured.
            </p>
            <button className="rounded-full px-6 my-3 font-bold border-2 border-gray-300 hover:border-black capitalize">
              upload your photo
            </button>
          </div>

          <h2 className="uppercase text-2xl pb-6 mt-10">you might also like</h2>
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
      </main>
    </section>
  );
};

export default ProductDetail;
