import { DownOutlined } from "@ant-design/icons";
import { Checkbox, Collapse, CollapseProps, MenuProps, Space } from "antd";
import Dropdown from "antd/es/dropdown/dropdown";
import { FilterIcon } from "../../components/icons/IconSvg";
import { useEffect, useState } from "react";
import productsService from "../../services/productsService";
import { Product } from "../../type/product-types";
import { Link } from "react-router-dom";
import "./index.css";

const typeOfShoesItems: MenuProps["items"] = [
  {
    key: "1",
    label: <a href="#">Featured</a>,
  },
  {
    key: "2",
    label: <a href="#">Newest</a>,
  },
  {
    key: "3",
    label: <a href="#">Price: High-Low</a>,
  },
  {
    key: "4",
    label: <a href="#">Price: Low-High</a>,
  },
];

const shoesCategoriesItems: CollapseProps["items"] = [
  {
    key: "1",
    label: "Gender",
    children: (
      <>
        <div>
          <Checkbox className="custom-checkbox">Men</Checkbox>
        </div>
        <div>
          <Checkbox className="custom-checkbox">Women</Checkbox>
        </div>
        <div>
          <Checkbox className="custom-checkbox">Unisex</Checkbox>
        </div>
      </>
    ),
  },
  {
    key: "2",
    label: "Kids",
    children: (
      <>
        <div>
          <Checkbox className="custom-checkbox">Boys</Checkbox>
        </div>
        <div>
          <Checkbox className="custom-checkbox">Girls</Checkbox>
        </div>
      </>
    ),
  },
  {
    key: "3",
    label: "Sale & Offer",
    children: (
      <>
        <div>
          <Checkbox className="custom-checkbox">Sale</Checkbox>
        </div>
      </>
    ),
  },
  {
    key: "4",
    label: "Color",
    children: (
      <>
        <div className="grid grid-cols-3 justify-items-center">
          <div className="flex mb-5 flex-col items-center">
            <div className="w-7 h-7 bg-black rounded-full"></div>
            <p>Black</p>
          </div>
          <div className="flex mb-5 flex-col items-center">
            <div className="w-7 h-7 bg-blue-700 rounded-full"></div>
            <p>Blue</p>
          </div>
          <div className="flex mb-5 flex-col items-center">
            <div className="w-7 h-7 bg-white rounded-full border border-gray-300"></div>
            <p>White</p>
          </div>
          <div className="flex mb-5 flex-col items-center">
            <div className="w-7 h-7 bg-amber-900 rounded-full"></div>
            <p>Brown</p>
          </div>
          <div className="flex mb-5 flex-col items-center">
            <div className="w-7 h-7 bg-red-600 rounded-full"></div>
            <p>Red</p>
          </div>
          <div className="flex mb-5 flex-col items-center">
            <div className="w-7 h-7 bg-yellow-400 rounded-full"></div>
            <p>Yellow</p>
          </div>
        </div>
      </>
    ),
  },
];

export const ProductListPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProductList = async () => {
    const result = await productsService.getProducts();
    setProducts(result.products);
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <section>
      <main className="m-12">
        <div>
          <p className="text-sm">Dummy Products</p>
          <div className="flex justify-between">
            <h1 className="text-2xl text-bold">Dummy ({products.length})</h1>
            <div className="flex gap-12">
              <p className="inline-flex gap-2">
                Hide Filters <FilterIcon />
              </p>
              <Dropdown items={typeOfShoesItems}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Sort By
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="pt-5 grid grid-cols-12">
          <div className="col-span-2">
            <div className="font-bold">
              <p className="leading-[2]">Mid Top</p>
              <p className="leading-[2]">High Top</p>
              <p className="leading-[2]">Low Top</p>
            </div>
            <Collapse
              items={shoesCategoriesItems}
              className="custom-collapse mt-10"
            />
          </div>
          <div className="col-span-10 grid grid-cols-3 gap-3 ml-10">
            {products &&
              products.map((product, index) => (
                <Link to={`/product/${product.id}`} key={product.id + index}>
                  <div className="slide p-2">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-[350px] w-[350px]"
                    />
                    <h4 className="pt-3 font-bold">{product.title}</h4>
                    <h5 className="text-gray-500">{product.description}</h5>
                    <h3 className="pt-2 font-bold">{product.price}$</h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>
    </section>
  );
};
