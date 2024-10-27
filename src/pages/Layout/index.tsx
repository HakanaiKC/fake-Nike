import Header from '../../components/Header'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../../components/ScrollToTop'

const Layout = () => {
    return (
        <section>
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
        </section>
    )
}

export default Layout
