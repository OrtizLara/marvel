import React from 'react';
import BackgroundHero from '../images/home.png';
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
const styles = (theme) => ({
  
    imageContainer: {
        width: "100%",
        height: "94vh",
        backgroundImage: `url(${BackgroundHero})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover"
    },
    wrap: {
        height: "100%",
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        [theme.breakpoints.down('md')]: {
           justifyContent:"start",
           paddingLeft:"25%",

        },
      },
      '@global':{
        '@keyframes ring' : {
            '0%' :  {
              width:" 30px",
              height: "30px",
              opacity: 1
            },
            '100%' : {
              width: "300px",
              height: "300px",
              opacity:"0" 
            }
    }
      },
      button: {
        minWidth: "300px",
        minHeight: "60px",
        fontFamily:"fantasy",
        fontSize: "22px",
        textTransform:"uppercase",
        letterSpacing:"1.3px",
        fontWeight:"700",
        color:"#FF0000",
        // background:"#FF0000",
        background:"linear-gradient(90deg, rgba(129,230,217,1) 0%, rgba(79,209,197,1) 100%)",
        border:"none",
        borderRadius:"1000px",
        boxShadow: "12px 12px 24px rgba(79,209,197,.64)",
        transition: "all 0.3s ease-in-out 0s",
        cursor:" pointer",
        outline:"none",
        position:"relative",
        padding:"10px",
        animationName: 'ring',
        [theme.breakpoints.down('md')]: {
          minWidth:"200px",

        },
        
        '&::before':{
            content: "''",
              borderRadius:" 1000px",
              minWidth:"calc(300px + 12px)",
              minHeight: "calc(60px + 12px)",
              border: "6px solid #FF0000",
              boxShadow:" 0 0 60px rgba(0,255,203,.64)",
              position: "absolute",
              top:"50%",
              left:"50%",
              transform:"translate(-50%, -50%)",
              opacity: 0,
              transition: "all .3s ease-in-out 0s",
              [theme.breakpoints.down('md')]: {
                 justifyContent:"start",
                 paddingLeft:"10%"
      
              },
            },
            '&:hover, &:focus' : {
                color: "#FF0000",
                transform: "translateY(-6px)"
              },
              
              '&:hover::before, &:focus::before' :{
                opacity: 1,
              },
              '&::after': {
                content: "''",
                width: "30px; height: 30px",
                borderRadius:" 100%",
                border:" 6px solid #FF0000",
                position: "absolute",
                zIndex: "-1",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                animation: "ring 1.5s infinite"
              },
              
              '&:hover::after, &:focus::after': {
                animation: "none",
                display: "none"
              },
            }
});

function Hero({classes}){
  const history = useHistory();

  const handleOnClickSearch = () =>{
    history.push(`/characters`)
};
    return(
        <>
        <div className={classes.imageContainer}>
            <div className={classes.wrap}>
  <button onClick= {handleOnClickSearch} className={classes.button}>Characters</button>
</div>
        </div>
        </>
    )
}
export default withStyles(styles)(Hero)