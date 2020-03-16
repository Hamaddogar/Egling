
import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { Button } from "@material-ui/core";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader>
            <h4 className={classes.cardTitleWhite}>Current Inspections - Main locations - Explore Details</h4>
            
          </CardHeader>
          <CardBody>
            <Card >
            <div style={{width:'100%',marginTop:'-24px'}}>
            <input style={{float:'right',marginRight:'2%',borderRadius:'7px'}}/>
             <span style={{float:'right',marginRight:'0%'}}> Search:</span>
             <span style={{float:'left'}}>Show</span>
             <select style={{float:'left',padding:'2px',marginLeft:'1px'}}>
               <option value="10">10</option>
               <option>25</option>
               <option>50</option>
               <option>100</option>
             </select>
             <span style={{marginLeft:'1px'}}>entries</span>
            </div>
            </Card>
            <Table
              tableHeaderColor="primary"
              tableHead={["Main Location", "Explore Details"]}
              tableData={[
                ["Dakota Rice",<Button style={{backgroundColor:'#00AFE4',color:'white',fontSize:'10px',width:'20%',borderStartEndRadius:'8px'}}>
                  explore
                </Button>],
                ["Minerva Hooper", <Button style={{backgroundColor:'#00AFE4',color:'white',fontSize:'10px',width:'20%',borderStartEndRadius:'8px'}}>
                  explore
                </Button>],
                ["Minerva Hooper", <Button style={{backgroundColor:'#00AFE4',color:'white',fontSize:'10px',width:'20%',borderStartEndRadius:'8px'}}>
                explore
              </Button>]
        
              ]}
            />
            <hr/>
            <span style={{float:'left'}}> Showing 1 to 9 of 9 entries</span>
            <div style={{height:'auto',width:'15%',float:'right',marginTop:'0%'}}>
              <span style={{fontSize:'13px',marginRight:'4px'}}>Previous</span>
              <span style={{height:'auto',backgroundColor:'white',width:'2%',marginRight:'4px'}}>1</span>
              <span style={{fontSize:'13px'}}>Next</span>
            </div>
    
 
 

          </CardBody>
        </Card>
      </GridItem>
      {/* <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Table on Plain Background
            </h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Name", "Country", "City", "Salary"]}
              tableData={[
                ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
                ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
                ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
                [
                  "4",
                  "Philip Chaney",
                  "$38,735",
                  "Korea, South",
                  "Overland Park"
                ],
                [
                  "5",
                  "Doris Greene",
                  "$63,542",
                  "Malawi",
                  "Feldkirchen in Kärnten"
                ],
                ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem> */}
    </GridContainer>
  );
}

