import Footer from "./Footer";
import Navbar from "./navbar";

const Layout = ({ children }) => {
    return (
        <div class="content">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;