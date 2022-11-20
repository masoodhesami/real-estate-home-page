import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HeadingProcess from "../Process/HeadingProcess";
const ClientSlider = () => {
    const cardsData = [
        {
            sourse: "https://s25.picofile.com/file/8455862384/albert_dera_ILip77SbmOE_unsplash.jpg",
        },
        {
            sourse: "https://s24.picofile.com/file/8455573534/Group_1958.jpg",
        },
        {
            sourse: "https://s24.picofile.com/file/8455573542/Group_1956.jpg",
        },
        {
            sourse: "https://s25.picofile.com/file/8455563026/Group_1952.jpg",

        }
    ]
    return (
        <div className="container mx-auto px-96 mb-20 text-center -pr-12">
            <div
                style={{
                    position: 'relative'
                }}
            >
                <Carousel
                    additionalTransfrom={0}
                    arrows={false}
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container-padding-bottom"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite={false}
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 1,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={true}
                    sliderClass="relative -right-12 top-2"
                    slidesToSlide={1}
                    swipeable
                >
                    {cardsData.map((item, index) => <div key={index} className=" max-w-sm rounded-lg text-center mb-4">
                        <div className="flex flex-col items-center pb-10 pt-4">
                            <img className="mb-3 w-30 h-30 rounded-full mt-8" src={item.sourse} alt="slider image" />
                            <span className="text-xs text-gray-700 px-4">
                                Lorem ipsum dolor sit amet, consetetur <br />
                                sadipscing elitr, sed diam nonumy eirmod <br />
                                tempor invidunt ut labore dolore magna
                            </span>
                            <span className="text-xs text-gray-400 px-4 mt-5">Rubiya Mond De-Patrica</span>
                            <span className="text-xs text-gray-400 px-4 mt-2">CEO, Zexbay-Fine</span>
                        </div>
                    </div>)}
                </Carousel>
            </div>
        </div>
    )
}
export default ClientSlider;