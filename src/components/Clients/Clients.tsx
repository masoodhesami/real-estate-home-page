import HeadingProcess from "../Process/HeadingProcess";
import ClientSlider from "./ClientSlider";

const Clients = () => {
    return (
        <div className="text-center mb-16 mt-24">
            <HeadingProcess title="What Our Client Says?" breakIndex={Number(null)} />
            <div className="h-[512px] bg-[url('https://s24.picofile.com/file/8455859768/Group_2482.jpg')] bg-no-repeat">
                <ClientSlider /> 
            </div>
        </div>

    )
}
export default Clients;