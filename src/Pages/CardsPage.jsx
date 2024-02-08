import React from "react";
import ButtonPage from "./ButtonPage";

const CardPage = ({
  title = "Card Title",
  content = "Content",
  body = "Some quick example text to build on the card title and make up the bulk of the card's content.",
}) => {
  // console.log(props);
  return (
    <div className="bg-gray-200 h-[400px] w-[350px] rounded-md mt-12 mx-auto">
      <h1 className="text-gray-900 text-center font-bold text-xl mt-5">
        {title}
      </h1>

      <div className="bg-gray-800 h-[200px] w-[350px] mt-44 rounded-b">
        <p className="text-white text-2xl p-4 font-semibold">{content} </p>
        <p className="text-white p-1 ml-3 text- font-semibold">{body}</p>
        <button className="px-9 py-1 text-sm font-semibold ml-4 mt-3 rounded bg-blue-300 text-black">
          click
        </button>
      </div>
    </div>
  );
};
export default CardPage;
