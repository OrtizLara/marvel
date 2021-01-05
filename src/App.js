import './App.css';
import { Route } from "react-router-dom";
import routes from "./routes/index";
import Nav from "./components/Nav"
import Footer from "./components/Footer"

function App() {
  return (
    <>
<Nav/>  
  <div >
  {routes.map((route) => (
    <Route key={route.path} {...route} />
  ))}
</div>
<Footer/>

</>
  )
};

export default App;
