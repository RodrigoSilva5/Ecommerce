import { NavBar } from "../../components/navbar/NavBar";
import { HomeContainer } from "./styles";
import { Outlet } from "react-router-dom";


const Home = () => {
    return (
    <HomeContainer>
      {/* menu */}
      <NavBar 
        links={["Home"]}
      />
         <Outlet/>
      {/* listagem de produtos */}
    </HomeContainer>
    )
}


export {Home}