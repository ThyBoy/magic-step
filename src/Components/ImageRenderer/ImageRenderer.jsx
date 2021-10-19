import { memo } from "react";

function ImageRenderer(props) {
  return props.fullScreen ? (
    <div
      style={{
        height: window.screen.height - 150,
      }}
    >
      <img
        src={props.original}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
        alt="imag"
      />
    </div>
  ) : (
    <img
      src={props.original}
      style={{
        width: "100%",
        height: window.screen.height / 2,
        objectFit: "cover",
        borderRadius: "10px",
      }}
      alt="imag"
    />
  );
}

export default memo(ImageRenderer);
