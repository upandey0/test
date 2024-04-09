import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import { Inbox, Star, Send } from "@material-ui/icons";
import "../styles/listreport.css";
import { AccountBalanceOutlined } from "@material-ui/icons";

function MyList() {
  return (
    <List>
      <ListItem
        button
        // component="a"
        // href="#"
        disableGutters
        className="list-report"
      >
        <ListItemText>
          <Typography variant="body1" className="list-report-text">
            <h6 className="list-report-text">Hr P&L report</h6>
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem
        component="a"
        href="#"
        button
        disableGutters
        className="list-report"
      >
        <ListItemText>
          <Typography variant="body1">
            <h6 className="list-report-text">Hr P&L report</h6>
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem
        component="a"
        href="#"
        button
        disableGutters
        className="list-report"
      >
        <ListItemText>
          <Typography variant="body1" className="list-report-text">
            <h6 className="list-report-text">Hr P&L report</h6>
          </Typography>
        </ListItemText>
      </ListItem>
    </List>
  );
}

export default MyList;
