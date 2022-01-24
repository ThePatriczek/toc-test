import { FC, useState } from 'react';
import { useTableOfContents } from './useTableOfContents';
import { ContentItem } from './types/ContentItem';
import {useMenuItems} from '../../hooks/useMenuItems'

type TableOfContentsProps = ReturnType<typeof useTableOfContents>;

// TODO: TableOfContents should render a hierarchical list of items
//  item_1
//      item_1_1
//          item_1_1_1
//      item_1_2
//  item_2
//  item_3
//      item_3_1
//  item_4

interface ITableItemOrMenuItemProps {
    item: ContentItem;
}

const TableItemOrMenuItem = ({item}: ITableItemOrMenuItemProps) => {
const {id, name, level} = item;
const [showSubmenu, setShowSubmenu] = useState<boolean>(false)
const {onClickMenuOrItem, selectedItems} = useMenuItems()
const onClickMenu = (e: any) => {
     onClickMenuOrItem(e)
     setShowSubmenu(!showSubmenu)
}
    return(
        <div style={{margin: '5px 15px'}}>
        <button id={id} name={name} data-level={level} onClick={onClickMenu}>{name}</button>
        {
        selectedItems && showSubmenu && selectedItems.map(item => <TableItemOrMenuItem item={item} />)
        }
        </div>
    )
}

export const TableOfContents: FC<TableOfContentsProps> = ({ items }) => {
    return(
        <section style={{width: 200, backgroundColor:'grey', padding: 15}}>
            {items.map(item => !item.parentId && <TableItemOrMenuItem item={item} />)}
        </section>
);
        }
