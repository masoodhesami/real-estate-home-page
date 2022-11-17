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
            </a>
        </div>
    )
}
export default ProductCard;