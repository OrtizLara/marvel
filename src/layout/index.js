
import Footer from '../components/Footer';

import Nav from '../components/Nav'
import { withStyles } from "@material-ui/core/styles"

const styles = () => ({
  
    layout: {
        height: '100vh',
    
    }

});


function Layout ({classes}){
return (
    <div className= {classes.layout}>
          <Nav/>  
    
        <Footer/>
    </div>
)
};
 
export default withStyles(styles)(Layout);