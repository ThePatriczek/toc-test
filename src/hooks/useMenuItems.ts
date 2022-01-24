import {useState} from 'react'
import { ContentItem } from '../components/TableOfContents/types/ContentItem';
import {tableOfContentsItems} from '../components/TableOfContents/data/tableOfContentsItems'

export const useMenuItems = () => {
    const [selectedItems, setSelectedItems]= useState<ContentItem[]>([])
    const items = tableOfContentsItems;
const onClickMenuOrItem = (e: any) => {
    const elmId = e.target.getAttribute('id');
setSelectedItems(items.filter(item => item.parentId?.includes(elmId) && (item.parentId.toString().length === elmId.toString().length) ));
} 
    return {onClickMenuOrItem,selectedItems,items}
}