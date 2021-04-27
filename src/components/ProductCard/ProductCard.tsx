import React from "react";
import { IProduct } from "constants/interfaces";
import { _GetImagePath } from "constants/index";
import placeholder from "assets/images/img_placeholder.svg";

type ProductCardProps = {
  product: IProduct;
  openModal?: () => any;
  onRequest?: (product: IProduct) => any;
};

/**
 * Produce card component
 */
export default class ProductCard extends React.Component<ProductCardProps> {
  state: {
    src: string;
  } = {
    src: "",
  };
  openModal() {
    const { openModal } = this.props;
    if (openModal) {
      openModal();
    }
  }
  requestProduct(product: IProduct) {
    const { onRequest } = this.props;
    if (onRequest) {
      onRequest(product);
    }
  }
  componentDidMount() {
    const { product } = this.props;
    this.setState({ src: _GetImagePath(product.name) });
  }
  onError() {
    this.setState({ src: `${placeholder}` });
  }
  render() {
    const { product } = this.props;
    const { src } = this.state;
    const noFarmer = product.packaging === null;
    return (
      <div className="product-card">
        <div className="product-name">{product.name}</div>
        <div className="product-details">
          <div className="product-img-container">
            <img
              className="product-img"
              alt={product.name}
              onError={(e) => this.onError()}
              src={src}
            />
          </div>
          {product.variety.length > 0 && (
            <div className="product-price">
              {product.variety.length} varieties
            </div>
          )}
          <div className="product-qty">
            {product.variety
              .slice(0, 3)
              .map((item) => item.name)
              .join(", ")}{" "}
          </div>
        </div>
        <div className="product-btns pointer">
          {noFarmer ? (
            <div
              className="product-btn request-btn"
              onClick={() => this.requestProduct(product)}
            >
              Request
            </div>
          ) : (
            [
              <div
                key={1}
                className="bid-btn product-btn"
                onClick={() => this.openModal()}
              >
                Bid
              </div>,
              <div
                key={2}
                className="farmers-btn product-btn"
                onClick={() => this.openModal()}
              >
                Farmers
              </div>,
            ]
          )}
        </div>
      </div>
    );
  }
}
