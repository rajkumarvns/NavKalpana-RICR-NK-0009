import React from "react";
import Navbar from "../../components/Navbar";
import Homepage from "../../components/Homepage";
import Story from "../../components/Story";
import Footer from "../../components/Footer";

const Home = () => {
    return(
        <>
            <Navbar></Navbar>
            <Homepage />
            <Story />
            <Footer />
        </>
    );
}
export default Home;