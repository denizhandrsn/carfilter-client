import { Button } from "flowbite-react";

type Props = {};

function Homepage({}: Props) {
  return (
    <div className="flex items-center justify-center mt-5">
      <div className="grid grid-cols-12"></div>
      <Button color={"dark"}>Tıkla</Button>
    </div>
  );
}

export default Homepage;
