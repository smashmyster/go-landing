import React from 'react'
import { CategoryLine, Product } from 'constants/interfaces'
import ProductCard from 'components/ProductCard/ProductCard'
import Slider from 'react-slick'
import { apiGETALLPRODUCEPERCATEGORY } from 'constants/Api'
import Loader from 'components/Loader/Loader'
import ScrollAnimation from 'react-animate-on-scroll'
import Modal from 'components/Modal/Modal'
import RequestModal from './Components/RequestModal'
import modalImg from 'assets/images/Lock.svg'
import Button from 'components/Button/Button'
import { BUYER_ROOT } from 'constants/index'

const width = window.innerWidth
const numberOfVisible = width < 1200 ? width < 1100 ? width < 1000 ? width < 768 ? width < 500 ? 1 : 2 : 3 : 4 : 5 : 6

const BackgroundImages = (id: number | string) => {
    const check = typeof id === "string" ? parseInt(id) : id
    switch (check) {
        case 1: return require("assets/images/fruit-cat.png")
        case 2: return require("assets/images/veg-cat.png")
        case 3: return require("assets/images/herb-cat.png")
        case 4: return require("assets/images/nut-cat.png")
        default:
            break;
    }
}

const BackgroundGradient = (id: number | string) => {
    const check = typeof id === "string" ? parseInt(id) : id
    switch (check) {
        case 1: return "linear-gradient(270deg, white 0%, #BD6F1C40 50%)"
        case 2: return "linear-gradient(270deg, white 0%, #FF2C3E40 50%)"
        case 3: return "linear-gradient(270deg, white 0%, #089C0340 50%)"
        case 4: return "linear-gradient(270deg, white 0%, #95521E40 50%)"
        default:
            break;
    }
}

export default class Client extends React.Component {
    state: {
        categories: Array<CategoryLine>,
        loading?: boolean,
        modalVisible:boolean,
        requestProduct?:Product
        requestModalVisible:boolean
    } = {
            categories: [],
            loading: true,
            modalVisible:false,
            requestProduct:undefined,
            requestModalVisible:false
        }

    componentDidMount() {
        apiGETALLPRODUCEPERCATEGORY(10,true).then((categories) => {
            categories = categories.filter((category) => category.products.length > 0).map(category=>{
                console.log("Products ", categories)
                const len=category.products.length
                if(len<=numberOfVisible){
                    for (let index = 0; index < numberOfVisible-len+1; index++) {
                        category.products.push(undefined)
                    }
                }
                return category
            })
            this.setState({ categories, loading: false })
        })
    }

    openModal(){
        this.setState({modalVisible:true})
    }
    render() {
        const { categories, loading,modalVisible,requestModalVisible,requestProduct } = this.state
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToScroll: 1,
        };

        return [
            <Modal visible={modalVisible} onClose={()=>this.setState({modalVisible:false})}>
                <div className="center-text"><img className="illus" src={modalImg} alt="lock"/></div>
                <div className="request-modal-title center-text">Log in or Sign up</div>
                <div className="request-modal-content center-text">
                    Please sign up for a Khula! account to continue and explore more of our features. Already have an account? Log in to access our market.
                </div>
                <div className="btns row modal-btns">
                    <Button title="Log in" onClick={()=>this.setState({modalVisible:false},()=>window.open(`${BUYER_ROOT}`,"_blank"))}/>
                    <Button title="Sign up" onClick={()=>this.setState({modalVisible:false},()=>window.open(`${BUYER_ROOT}/sign-up`,"_blank"))}/>
                </div>
            </Modal>,
            <RequestModal product={requestProduct} visible={requestModalVisible} onClose={()=>this.setState({requestModalVisible:false})}/>,
            <div className="client-container">
                {
                    loading &&
                    <ScrollAnimation animateOnce={true} delay={0} duration={3} animateIn="fadeIn" style={{ paddingBottom: 150 }}>
                        <Loader secondary size={100} />
                    </ScrollAnimation>
                }
                {
                    categories.length > 0 && categories.map((category, key) => {
                        return (
                            <ScrollAnimation animateOnce={true} animateIn="fadeIn">
                                <div className="category-container" key={key}>
                                    <div className="bg-image-container container-child">
                                        <div className="bg-gradient-container">
                                            <div className="bg-gradient bg-gradient-container-child" style={{ background: BackgroundGradient(category.id) }}></div>
                                            <img className="bg-img bg-gradient-container-child" src={BackgroundImages(category.id)} alt="category-background" />
                                        </div>
                                    </div>
                                    <div className="bg-gradient-overlay container-child" style={{ background: BackgroundGradient(category.id) }}>

                                    </div>
                                    <div className="content-container container-child">
                                        <div className="category-left-content">
                                            <div className="category-title">{category.name}</div>
                                            <div className="category-btn">See More</div>
                                        </div>

                                        <div className="category-right-content">
                                            <div className="category-products">
                                                <Slider {...settings} {...{ slidesToShow: category.products.length > numberOfVisible ? numberOfVisible : category.products.length }}>
                                                    {
                                                        category.products.map((mapProduct) =>
                                                            <div className="test">
                                                                {
                                                                    mapProduct ?
                                                                        <ProductCard product={mapProduct} openModal={() => this.openModal()} onRequest={(requestProduct)=>this.setState({requestModalVisible:true,requestProduct})}/> : 
                                                                        <div className="product-card-faux"></div>
                                                                }
                                                            </div>
                                                        )
                                                    }
                                                </Slider>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </ScrollAnimation>
                        )
                    })
                }

            </div>
        ]
    }
}