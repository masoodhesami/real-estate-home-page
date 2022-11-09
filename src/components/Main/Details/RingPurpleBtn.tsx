interface Props {
    title: string;
}
const RingPurpleBtn: React.FC<Props> = ({ title }) => {
    return (
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 
        rounded group bg-gradient-to-br from-main-purple to-main-pink group-hover:from-main-purple group-hover:to-main-pink hover:text-white
         focus:ring-4 focus:outline-none focus:ring-main-purple">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded group-hover:bg-opacity-0">
                {title}
            </span>
        </button>
    )
}
export default RingPurpleBtn;