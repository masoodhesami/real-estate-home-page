import Heading from "../Main/Details/Heading";
import Paragraph from "../Main/Details/Paragraph";
import PurpleButton from "../Main/Header/PurpleButton";
import HeadingProcess from "./HeadingProcess";

const Process = () => {
    return (
        <div className="container mx-auto px-16">
            <div className="flex flex-row mt-24 mb-20">
                <div className="basis-1/2 mt-12">
                    <HeadingProcess />
                    <Paragraph />
                    <div className="mt-5">
                        <Paragraph />
                    </div>
                    <div className="mt-5">
                        <Paragraph />
                    </div>
                    <div className="mt-6">
                        <PurpleButton title="Know More" />
                    </div>
                </div>
                <div className="basis-1/2 h-[466px] bg-[url('https://s24.picofile.com/file/8455413734/Group_2478.jpg')] bg-no-repeat">
                </div>
            </div>
        </div>
    )
}
export default Process;