import { CSSProperties } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeLinear, easeQuadIn, easeBounceIn, easeExpInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import React from "react";

export type HighlightedImageProps = {
  imageSrc: string;
  imageSize: number;
  strokeWidthPercentage: number;
  onMouseOver: () => void;
  onMouseOut: () => void;
  imageStyle: CSSProperties;
  handleFinish: () => void;
};

export const HighlightedImage = (props: HighlightedImageProps) => {
  const {
    imageSrc,
    imageSize,
    strokeWidthPercentage,
    onMouseOut,
    onMouseOver,
    imageStyle,
    handleFinish,
  } = { ...props };
  const handleFinishWrapper = () => {
    setTimeout(() => {
      handleFinish();
    }, 3000);
  };
  const [isFinished, setIsFinished] = React.useState<boolean>(false);

  // const strokeWidth = imageSize - imageSize / strokeWidthPercentage;
  // const strokeWidthPercentageRelative = imageSize / strokeWidth;
  return (
    <div
      style={{
        width: imageSize * strokeWidthPercentage,
        height: imageSize * strokeWidthPercentage,
        margin: 100,
      }}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <img style={imageStyle} src={imageSrc}></img>
    </div>
  );
};
