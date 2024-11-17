import { Link } from "react-router-dom";
import {
  JordanLogo,
  Nikelogo,
  InterestedIcon,
  CartIcon,
} from "../icons/IconSvg";
import styles from "./index.module.scss";
import { Dropdown, MenuProps } from "antd";
import { useState } from "react";
import api from "../../api/api.json";
import formatPrice from "../../utils/formatter";

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredList = api.sneakers.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const items: MenuProps["items"] = filteredList.map((item, index) => ({
    label: (
      <Link to={`/product/${item.id}`}>
        <div className="flex items-center space-x-4 p-4">
          <img
            src={item.grid_picture_url}
            alt={item.name}
            className="w-[100px] h-[100px]"
          />
          <div>
            <p className="font-bold">{item.name}</p>
            <p className="text-gray-500">{item.brand_name}</p>
            <p className="font-bold">
              {item.retail_price_cents && formatPrice(item.retail_price_cents)}
            </p>
          </div>
        </div>
      </Link>
    ),
    key: index,
  }));

  return (
    <header>
      <div className="bg-gray-300 flex justify-between px-10 py-2">
        <Link to={"/"}>
          <JordanLogo />
        </Link>
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
      </div>

      <div className="bg-white grid grid-cols-12 gap-4 items-center px-10 py-2">
        <div className="col-span-2">
          <Link to={"/"}>
            <Nikelogo />
          </Link>
        </div>

        <nav className="col-span-7 flex justify-center font-bold space-x-3">
          <Link to={`/product/listproducts?gender=men`} className="px-3">
            Men
          </Link>
          <Link to={`/product/listproducts?gender=women`} className="px-3">
            Women
          </Link>
          <Link to={`/product/listproducts?gender=youth`} className="px-3">
            Kids
          </Link>
          <Link
            to={`/product/listproducts?category=basketball`}
            className="px-3"
          >
            Basketball
          </Link>
          <Link
            to={`/product/listproducts?category=lifestyle`}
            className="px-3"
          >
            Lifestyle
          </Link>
          <Link
            to={`/product/listproducts?category=skateboarding`}
            className="px-3"
          >
            Skateboarding
          </Link>
        </nav>

        <div className="col-span-3 flex items-center justify-end gap-4">
          <Dropdown menu={{ items }}>
            <form className="border border-slate-300 rounded-3xl bg-gray-200 hover:bg-gray-300">
              <input
                type="text"
                className={`${styles.search_form} `}
                placeholder="Search"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
          </Dropdown>
          <div className="flex items-center space-x-4">
            <div className="p-2 hover:bg-gray-300 rounded-full">
              <InterestedIcon />
            </div>
            <div className="p-2 hover:bg-gray-300 rounded-full">
              <Link to={"/cart"}>
                <CartIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
