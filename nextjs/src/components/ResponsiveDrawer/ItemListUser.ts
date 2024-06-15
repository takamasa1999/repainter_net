import { faHouse, faLink, faMusic, faQuoteLeft, faShapes, faStar } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
// The keys 'Name' are related to messages of next-intl
// Check nested items of DrawerMenu

export interface ItemListType {
  Name: string,
  Icon: IconDefinition
  Link: string,
  Target?: "_blank" | "_self" | "_parent" | "_top"
  Items?: ItemListType[]
}
export const ItemListUser: ItemListType[] = [
  {
    "Name": "home",
    "Icon": faHouse,
    "Link": "/"
  },
  {
    "Name": "compositions",
    "Icon": faMusic,
    "Link": "/compositions"
  },  {
    "Name": "chat_space",
    "Icon": faComments,
    "Link": "/chat_space"
  },

];