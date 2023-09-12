import React, { CSSProperties } from "react";
import { ImageBox, ImageBoxProps } from "./ImageBox";
import cat1 from "../Assets/cat1.jpg";
import cat2 from "../Assets/cat2.jpg";
import cat3 from "../Assets/cat3.jpg";
import cat4 from "../Assets/cat4.jpg";
import cat5 from "../Assets/cat5.jpg";
import cat6 from "../Assets/cat6.jpg";

const catArray = [cat1, cat2, cat3, cat4, cat5, cat6];

export const Presentation = () => {
  const [leftPicture, setLeftPicture] = React.useState<string>(catArray[0]);
  const [rightPicture, setRightPicture] = React.useState<string>(catArray[1]);
  const [currentIndex, setCurrentIndex] = React.useState<number>(2);

  const handleFinish = React.useCallback(() => {
    setLeftPicture(catArray[currentIndex]);
    setRightPicture(catArray[currentIndex + 1]);
    setCurrentIndex(currentIndex + 2);
  }, [currentIndex]);

  const imageBoxProps: ImageBoxProps = {
    imageSrc: leftPicture,
    handleFinish: handleFinish,
  };
  const imageBoxProps2: ImageBoxProps = {
    imageSrc: rightPicture,
    handleFinish: handleFinish,
  };

  return (
    <div style={styleSheet}>
      <ImageBox {...imageBoxProps} />
      <ImageBox {...imageBoxProps2} />
    </div>
  );
};

const styleSheet: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
};
