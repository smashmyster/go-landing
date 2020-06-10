import React from 'react'

type ModalProps = {
    children?: any,
    visible: boolean
    onClose?: () => any
}


export default class Modal extends React.Component<ModalProps>{
    state: {
        visible: boolean
    } = {
            visible: false
        }
    closeModal(e: any) {
        const { onClose } = this.props
        this.setState({ visible: false })
        if (onClose) {
            onClose()
        }
    }
    componentWillReceiveProps(nextProps: any) {
        if (nextProps.visible !== this.props.visible) {
            this.setState({ visible: nextProps.visible })
        }
    }


    render() {
        const { visible, children } = this.props
        return (
            <div style={{ display: visible ? "flex" : "none" }} className="modal-container">
                <div className="modal-filler" onClick={(e) => this.closeModal(e)}></div>
                <div className="modal-filler modal-middle-filler">
                    <div className="modal-filler" onClick={(e) => this.closeModal(e)}></div>
                    <div className="modal-content">
                        <div className="close-ic" onClick={(e) => this.closeModal(e)} >
                            <span className="icon icon-cross pointer"/>
                        </div>
                        {children}
                    </div>
                    <div className="modal-filler" onClick={(e) => this.closeModal(e)}></div>
                </div>
                <div className="modal-filler" onClick={(e) => this.closeModal(e)}></div>
            </div>
        )
    }
}