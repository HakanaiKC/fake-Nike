import Header from '../../components/Header'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <section>
            <Header />
            <Outlet />
            <Footer />
        </section>
    )
}

export default Layout
