import React from "react";

interface IProductDetailsItemProps {
  productName: string;
  productDescription: string;
  displayStyle: any;
}
const ProductDetailsItem: React.FC<IProductDetailsItemProps> = ({
  productName,
  productDescription,
  displayStyle,
}: IProductDetailsItemProps) => {
  return (
    <div
      className="slide-container"
      style={{
        ...displayStyle,
      }}
    >
      <div className="heading-container"> {productName}</div>
      <div className="description-container">{productDescription}</div>
    </div>
  );
};

export default ProductDetailsItem;
