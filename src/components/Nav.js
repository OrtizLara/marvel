import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";


const styles = () => ({
    
  
    navContainer: {
        background:"#FF0000",
        margin:"0%",
        height:35,
        color:"#FFFFFF"
       
    },
    nav:{
        display:"flex",
        justifyContent:"space-around",
        padding: "0.5em",
        cursor: "pointer",
        fontFamily:"fantasy",
        alignItems:"center",
        
        },
        navHome :{

            '&:hover' :{
                color:"#01DFD7"
                }
        },
        navCharacters:{
            '&:hover' :{
                color:"#01DFD7"
                }
        },
        
});


function Nav({classes}){
    const history = useHistory();
    const handleGoBack = () => {
        history.push(`/`);
 };
 const handleOnClickCharacters = () =>{
    history.push(`/characters`)
};


    

    return(
        <nav className={classes.navContainer}>
            <div className={classes.nav}>
                <div className={classes.navHome} onClick={handleGoBack}>HOME</div>
                <div className={classes.navCharacters} onClick={handleOnClickCharacters}>CHARACTERS</div>
                
                
              </div>
        </nav>
    )
    
}
export default withStyles(styles)(Nav);