import { CartIcon, InterestedIcon, JordanLogo, Nikelogo, SearchIcon } from "../../components/icons/IconSvg"
import styles from './index.module.css'

const HomepageComponent = () => {
    return (
        <section>
            <header className='bg-gray-300 flex justify-between px-8 py-2'>
                <JordanLogo />
                <nav className="flex justify-items-end font-bold">
                    <a href="#" className=" hover:text-gray-600 border-2  border-r-black pr-2 pl-2">Find a Store</a>
                    <a href="#" className=" hover:text-gray-600 border-2 border-r-black pr-2 pl-2">Help</a>
                    <a href="#" className=" hover:text-gray-600 border-2 border-r-black pr-2 pl-2">Join Us</a>
                    <a href="#" className=" hover:text-gray-600 border-2 pl-2">Sign In</a>
                </nav>
            </header>

            <header className="flex justify-between space-x-3 px-8 py-2">
                <Nikelogo />
                <nav className="flex font-bold">
                    <a href="#" className=" px-3">New & Featured</a>
                    <a href="#" className=" px-3">Men</a>
                    <a href="#" className=" px-3">Women</a>
                    <a href="#" className=" px-3">Kids</a>
                    <a href="#" className=" px-3">Sale</a>
                    <a href="#" className=" px-3">Customise</a>
                    <a href="#" className="">SNKRS</a>
                </nav>
                <form className="flex border border-slate-300 rounded-3xl">
                    {/* <SearchIcon /> */}
                    <input type="text" className={`${styles.search_form} hover:bg-gray-300 bg-gray-200`} />
                </form>
                <InterestedIcon />
                <CartIcon />
            </header>

            <main>

            </main>

            <footer>

            </footer>
        </section>
    )
}

export default HomepageComponent
