import React from "react";
import Header from "../../UI/Header/Header";
import Sidebar from "../../UI/Sidebar/Sidebar";
import PageContent from "../../UI/PageContent/PageContent";
import ProductCard from "../../UI/ProductCard/ProductCard";
import { ProductSize } from "../../../enums/product-size.enum";

function Dashboard() {
  return (
    <div className="Dashboard">
      <Header>
        <span>my</span>
        <span>header</span>
      </Header>
      <Sidebar />
      <PageContent title="Product list">
        <ProductCard
          name={"D&G black middle dress"}
          imageName={"d&g-black-middle"}
          price={899.99}
          salePercentage={15}
          availableSizes={[ProductSize.S, ProductSize.M, ProductSize.L]}
        />
        <ProductCard
          name={"D&G green flowers"}
          imageName="d&g-green-flowers"
          price={699.99}
          salePercentage={20}
          availableSizes={[ProductSize.S]}
        />
        <ProductCard
          name={"D&G black short dress"}
          imageName="d&g-black-short"
          price={1099.99}
          availableSizes={[ProductSize.S, ProductSize.M, ProductSize.XL]}
        />
        <ProductCard
          name={"D&G red short dress"}
          imageName="d&g-red-short"
          price={999.99}
          salePercentage={10}
          availableSizes={[ProductSize.XS, ProductSize.S, ProductSize.XXL]}
        />
        <ProductCard
          name={"D&G black flowers"}
          imageName="d&g-black-flowers"
          price={1399.99}
          salePercentage={10}
          availableSizes={[ProductSize.XS, ProductSize.S, ProductSize.XXL]}
        />
      </PageContent>
    </div>
  );
}

export default Dashboard;
