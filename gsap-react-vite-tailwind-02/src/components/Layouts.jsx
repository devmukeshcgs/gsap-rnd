import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
    return (
        <main className="bg-black">
            <div className="page-wrapper">
                {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
                <Header />
                <main className="main-wrapper">

                    <Outlet />
                </main>
                {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
                <Footer />
            </div>
        </main>
    );
}
export default Layout;
