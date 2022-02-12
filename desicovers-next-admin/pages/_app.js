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
import "../styles/css/cancelorder.css"
import Button from '@mui/material/Button';
import React, { Component } from 'react';
import styles from '../styles/Home.module.css';
import Typography from '@mui/material/Typography';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import Box from "@mui/material/Box";
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';
import Grid from "@mui/material/Grid";


function MyApp({ Component, pageProps }) {
    return (
        // <>
        //     <Sidebar />
        //     <Component {...pageProps} />
        // </>

        <Box sx={{ display: 'flex' }}>
          
        <CssBaseline />
  
        <Box
          
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, ml: 28 }}
        >
            <Component {...pageProps} />
        
      </Box>
        <div>
        <Sidebar />
        </div>
      
      </Box>
    );
}

export default MyApp;
