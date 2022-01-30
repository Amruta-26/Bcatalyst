import "../styles/globals.css";
// import "../styles/css/";
import Sidebar from "./components/sidebar";
import "../styles/css/autocomplete.css";
import "../styles/css/changelists.css";
import "../styles/css/fonts.css";
import "../styles/css/login.css";
import "../styles/css/responsive_rtl.css";
import "../styles/css/base.css";
import "../styles/css/dashboard.css";
import "../styles/css/forms.css";
import "../styles/css/responsive.css";
import "../styles/css/rtl.css";
import "../styles/css/widgets.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Sidebar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
