import { DownOutlined } from "@ant-design/icons";
import { Checkbox, Collapse, CollapseProps, MenuProps, Space } from "antd";
import Dropdown from "antd/es/dropdown/dropdown";
import { FilterIcon } from "../../components/icons/IconSvg";
import { useEffect, useState } from "react";
import productsService from "../../services/productsService";
import { Product } from "../../type/product-types";
import { Link, useSearchParams } from "react-router-dom";
import "./index.css";
import formatPrice from "../../utils/formatter";

const GENDER_FILTER = ["men", "women", "youth"];

export const ProductListPage = () => {
  const [searchParams] = useSearchParams();
  const categories = searchParams.get("category")?.split(",") || [];
  const genders = searchParams.get("gender")?.split(",") || [];
  const status = searchParams.get("status") || "";
  const color = searchParams.get("color") || "";
  const [products, setProducts] = useState<Product[]>([]);
  const [gendersFilter, setGendersFilter] = useState<string[]>(genders);

  const handleSortShoesByPrice = (
    products: Product[],
    sortAscending: boolean
  ) => {
    const rs = productsService.sortProductsByPrice(products, sortAscending);
    setProducts(rs);
  };

  const getNewestProduct = () => {
    const rs = productsService.getNewestProduct();
    setProducts(rs.slice(0, 10) as Product[]);
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a href="#" onClick={getNewestProduct}>
          Newest
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a href="#" onClick={() => handleSortShoesByPrice(products, false)}>
          Price: High-Low
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a href="#" onClick={() => handleSortShoesByPrice(products, true)}>
          Price: Low-High
        </a>
      ),
    },
  ];

  const shoesCategoriesItems: CollapseProps["items"] = [
    {
      key: "1",
      label: "Gender",
      children: (
        <>
          {GENDER_FILTER.map((gender, index) => (
            <div key={index + gender}>
              <Checkbox
                checked={gendersFilter.includes(gender)}
                className="custom-checkbox capitalize"
                onClick={() => handleFilter(gender)}
              >
                {gender}
              </Checkbox>
            </div>
          ))}
        </>
      ),
    },
    {
      key: "2",
      label: "Category",
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
      label: "Available",
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

  const getProducts = () => {
    const rs = productsService.getProduct();
    setProducts(rs as Product[]);
  };

  const getProductListByGender = () => {
    const result = productsService.getProductByGender(genders);
    setProducts(result as Product[]);
  };

  const getProductListByCategory = () => {
    const result = productsService.getProductByCategory(categories);
    setProducts(result as Product[]);
  };

  const getProductByStatus = () => {
    const rs = productsService.getProductByStatus(status);
    setProducts(rs as Product[]);
  };

  const getProductByColor = () => {
    const rs = productsService.getBlackSpotlight();
    setProducts(rs as Product[]);
  };

  const fetchProducts = () => {
    if (categories.length > 0) return getProductListByCategory();
    if (status) return getProductByStatus();
    if (color) return getProductByColor();
    if (genders) return getProductListByGender();
  };

  useEffect(() => {
    fetchProducts();
    getNewestProduct();
    getProducts();
    getProductListByCategory();
    getProductListByGender();
  }, [searchParams]);

  const handleFilter = (gender: string) => {
    let payload = gendersFilter;
    if (gendersFilter.includes(gender)) {
      payload = gendersFilter.filter((item) => item !== gender);
    } else {
      payload = [...gendersFilter, gender];
    }
    setGendersFilter(payload);

    const result = productsService.getProductByGender(payload);
    setProducts(result);
  };

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
              <Dropdown menu={{ items }}>
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
            <Collapse
              items={shoesCategoriesItems}
              className="custom-collapse mt-10"
            />
          </div>
          <div className="col-span-10 grid grid-cols-3 gap-3 ml-10">
            {products &&
              products.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                  <div className="slide p-2">
                    <img
                      src={product.main_picture_url}
                      alt={product.name}
                      className="h-[350px] w-[350px] object-contain"
                    />
                    <h4 className="pt-3 font-bold">{product.name}</h4>
                    <h5 className="text-gray-500">{product.details}</h5>
                    <h3 className="pt-2 font-bold">
                      {formatPrice(product.retail_price_cents)}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>
    </section>
  );
};
