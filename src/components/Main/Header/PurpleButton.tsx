interface Props {
    title: string;
    width?: string;
}

const PurpleButton: React.FC<Props> = ({ title, width }) => {
    return (
        <button type="button" className={`${width} w-[117px] h-[44px] text-white bg-gradient-to-r from-main-purple to-main-pink 
        hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-main-purple 
        font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2`}>
            {title}
        </button>
    )
}
export default PurpleButton;