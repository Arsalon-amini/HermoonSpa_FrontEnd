import React from "react";

type ProductsPageProps = {
  children?: React.ReactNode;
};

const ProductsPage: React.FC<ProductsPageProps> = ({ children }) => {
  return <>{children}</>;
};

export default ProductsPage;
