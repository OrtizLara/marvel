
import React,{useState, useEffect} from 'react';
import { withStyles } from "@material-ui/core/styles";
import Character from  '../components/Character'
import Input from '@material-ui/core/Input';
import { connect } from "react-redux";
import { fetchList } from "../state/characters/actions";



const styles = (theme) =>({
search :{
    display: "flex",
    justifyContent: "center",
    marginTop: "2%"
},
cardContainer:{
    display:"grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    marginTop: 24,
    [theme.breakpoints.down('md')]: {
        gridTemplateColumns: "repeat(1, 1fr)",   
    }
},
charactersContainer: {
    overflow: 'auto'
}
});



function Characters({classes,fetchList, characters, error, loading}) {
    const [searchText, setSearchText] = useState("");
    
    useEffect(()=> {
        if (!characters?.length) {
            fetchList()
        }
    })

    function handleSetSearchText(e) {
        setSearchText(e.target.value.toLowerCase())
    }

    return(
        <div className={classes.charactersContainer}>
        <div className={classes.search}>
          <Input onChange={handleSetSearchText} placeholder="Search character..." inputProps={{ 'aria-label': 'description' }} />
      </div>
     <div className={classes.cardContainer}> 
     { characters?.length && characters.map((character) => {
        if((searchText && character.name.toLowerCase().includes(searchText)) || !searchText) {
            return(
                <Character
                key={character.id}
                {...character}
                
                />     
            )
        }
 
     }
      )}
      </div>
      </div>)
}
    
const mapStateToProps = (state) => {
    return {
      characters: state.characters.items,
      error: state.characters.error,
      loading: state.characters.loading,
    };
  };
  
  const mapDispatchToProps = {
    fetchList: fetchList
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(Characters));
