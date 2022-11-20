import Paragraph from "../Main/Details/Paragraph";
import HeadingProcess from "../Process/HeadingProcess";
import ProductCard from "./ProductCard";

const Products = () => {
    const productsData = [
        { url: "https://s25.picofile.com/file/8455729100/liva.jpg" },
        { url: "https://s25.picofile.com/file/8455729768/hex_lab.jpg" },
        { url: "https://s25.picofile.com/file/8455729776/earth_2_0.jpg" },
        { url: "https://s25.picofile.com/file/8455729784/ideaa.jpg" },
        { url: "https://s25.picofile.com/file/8455729800/aven.jpg" },
        { url: "https://s24.picofile.com/file/8455729826/lighting.jpg" }

    ]
    return (
        <div className="container mx-auto px-36 text-center">
            <div className="flex flex-row justify-center mt-24">
                <div className="basis-auto">
                    <HeadingProcess title="Our Owning Products" breakIndex={Number(null)} />
                    <Paragraph />
                </div>
            </div>
            <div className="grid gap-x-5 gap-y-8 grid-cols-3 mt-24 mb-5">
                {productsData.map((item, index) => {
                    return <div key={index} className={index == 1 || index == 4 ? "relative -top-10" : "relative"}>
                        <ProductCard url={item.url} />
                    </div>
                })}
            </div>
        </div>

    )
}
export default Products;