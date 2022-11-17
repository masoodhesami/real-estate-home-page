interface Props {
    url: string
}
const ProductCard: React.FC<Props> = ({ url }) => {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow-md">
            <img className="w-[88px] h-[35px] mt-8 mx-auto mb-8" src={url} alt="products-img" />
            <p className="mb-8 text-sm text-[#999999]">Lorem ipsum dolor sit amet, el <br /> accumsan liberavisse ex, ea nec</p>
            <a href="#" className="inline-flex items-center text-[#49BE55] hover:underline">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
            </a>
        </div>
    )
}
export default ProductCard;