import * as React from 'react';
import { Box, useTheme } from "@mui/material";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import CurrencyFrancIcon from '@mui/icons-material/CurrencyFranc';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import EuroIcon from '@mui/icons-material/Euro';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { tokens } from "../../theme";

export default function NavBar() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  //const theme = useTheme();
  //const colors = tokens(theme.palette.mode);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  };
  return (
    <Box sx={{ width: '100%'}}>
      <List style={flexContainer} component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
          to="/"

        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          to="/bitcoin"

        >
          <ListItemIcon>
            <CurrencyBitcoinIcon />
          </ListItemIcon>
          <ListItemText primary="BitCoin" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
          to="/ethereum"
        >
          <ListItemIcon>
            <CurrencyRupeeIcon />
          </ListItemIcon>
          <ListItemText primary="Ethereum" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <CurrencyFrancIcon />
          </ListItemIcon>
          <ListItemText primary="XRP" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemIcon>
            <CurrencyPoundIcon />
          </ListItemIcon>
          <ListItemText primary="Binance" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <ListItemIcon>
            <EuroIcon />
          </ListItemIcon>
          <ListItemText primary="Tether" />
        </ListItemButton>
      </List>
    </Box>
  );
}