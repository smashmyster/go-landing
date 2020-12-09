import React from 'react'
import TextField from '@material-ui/core/TextField'
import { Product } from 'constants/interfaces'
import Modal from 'components/Modal/Modal'
import Button from 'components/Button/Button'
import { _GetImagePath } from '../../../../constants/index'
import { apiSENDPRODUCTREQUEST } from 'constants/Api'

type ModalProps = {
    children?: any,
    visible: boolean
    product?: Product,
    onClose?: () => any
}

export default class RequestModal extends React.Component<ModalProps> {
    state: {
        email: string,
        quantity: string,
        loading: boolean,
        requested: boolean,
        emailError: string,
        quantityError: string
    } = {
            email: "",
            quantity: "",
            loading: false,
            requested: false,
            emailError: "",
            quantityError: ""
        }

    componentDidMount() {
    }
    closeModal() {
        const { onClose } = this.props
        this.setState({ visible: false })
        if (onClose) {
            onClose()
        }
    }
    handleText(e: any) {
        const input = e.target
        this.setState({
            nextError: null,
            [input.name]: input.value,
            [`${input.name}Error`]: null
        })
    }
    sendRequest() {
        const { email, quantity } = this.state
        const { product } = this.props
        if (email.length > 0 && quantity.length > 0 && product) {
            const emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            const numberOnlyRegex = new RegExp(/^\d+$/)
            const emailError = (emailRegex.test(email)) ? null : "Please enter a valid email"
            const quantityError = (numberOnlyRegex.test(quantity)) ? null : "Please enter a valid number"
            this.setState({ loading: !emailError && !quantityError,emailError,quantityError }, () => {
                if(!emailError && !quantityError){
                    const input = {
                        email,
                        quantities: parseInt(quantity),
                        product: product.name
                    }
                    apiSENDPRODUCTREQUEST(input).then((data) => {
                        this.setState({ loading: false, requested: true })
                    })
                }
            })
        }
    }
    render() {
        const { visible, product } = this.props
        const { email, quantity, loading, requested, emailError, quantityError } = this.state

        return [
            <Modal visible={visible} onClose={() => this.closeModal()}>
                {product && <div className="request-modal-image center-text"><img className="illus" src={_GetImagePath(product.name)} alt={product.name}/></div>}
                <div className="request-modal-title title center-text">Request</div>
                <div className="request-modal-content content center-text">
                    {
                        requested ? "Request successful. We will be in touch." :
                            "We don't have this product on hand at the moment, please give us your details and our team will contact you once it is available."
                    }
                </div>
                <div className="request-modal-form form">
                    {
                        !requested && [
                            <TextField
                                name="email"
                                className="text-input"
                                label="Email"
                                variant="outlined"
                                helperText={emailError}
                                value={email}
                                onChange={(e) => this.handleText(e)}
                            />,
                            <TextField
                                name="quantity"
                                className="text-input"
                                label="Quantity"
                                variant="outlined"
                                helperText={quantityError}
                                value={quantity}
                                onChange={(e) => this.handleText(e)}
                            />
                        ]
                    }
                </div>
                <div className="btns" style={{ width: "20rem", margin: "auto" }}>
                    {
                        requested ?
                            <Button loading={loading} title="Done" disabled={email.length === 0 || quantity.length === 0} onClick={() => this.setState({requested:false,email:"",quantity:""},()=>this.closeModal())} /> :
                            <Button loading={loading} title="Send request" disabled={email.length === 0 || quantity.length === 0} onClick={() => this.sendRequest()} />
                    }
                </div>
            </Modal>
        ]
    }
}