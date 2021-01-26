import React from "react";
import "./FaceRecognition.css";

//sadasdsa

const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputimage" alt="" src={imageUrl} width="500px" heigh="auto" />

        {boxes.map((box) => (
          <div
            className="bounding-box"
            key={box.leftCol}
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol,
            }}
          ></div>
        ))}

        {/* <div
          className="bounding-box"
          style={{
            top: boxes.topRow,
            right: boxes.rightCol,
            bottom: boxes.bottomRow,
            left: boxes.leftCol,
          }}
        ></div> */}
      </div>
    </div>
  );
};

export default FaceRecognition;
