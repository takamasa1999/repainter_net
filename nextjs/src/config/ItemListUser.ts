import { faHouse, faLink, faMusic, faQuoteLeft, faShapes, faStar } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
// The keys 'Name' are related to messages of next-intl
// Check nested items of DrawerMenu

export interface ItemListType {
  MessageKey: string, //this key is used to call a certain translation under /messages
  Icon: IconDefinition
  Link: string,
  Target?: "_blank" | "_self" | "_parent" | "_top"
  Items?: ItemListType[]
}
export const ItemListUser: ItemListType[] = [
  {
    "MessageKey": "home",
    "Icon": faHouse,
    "Link": "/"
  },
  {
    "MessageKey": "compositions",
    "Icon": faMusic,
    "Link": "/compositions"
  },  
  {
    "MessageKey": "your_voice",
    "Icon": faComments,
    "Link": "/your_voice"
  },

];