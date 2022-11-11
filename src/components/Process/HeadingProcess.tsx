import React from "react";

interface Props {
    title: string;
    breakIndex: Number;
}
const HeadingProcess: React.FC<Props> = ({ title, breakIndex }) => {
    return (
        <h2 className="mb-4 text-xl text-gray-900 md:text-2xl lg:text-3xl">
            {title.slice(0, Number(breakIndex))} <br /> {title.slice(Number(breakIndex))}
        </h2>
    )
}
export default HeadingProcess;