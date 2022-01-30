import "../styles/globals.css";
import "../styles/css/*.css";
import Sidebar from "./components/sidebar";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Sidebar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
