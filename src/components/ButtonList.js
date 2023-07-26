import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Sports",
  "Live",
  "Cooking",
  "Cricket",
  "JavaScript",
  "HTML",
  "CSS",
  "SCSS",
  "TYPESCRIPT",
  "ReactJs",
  "Redux",
  "Next.js",
  "Frameworks",
];

const ButtonList = () => {
  return (
    <div className="flex flex-wrap sticky top-20  bg-[white]">
      {list.map((items) => (
        <Button buttonName={items} />
      ))}
    </div>
  );
};

export default ButtonList;
