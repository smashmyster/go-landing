import React from 'react'
import { IListItems } from '../../constants/interfaces'
import TitleLine from 'screens/Landing/Footer/TitleLine'
type ListItemProps={
    listItem:IListItems,
    className?:string
}
export default class ListItem extends React.Component<ListItemProps>{
    render() {
        const {listItem,className} = this.props
        return(
            <div className={`list-item  ${className}`}>
                <div className="list-title">{listItem.name}</div>
                <TitleLine/>
                    <ul>
                        {
                            listItem.list.map((line)=><li>{line}</li>)
                        }
                    </ul>
            </div>
        )
    }
}