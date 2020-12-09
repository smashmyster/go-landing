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
        return [
            <div className="product-card">
                <div className="product-name">{product.name}</div>
                <div className="product-details">
                    <div className="product-img-container">
                        <img className="product-img" alt={product.name} onError={(e) => this.onError()} src={src} />
                    </div>
                    {
                        product.variety.length > 0 && <div className="product-price">{`${product.variety.length} ${product.variety.length === 1 ? "variety" : "varieties"} `}</div> 
                    }
                    <div className="product-qty">{product.variety.slice(0,3).map((item)=>item.name).join(", ")} </div>
                </div>
                <div className="product-btns pointer">
                    <div className="product-btn request-btn" onClick={() => this.requestProduct(product)} >Request</div>
                </div>
            </div>
        ]
    }
}