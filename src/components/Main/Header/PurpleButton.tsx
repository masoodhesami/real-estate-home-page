interface Props {
    title: string;
}

const PurpleButton: React.FC<Props> = ({ title }) => {
    return (
        <button type="button" className="text-white bg-gradient-to-r from-main-purple to-main-pink 
        hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 
        font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            {title}
        </button>
    )
}
export default PurpleButton;