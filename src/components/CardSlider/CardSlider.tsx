import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HeadingProcess from "../Process/HeadingProcess";
const CardSlider = () => {
    const cardsData = [
        {
            sourse: "https://s25.picofile.com/file/8455563026/Group_1952.jpg",
            title: "Quick Response"
        },
        {
            sourse: "https://s24.picofile.com/file/8455573534/Group_1958.jpg",
            title: "Great Communication"
        },
        {
            sourse: "https://s24.picofile.com/file/8455573542/Group_1956.jpg",
            title: "Customer Satisfaction"
        },
        {
            sourse: "https://s25.picofile.com/file/8455563026/Group_1952.jpg",
            title: "Quick Response"
        }
    ]
    return (
        <div className="container mx-auto px-40 mb-20 text-center">
            <div className="mb-12">
            <HeadingProcess title="What is the Speciality Of Us?" breakIndex={12} />
            </div>
            <div
                style={{
                    position: 'relative'
                }}
            >
                <Carousel
                    additionalTransfrom={0}
                    arrows={true}
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
                            items: 3,
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
                            items: 2,
                            partialVisibilityGutter: 30
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >
                    {cardsData.map((item, index) => <div key={index} className=" max-w-sm bg-white rounded-lg shadow-md text-center mb-4 mr-8">
                        <div className="flex flex-col items-center pb-10 pt-4">
                            <img className="mb-3 w-30 h-30 rounded-full mt-8" src={item.sourse} alt="slider image" />
                            <h5 className="mb-1 text-lg text-gray-900 mt-6">{item.title}</h5>
                            <span className="text-xs text-gray-500 mt-3 px-4">Lorem ipsum dolor sit amet, vel
                                accumsan liberavisse ex, ea nec
                                concludaturque ndo. Verear</span>
                        </div>
                    </div>)}
                </Carousel>
            </div>
        </div>
    )
}
export default CardSlider;