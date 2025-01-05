import Layout from "@/components/ui/layout/Layout";
import { FC } from "react";
import { View,Text } from "react-native";
import Header from "./Header";
import Banner from "./banner/Banner";
import Categories from "./categories/Categories";
import Products from "./products/Products";

const Home:FC =()=> {
    return(
        <Layout>
            <Header/>
            <Banner/>
            <Categories/>
            <Products/>
        </Layout>
    )
}

export default Home