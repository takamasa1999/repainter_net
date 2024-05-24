"use client"
import * as React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';


type DrawerItemProps = {
  Name: string;
  Icon: IconDefinition;
  Link: string;
  Items?: DrawerItemProps;  // Optional nested items
}[];

export default function DrawerItems({ items }: { items: DrawerItemProps }) {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});
  const t = useTranslations('DrawerMenu');

  const handleClick = (name: string) => {
    setOpen(prevState => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem disablePadding>
              <Link href={item.Link}>
                <ListItemButton
                  component="div"
                  onClick={item.Items ? (e) => {
                    e.preventDefault();
                    handleClick(item.Name);
                  } : undefined}
                >
                  <ListItemIcon>
                    <FontAwesomeIcon icon={item.Icon} />
                  </ListItemIcon>
                  <ListItemText primary={t(item.Name)} />
                  {item.Items ? (open[item.Name] ? <ExpandLess /> : <ExpandMore />) : null}
                </ListItemButton>
              </Link>
            </ListItem>
            {item.Items && (
              <Collapse in={open[item.Name]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.Items.map((nestedItem, nestedIndex) => (
                    <ListItem key={nestedIndex} disablePadding>
                      <Link href={nestedItem.Link}>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>
                            <FontAwesomeIcon icon={nestedItem.Icon} />
                          </ListItemIcon>
                          <ListItemText primary={t(nestedItem.Name)} />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>

        ))
        }
      </List>
    </div>
  )
}