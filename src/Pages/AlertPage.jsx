import PropTypes from "prop-types";

const AlertPage = ({
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
          <p className="text-gray-700 text-xl text-center mt-24 mb-5 font-bold">
            Alert Buttons
          </p>
          <button className="px-[100px] py-4 rounded-lg font-serif text-white bg-blue-600 ml-[600px] mb-7 ">
            {name}
          </button>
          <button className="px-[95px] py-4 rounded-lg font-serif text-white bg-gray-400 ml-[600px] mb-7 ">
            {name1}
          </button>
          <button className="px-[102px] py-4 rounded-lg font-serif text-white bg-red-600 ml-[600px] mb-7 ">
            {name2}
          </button>
          <button className="px-[102px] py-4 rounded-lg font-serif text-white bg-green-500 ml-[600px] mb-7 ">
            {name3}
          </button>
          <button className="px-[99px] py-4 rounded-lg font-serif text-white bg-yellow-600 ml-[600px] mb-7 ">
            {name4}
          </button>
        </div>
      </div>
    </div>
  );
};

AlertPage.prototypes = {
  name: PropTypes.string,
  name1: PropTypes.string,
  name2: PropTypes.string,
  name3: PropTypes.string,
  name4: PropTypes.string,
};

export default AlertPage;
