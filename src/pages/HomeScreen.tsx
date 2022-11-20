import CardSlider from "../components/CardSlider/CardSlider";
import Clients from "../components/Clients/Clients";
import Main from "../components/Main/Main";
import Process from "../components/Process/Process";
import Products from "../components/Products/Products";


const HomeScreen = () => {
    return (
        <>
            <Main />
            <Process />
            <CardSlider />
            <Products />
            <Clients />
        </>
    )
}
export default HomeScreen;