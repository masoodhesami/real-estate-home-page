import Paragraph from "../Main/Details/Paragraph";
import PurpleButton from "../Main/Header/PurpleButton";
import HeadingProcess from "./HeadingProcess";

const Process_p2 = () => {
    return (
        <div className="container mx-auto px-16">
            <div className="flex flex-row-reverse mt-24 mb-20">
                <div className="basis-1/2 mt-12 pl-16">
                    <HeadingProcess title="We are here to always help you" breakIndex={15} />
                    <Paragraph />
                    <div className="mt-5">
                        <Paragraph />
                    </div>
                </div>
                <div className="basis-1/2 h-[458px] bg-[url('https://s24.picofile.com/file/8455464900/Group_2481.jpg')] bg-no-repeat">
                </div>
            </div>
        </div>
    )
}
export default Process_p2;