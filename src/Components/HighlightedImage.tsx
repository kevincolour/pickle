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
  const [isFinished, setIsFinished] = React.useState<boolean>(false);

  // const strokeWidth = imageSize - imageSize / strokeWidthPercentage;
  // const strokeWidthPercentageRelative = imageSize / strokeWidth;
  return (
    <AnimatedProgressProvider
      valueStart={0}
      valueEnd={110}
      duration={3000}
      easingFunction={easeLinear}
      handleFinish={handleFinish}
    >
      {(value: number) => {
        const roundedValue = Math.round(value);
        const circularProgressStyle =
          roundedValue <= 100 ? {} : { path: { stroke: "green" } };
        if (roundedValue == 100 && !isFinished) {
          setIsFinished(true);
          props.handleFinish();
        }
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
            <CircularProgressbarWithChildren
              value={roundedValue}
              className="progressBar"
              text={""}
              styles={circularProgressStyle}
              // strokeWidth={strokeWidthPercentageRelative}
            >
              <img style={imageStyle} src={imageSrc}></img>
            </CircularProgressbarWithChildren>
          </div>
        );
      }}
    </AnimatedProgressProvider>
  );
};
