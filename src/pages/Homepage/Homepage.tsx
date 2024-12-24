import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

type Props = {};

function Homepage({}: Props) {
  return (
    <div className="flex items-center justify-center mt-5">
      <div className="grid grid-cols-12"></div>
      <div className="flex items-center">
        <Link
          type="button"
          to={"/listcar/"}
          className="text-white hover:text-gray-600 mt-4 items-center bg-blue-500 rounded-md px-4 py-2 mr-2"
        >
          Araç Kataloğu
        </Link>
        <Link
          type="button"
          to={"/addcar/"}
          className="text-white hover:text-gray-600 mt-4 items-center bg-blue-500 rounded-md px-4 py-2 ml-2"
        >
          Araç Ekleme
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
