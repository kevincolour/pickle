import React, { CSSProperties } from "react";
import { ImageBox, ImageBoxProps } from "./ImageBox";
import cat1 from "../Assets/cat1.jpg";
import cat2 from "../Assets/cat2.jpg";
import cat3 from "../Assets/cat3.jpg";
import cat4 from "../Assets/cat4.jpg";
import cat5 from "../Assets/cat5.jpg";
import cat6 from "../Assets/cat6.jpg";

const catArray = [cat1, cat2, cat3, cat4, cat5, cat6];

export type ImageBoxState = "initial" | "focused0" | "focused1";

export const Presentation = () => {
  const [leftPicture, setLeftPicture] = React.useState<string>(catArray[0]);
  const [rightPicture, setRightPicture] = React.useState<string>(catArray[1]);
  const [currentIndex, setCurrentIndex] = React.useState<number>(2);

  const [isVisible, setIsVisible] = React.useState<boolean>(true);

  const [focusedIndex, setFocusedIndex] = React.useState<number>(-1);

  const [currentState, setCurrentState] =
    React.useState<ImageBoxState>("initial");

  const handleFinish = React.useCallback(() => {
    setLeftPicture(catArray[currentIndex]);
    setRightPicture(catArray[currentIndex + 1]);
    setCurrentIndex(currentIndex + 2);
  }, [currentIndex]);

  const handleFocus = React.useCallback((index: number) => {
    setFocusedIndex(index);
    console.log(index);
  }, []);

  const imageBoxProps: ImageBoxProps = {
    imageSrc: leftPicture,
    handleFinish: handleFinish,
    currentState: currentState,
    currentIndex: 0,
    handleFocus: handleFocus,
    setCurrentState: setCurrentState,
  };
  const imageBoxProps2: ImageBoxProps = {
    imageSrc: rightPicture,
    handleFinish: handleFinish,
    currentState: currentState,
    currentIndex: 1,
    handleFocus: handleFocus,
    setCurrentState: setCurrentState,
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

const halfCircleSheet: CSSProperties = {
  width: 600,
  height: 200,
  backgroundColor: "gold",
  borderTopLeftRadius: 100,
  borderTopRightRadius: 100,
  border: "10px solid gray",
  borderBottom: 0,
  boxSizing: "border-box",
  // border-top-left-radius: 100px;
  // border-top-right-radius: 100px;
  // border: 10px solid gray;
  // border-bottom: 0;

  // -webkit-box-sizing: border-box;
  // -moz-box-sizing: border-box;
  // box-sizing: border-box;
};
