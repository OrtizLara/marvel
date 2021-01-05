
import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';


const styles = () =>({
 
  characterCard:{
   border:"2px solid",
   borderColor: "#FF0000",
   borderRadius: 15,
   margin:5,
   '&:hover':{
    transform:" scale(1.01)",
    
    
    },
    '&:nth-last-child(-n+3)':{
      marginBottom: 40
      },
 
},
  textCard:{
    margin:"5%",
    display:"flex",
    justifyContent:"center",
    
  },
  nameCard:{
    display: "flex",
    justifyContent:"center",
    fontFamily:"fantasy",
    margin:"2%"
  }
});



function Character({classes, name, thumbnail, description}) {
    return(
      <Card className={classes.characterCard}>
      <div className={classes.nameCard}>
         {name}
      </div>
      <div className={classes.textCard}>
         {description}
      </div>
      </Card>
    
    )
    
}
export default withStyles(styles)(Character)