import { Button, Carousel } from "antd"
import { InterestedIcon } from "../../components/icons/IconSvg"
import { useState } from "react"

interface ImageColor {
  id: string;
  imgUrl: string;
  color: string;
}
const ListImages = [
  {
    imgUrl: "https://picsum.photos/535/669"
  },
  {
    imgUrl: "https://picsum.photos/535/669"
  },
  {
    imgUrl: "https://picsum.photos/535/669"
  },
  {
    imgUrl: "https://picsum.photos/535/669"
  },
  {
    imgUrl: "https://picsum.photos/535/669"
  },
  {
    imgUrl: "https://picsum.photos/535/669"
  },
  {
    imgUrl: "https://picsum.photos/535/669"
  },
]

const ListSizes = [
  {
    size: "EU 35.5"
  },
  {
    size: "EU 35.5"
  },
  {
    size: "EU 35.5"
  },
  {
    size: "EU 35.5"
  },
  {
    size: "EU 35.5"
  },
  {
    size: "EU 35.5"
  },
  {
    size: "EU 35.5"
  },
  {
    size: "EU 35.5"
  },
  {
    size: "EU 35.5"
  },
  {
    size: "EU 35.5"
  },
]

const ListImagesColor = [
  {
    id: 'item-image-1',
    imgUrl: 'https://picsum.photos/535/669',
    color: 'pink'
  },
  {
    id: 'item-image-2',
    imgUrl: 'https://picsum.photos/535/669',
    color: 'black'
  },
]

const ProductDetail = () => {
  const [active, setActive] = useState<string>('');
  const handleClickActive = (image: ImageColor) => {
    setActive(image.id)
  }
  return (
    <section>
      <main className="p-12 grid grid-cols-12">
        <div className="col-span-2 flex flex-col gap-2 justify-start h-full items-end mr-4">
          {ListImages.map((img, index) => (
            <div className="relative overflow-hidden bg-cover bg-no-repeat" key={index + img.imgUrl}>
              <img
                src={img.imgUrl}
                className="w-[60px] h-[60px] rounded"
                alt="lorem picsum" />
              <div
                className="absolute bottom-0 left-0 right-0 top-0 h-[60px] w-[60px] overflow-hidden bg-gray-400 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60"></div>
            </div>
          ))}
        </div>
        <div className="col-span-5">
          <div>
            <Carousel arrows>
              {ListImages.map((img, index) => (
                <div key={index + img.imgUrl}>
                  <img
                    src={img.imgUrl}
                    className="rounded"
                    alt="lorem picsum" />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="col-span-4 ml-6 max-w-[400px]">
          <h1 className="text-xl">Nike Cortez Textile</h1>
          <h2 className="text-gray-500">Women's Shoes</h2>
          <span>2,999,900₫</span>
          <div className="mt-8 flex flex-row gap-3">
            {ListImagesColor.map((image) => (
              <div className={`w-[70px] h-[70px] hover:border-black hover:border-2 rounded ${active === image.id ? "border-2 border-black" : ""}`} key={image.id} onClick={() => handleClickActive(image)}>
                <img
                  src={image.imgUrl}
                  className="rounded w-full h-full "
                  alt="Sample"
                />
              </div>
            ))}
          </div>
          <div className="mt-8 mb-8">
            <div className="flex flex-row justify-between items-center">
              <span>Select Size</span>
              <a href="#" className="text-sm flex flex-row gap-2"><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M21.75 10.5v6.75a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V10.5m3.308-2.25h12.885"></path><path stroke="currentColor" stroke-width="1.5" d="M15.79 5.599l2.652 2.65-2.652 2.653M8.21 5.599l-2.652 2.65 2.652 2.653M17.25 19v-2.5M12 19v-2.5M6.75 19v-2.5"></path></svg>Size Guide</a>
            </div>
            <div className="grid grid-cols-5 gap-2 mt-3">
              {ListSizes.map((size, index) => (
                <div className="border border-gray-300 rounded py-3 hover:border-black" key={index + size.size}>
                  <p className="text-center">{size.size}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <button className="bg-black text-white rounded-full h-[60px] px-6 mb-3 font-bold w-[328px] flex items-center justify-center hover:opacity-70">
              Add to Bag
            </button>
            <button className="rounded-full h-[60px] px-6 mb-3 font-bold w-[328px] flex items-center justify-center border-2 border-gray-300 hover:border-black">
              Favourite <InterestedIcon />
            </button>
          </div>
          <div>
            <p>One word: tradition. From heritage running to a fashion phenom, the Cortez's retro appeal, sponge-soft midsole and seesaw detailing deliver decade after decade. This iteration combines ribbon lacing and a monochromatic look for elevated style.</p>
          </div>
        </div>
      </main>
    </section>
  )
}

export default ProductDetail
