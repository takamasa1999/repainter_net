import { faHouse, faLink, faMusic, faQuoteLeft, faShapes, faStar } from '@fortawesome/free-solid-svg-icons';

// The keys 'Name' are related to messages of next-intl
// Check nested items of DrawerMenu
export const ItemList = [
  {
    "Name": "home",
    "Icon": faHouse,
    "Link": "/"
  },
  {
    "Name": "compositions",
    "Icon": faMusic,
    "Link": "/compositions"
  },
  {
    "Name": "shared_links",
    "Icon": faLink,
    "Link": "",
    "Items": [
      {
        "Name": "recommendations",
        "Icon": faStar,
        "Link": "/shared_links/recommendations"
      },
      {
        "Name": "footnotes",
        "Icon": faQuoteLeft,
        "Link": "/shared_links/footnotes"
      }
    ]
  },
  {
    "Name": "apps",
    "Icon": faShapes,
    "Link": "/apps"
  },
];