import React from 'react'
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import {logo} from "../utils/constants";
import SearchBar from './SearchBar';
// import {AiFillYoutube} from 'react-icons/ai';


const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    zIndex={10}
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: "0",
      justifyContent: "space-between",
    }}
  >
    <Link
      to="/"
      style={{
        display: "flex",
        alignItems: "center",
        color: "white",
        fontSize: { md: "5rem", },
        fontWeight: "bold",
        gap: '8px',
      }}
    >
      <img src={logo} alt='logo' style={{width: '20px'}}/>
      {/* <AiFillYoutube color="#F31503" background='white'/> */}
      YouTube Clone
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar