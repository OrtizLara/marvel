import Hero from "../components/Hero"
import Characters from "../containers/Characters"
const routes = [
    {
      path: "/",
      component: Hero,
      exact: true,
    },
    
    {
        path:"/characters",
        component: Characters,
        exact:true,

    }
]
    

    export default routes 