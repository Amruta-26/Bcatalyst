import Head from "next/head";
import React from 'react';
import Sidebar from './components/sidebar';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import List from './components/list';
import Box from "@mui/material/Box";
import CssBaseline from '@mui/material/CssBaseline';
// import PrimarySearchAppBar from "./components/navbar";


const dummy_items = [
  {
    id: 'e1',
    title: "EARNINGS(MONTHLY)",
    amount: 94.12,
    color: "#00008B",
  },
  {
    id: 'e2',
    title: "EARNINGS(ANNUAL)",
    amount: 799.49,
    color: "#006400",
  },
  {
    id: 'e3',
    title: "NO. OF PRODUCTS",
    amount: 294.67,
    color: "#CCCC00",
  },
  {
    id: 'e4',
    title: "CANCELLED ORDERS",
    amount: 450,
    color: "#7D0552",
  },
];


export default function Home() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* <PrimarySearchAppBar sx={{ width: `calc(100% - 18%)`, ml: `18%` }} /> */}

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, ml: 20 }}
      >

      <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <List items={dummy_items}/>
      </main>

    </div>
    </Box>
      <div>
      <Sidebar />
      </div>
    
    </Box>
    
  );
}
