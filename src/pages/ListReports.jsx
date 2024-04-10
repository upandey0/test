import React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import "../styles/listreport.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";


function MyList() {
  return (
    <Card className="card-design">
      <CardContent>
        <List>
          <h4 className="text-center">List of Documents:</h4>
          <ol className="list-center">
            <li>
              <ListItem  disableGutters className="list-report">
                <ListItemText>
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
