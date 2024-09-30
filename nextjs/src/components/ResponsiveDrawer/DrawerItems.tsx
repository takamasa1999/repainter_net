"use client";
import * as React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { ItemListType } from '../../config/ItemListUser';

function RenderItems({ items, depth = 1 }: { items: ItemListType[], depth?: number }) {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});
  const translate = useTranslations('DrawerMenu');

  const handleClick = (name: string) => {
    setOpen(prevState => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };
  return (
    <>
      {
        items.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem disablePadding>
              <Link href={item.Link} target={item.Target ? item.Target : "_self"}>
                <ListItemButton
                  onClick={item.Items ? (e) => {
                    e.preventDefault();
                    handleClick(item.MessageKey);
                  } : undefined}
                  sx={{ pl: depth * 2 }}
                >
                  <ListItemIcon>
                    <FontAwesomeIcon icon={item.Icon} />
                  </ListItemIcon>
                  <ListItemText primary={translate(item.MessageKey)} />
                  {item.Items ? (open[item.MessageKey] ? <ExpandLess /> : <ExpandMore />) : null}
                </ListItemButton>
              </Link>
            </ListItem>
            {/* the code below recursively renders items */}
            {item.Items && (
              <Collapse in={open[item.MessageKey]} timeout="auto" unmountOnExit>
                <List disablePadding>
                  <RenderItems items={item.Items} depth={depth + 1} />
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))
      }
    </>
  )
}


export default function DrawerItems({ items }: { items: ItemListType[] }) {
  return (
    <>
      <Divider />
      <List>
        <RenderItems items={items} />
      </List>
    </>
  );
}
