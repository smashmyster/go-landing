import React from "react";
import { IListItems } from "../../constants/interfaces";
import TitleLine from "screens/MainSite/_components/Footer/TitleLine";
type ListItemProps = {
  listItem: IListItems;
  className?: string;
};

/**
 * List item component
 */
export default class ListItem extends React.Component<ListItemProps> {
  render() {
    const { listItem, className } = this.props;
    return (
      <div className={`list-item  ${className}`}>
        <div className="list-title">{listItem.name}</div>
        <TitleLine />
        <ul>
          {listItem.list.map((line: any, index: number) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </div>
    );
  }
}
