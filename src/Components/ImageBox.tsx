import { CSSProperties } from "react";
import cat1 from "../Assets/cat1.jpg";
import React from "react";
import { HighlightedImage, HighlightedImageProps } from "./HighlightedImage";

export type ImageBoxProps = {
  imageSrc: string;
  handleFinish: () => void;
};

export const ImageBox = (props: ImageBoxProps) => {
  const [imageSize, setImageSize] = React.useState<number>(400);
  const [isHovering, setIsHovering] = React.useState<boolean>(false);
  const onMouseOver = () => {
    setImageSize(600);
    setIsHovering(true);
  };
  const onMouseOut = () => {
    setImageSize(400);
    setIsHovering(false);
  };

  const styles = getStyles(imageSize);

  const strokeWidthPercentage = 1.02;

  const highlightedImageProps: HighlightedImageProps = {
    imageSrc: props.imageSrc,
    imageSize: imageSize,
    strokeWidthPercentage: strokeWidthPercentage,
    onMouseOver: onMouseOver,
    onMouseOut: onMouseOut,
    imageStyle: styles.hoverImageStyle,
    handleFinish: props.handleFinish,
  };

  const highlightedImage = <HighlightedImage {...highlightedImageProps} />;
  return (
    <>
      {/* <div
        style={{
          width: imageSize * strokeWidthPercentage,
          height: imageSize * strokeWidthPercentage,
          margin: 100,
        }}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        <CircularProgressbarWithChildren
          value={20}
          className="progressBar"
          text={""}
          //   styles={{root: }}
        >
          <img style={styles.imageStyle} src={props.imageSrc}></img>
          {isHovering && <div> catculating... </div>}
        </CircularProgressbarWithChildren>
      </div> */}
      <div
        style={styles.previewDivStyles}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        {!isHovering && (
          <img style={styles.imageStyle} src={props.imageSrc}></img>
        )}
      </div>
      {isHovering && highlightedImage}
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

  const hoverImageStyle: CSSProperties = {
    objectFit: "cover",
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
  };

  return {
    hoverImageStyle: hoverImageStyle,
    previewDivStyles: previewDivStyles,
    imageStyle: imageStyle,
  };
};
const SIZE = 400;
