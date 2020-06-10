import React from 'react';
import ReactCardFlip from 'react-card-flip'
import { _GoToStore } from 'constants/index'

type CardProps = {
    title: string,
    className?: string,
}
class Card extends React.Component<CardProps> {
    state: {
        flipped: boolean
    } = {
            flipped: false
        }
    render() {
        const { title, className } = this.props
        const { flipped } = this.state
        return (
            <div className="category-item-tile">
                <ReactCardFlip isFlipped={flipped}>
                    <div className={`img-tile flip-tile ${className ? className : title.toLocaleLowerCase()}`} onClick={() => this.setState({ flipped: !flipped })}>{title}</div>
                    <div className={`back-tile flip-tile  ${className ? className : title.toLocaleLowerCase()}`} onClick={() => this.setState({ flipped: !flipped })}>
                        <div className="content">
                            <h4 style={{margin:"5px"}}>{title}</h4>
                            To access our market place, download the
                            <span className="green"style={{fontWeight:600}}> Khula!</span> farmer app.
                            <div className="navbar-btn pointer" onClick={() => _GoToStore(undefined,"farmer")}>
                                <div className="btn-txt">Get the app</div>
                            </div>
                        </div>
                    </div>
                </ReactCardFlip>
            </div>
        )
    }
}

export default Card