import React from 'react'
import { Product } from 'constants/interfaces'
import { _GetImagePath } from 'constants/index'
import placeholder from 'assets/images/img_placeholder.svg'

type ProductCardProps = {
    product: Product,
    openModal?: () => any
    onRequest?: (product: Product) => any
}
export default class ProductCard extends React.Component<ProductCardProps>{
    state: {
        src: string
    } = {
            src: ""
        }
    openModal(e: any) {
        const { openModal } = this.props
        if (openModal) {
            openModal()
        }
    }
    requestProduct(product: Product) {
        const { onRequest } = this.props
        if (onRequest) {
            onRequest(product)
        }
    }
    componentDidMount() {
        const { product } = this.props
        this.setState({ src: _GetImagePath(product.name) })
    }
    onError() {
        this.setState({ src: `${placeholder}` })
    }
    render() {
        const { product } = this.props
        const { src } = this.state
        const noFarmer = product.packaging === null
        const upperPrice = product.upperPrice.toFixed(2)
        let lowerPrice = product.lowerPrice.toFixed(2)
        lowerPrice = upperPrice === lowerPrice ? "" : lowerPrice;
        return [
            <div className="product-card">
                <div className="product-name">{product.name}</div>
                <div className="product-details">
                    <div className="product-img-container">
                        <img className="product-img" alt={product.name} onError={(e) => this.onError()} src={src} />
                    </div>
                    {
                        !noFarmer && lowerPrice !== "" ?
                            <div className="product-price">R{lowerPrice} - R{upperPrice}</div> : <div className="product-price">R{upperPrice}</div>
                    }
                    <div className="product-qty">QTY: {product.quantity} {noFarmer ? "" : product.packaging[0].packaging}</div>
                </div>
                <div className="product-btns pointer">
                    {
                        noFarmer ?
                            <div className="product-btn request-btn" onClick={() => this.requestProduct(product)} >Request</div> :
                            [
                                <div key={1} className="bid-btn product-btn" onClick={(e) => this.openModal(e)} >Bid</div>,
                                <div key={2} className="farmers-btn product-btn" onClick={(e) => this.openModal(e)}>Farmers</div>
                            ]
                    }
                </div>
            </div>
        ]
    }
}