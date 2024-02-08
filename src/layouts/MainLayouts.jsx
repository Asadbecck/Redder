// import Footer from '../components/Footer/Footer';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const MainLayout = ({ children }) => {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <div className="">
                    <main>{children}</main>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default MainLayout;
