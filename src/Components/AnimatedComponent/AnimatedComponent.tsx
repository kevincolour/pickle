import { animated, useSpring, easings } from "@react-spring/web";
import { CSSProperties } from "react";

export type AnimatedComponentProps = {
  initialStyle?: CSSProperties;
  returnToInitial?: boolean;
  handleFocusWrapper: () => void;
};

// export const AnimatedComponent = (props: AnimatedComponentProps) => {
//   const styles = useSpring({
//     opacity: props.isVisible ? 1 : 0,
//     y: props.isVisible ? 0 : 24,
//   });

//   return <animated.div style={styles}>{props.children}</animated.div>;
// };

export const AnimatedComponent = (props: AnimatedComponentProps) => {
  const initial = {
    width: props.initialStyle?.width,
    height: props.initialStyle?.height,
    borderRadius: props.initialStyle?.borderRadius,
    backgroundSize: props.initialStyle?.backgroundSize,
  };
  const [springs, api] = useSpring(() => ({
    from: initial,
    config: {
      duration: 200,
      // tension: 280,
      // friction: 60,
    },
  }));
  const styles = {
    ...props.initialStyle,
    ...springs,
  };

  const final = {
    width: 600,
    height: 600,
    borderRadius: 600 / 2,
    backgroundSize: "cover",
  };

  if (props.returnToInitial) {
    api.start({
      from: final,
      to: initial,
    });
  }

  const handleClick = () => {
    props.handleFocusWrapper();
    api.start({
      from: {
        ...initial,
      },
      to: {
        width: 600,
        height: 600,
        borderRadius: 600 / 2,
        backgroundSize: "cover",
      },
    });
  };
  return <animated.div onClick={handleClick} style={styles}></animated.div>;
};
