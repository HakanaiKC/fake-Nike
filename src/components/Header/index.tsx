import { Link } from 'react-router-dom'
import { JordanLogo, Nikelogo, InterestedIcon, CartIcon } from '../icons/IconSvg'
import styles from "./index.module.scss";

export const Header = () => {
    return (
        <header>
            <div className="bg-gray-300 flex justify-between px-10 py-2">
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
            </div>

            <div className="bg-white grid grid-cols-12 gap-4 items-center px-10 py-2">
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
            </div>
        </header>
    )
}

export default Header
