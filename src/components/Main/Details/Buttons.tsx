import PurpleButton from "../Header/PurpleButton";
import RingPurpleBtn from "./RingPurpleBtn";

const Buttons = () => {
    return (
        <div className="mt-6 flex flex-row gap-8 justify-center">
            <div className="basis-auto">
                <PurpleButton title="Our Works" />
            </div>
            <div className="basis-auto">
                <RingPurpleBtn title="Know More" />
            </div>
        </div>

    )
}
export default Buttons;