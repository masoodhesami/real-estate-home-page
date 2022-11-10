import Details from "./Details/Details";
import Header from "./Header/Header";

const Main = () => {
    return (
        <div className="bg-[url('https://s24.picofile.com/file/8455329550/Group_2477_new.jpg')]  h-[645px] bg-no-repeat">
            <div className="container mx-auto px-16">
                <Header />
                <Details />
            </div>
        </div>
    )
}
export default Main;