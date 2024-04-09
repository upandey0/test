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
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';




function MyList() { 
  return (
    <Card  className="card-design" >
    <CardContent>
     <List>
      <h4 className="text-center">List of Documents:</h4>
      <ol className="list-center">
        <li>
       <ListItem 
        button        
        disableGutters
        className="list-report"
      >
        <ListItemText >
          <Typography variant="body1" className="list-report-text">
            <h6 className="list-report-text">Hr P&L report</h6>
          </Typography>
        </ListItemText>
      </ListItem>
      </li>
      <li>
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
      </li>
      <li>
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
      </li>
      </ol>
    </List>
     
    </CardContent>   
  </Card>
    
  
  );
}

export default MyList;
