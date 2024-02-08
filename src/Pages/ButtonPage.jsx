import PropTypes from "prop-types";

const ButtonPage = ({
  name = "Primary Button",
  name1 = "Secondry Button",
  name2 = "Danger Button",
  name3 = "Success Button",
  name4 = "Warning Button",
}) => {
  return (
    <div>
      <div>
        <div className="p-3 bg-gray-100 h-[620px]">
          <p className="text-gray-700 text-xl text-center mt-24 mb-5 font-semibold">
            Button components
          </p>
          <button className="px-[98px] py-2 rounded-lg text-white font-serif bg-blue-600 ml-[600px] mb-7 ">
            {name}
          </button>
          <button className="px-[95px] py-2 rounded-lg text-white font-serif bg-gray-400 ml-[600px] mb-7 ">
            {name1}
          </button>
          <button className="px-[102px] py-2 rounded-lg text-white font-serif bg-red-600 ml-[600px] mb-7 ">
            {name2}
          </button>
          <button className="px-[102px] py-2 rounded-lg text-white font-serif bg-green-500 ml-[600px] mb-7 ">
            {name3}
          </button>
          <button className="px-[98px] py-2 rounded-lg text-white font-serif bg-yellow-600 ml-[600px] mb-7 ">
            {name4}
          </button>
        </div>
      </div>
    </div>
  );
};

ButtonPage.prototypes = {
  name: PropTypes.string,
  name1: PropTypes.string,
  name2: PropTypes.string,
};

export default ButtonPage;
