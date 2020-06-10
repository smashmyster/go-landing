import React from 'react'
type TriangleProps = {
    scale?: number,
    color?: string,
    containerStyle?: any
    polygonStyle?: any

}
export default class RightTriangle extends React.Component<TriangleProps>{
    render() {
        const { scale = 1, color = "#3a7c3e", containerStyle, polygonStyle } = this.props
        return (
            <svg height={250 * scale} width={200 * scale} style={{ ...containerStyle }}>
                <polygon points={`0,0 0,${250 * scale} ${200 * scale},${250 * scale}`} style={{ fill: color, ...polygonStyle }} />
            </svg>
        );
    }
}