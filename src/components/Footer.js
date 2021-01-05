import { withStyles } from "@material-ui/core/styles";
import React from 'react'
const styles = (theme) => ({
    footer: {
      position: "fixed",
      bottom: 0,
      width: "100%",
      height: 28,
      backgroundColor: "#FF0000",
      color: "#FFFFFF",
      display: "flex",
      alignItems: "center",
      paddingLeft: 16,
      justifyContent: "center",
      flexShrink: 0,
      fontFamily:"family",
      [theme.breakpoints.down('md')]: {
        fontSize:"smaller",
        paddingLeft:"16%",
        justifyContent:"start"
}
      
    }
    
});
function Footer ({classes}){
    return(
        <footer className={classes.footer}>
Copyright © 2020 Lara Ortiz. All rights reserved.
</footer>

    );
}

export default withStyles(styles)(Footer)