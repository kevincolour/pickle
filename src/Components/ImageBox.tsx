import { CSSProperties, Dispatch, SetStateAction } from "react";
import cat1 from "../Assets/cat1.jpg";
import React from "react";
import {
  AnimatedComponent,
  AnimatedComponentProps,
} from "./AnimatedComponent/AnimatedComponent";
import { ImageBoxState } from "./Presentation";

export type ImageBoxProps = {
  imageSrc: string;
  handleFinish: () => void;
  currentState: ImageBoxState;
  currentIndex: number;
  handleFocus: (index: number) => void;
  setCurrentState: Dispatch<SetStateAction<ImageBoxState>>;
};

export const ImageBox = (props: ImageBoxProps) => {
  const [imageSize, setImageSize] = React.useState<number>(400);
  const [isHovering, setIsHovering] = React.useState<boolean>(false);

  const [currentlySelected, setCurrentlySelected] =
    React.useState<boolean>(false);

  // const onMouseOver = () => {
  //   setIsHovering(true);
  // };
  // const onMouseOut = () => {
  //   setIsHovering(false);
  // };

  const styles = getStyles(imageSize);
  const size = 400;
  const handleFocusWrapper = () => {
    props.handleFocus(props.currentIndex);
    setCurrentlySelected(true);
    if (props.currentIndex == 0) {
      props.setCurrentState("focused0");
    } else {
      props.setCurrentState("focused1");
    }
  };

  return (
    <>
      <div
        style={styles.previewDivStyles}
        // onMouseOver={onMouseOver}
        // onMouseOut={onMouseOut}
      >
        <AnimatedComponent
          initialStyle={{
            width: size,
            height: size,
            borderRadius: 0,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage: `url(${props.imageSrc})`,
            backgroundPosition: "center",
            textAlign: "center",
          }}
          handleFocusWrapper={handleFocusWrapper}
          returnToInitial={
            currentlySelected &&
            !(
              props.currentState
                ?.toString()
                .indexOf(props.currentIndex?.toString()) > -1
            )
          }
        />
      </div>
    </>
  );
};

const getStyles = (imageSize: number) => {
  const SIZE = imageSize;
  const previewDivStyles: CSSProperties = {
    //   background: "red",
    //   width: SIZE,
    //   height: SIZE,
    margin: 100,
  };

  const imageStyle: CSSProperties = {
    objectFit: "cover",
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
  };

  const imageStyleExpanded: CSSProperties = {
    width: SIZE * 2,
  };

  const hoverImageStyle: CSSProperties = {
    objectFit: "cover",
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
  };
  const halfCircleSheet: CSSProperties = {
    width: SIZE,
    height: SIZE / 2,
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

  return {
    hoverImageStyle: hoverImageStyle,
    previewDivStyles: previewDivStyles,
    imageStyle: imageStyle,
    imageStyleExpanded: imageStyleExpanded,
    halfCircleSheet: halfCircleSheet,
  };
};
const SIZE = 400;
