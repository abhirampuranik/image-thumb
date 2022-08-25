import { useState } from "react";
import Cropper from "react-easy-crop";
import "./styles.css";

const CROP_AREA_ASPECT = 1 / 1;


const Output = ({ croppedArea, selectedImage }) => {

  
  const scale = 100 / croppedArea.width;
  const transform = {
    x: `${-croppedArea.x * scale}%`,
    y: `${-croppedArea.y * scale}%`,
    scale,
    width: "calc(100% + 0.5px)",
    height: "auto"
  };

  const imageStyle = {
    transform: `translate3d(${transform.x}, ${transform.y}, 0) scale3d(${transform.scale},${transform.scale},1)`,
    width: transform.width,
    height: transform.height
  };

  return (
    <div
      className="output"
      style={{ paddingBottom: `${100 / CROP_AREA_ASPECT}%` }}
    >
      <img src={URL.createObjectURL(selectedImage)} alt="" style={imageStyle} />

    </div>
  );
};



export default function App() {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const download = e => {
    console.log(e.target.href);
    fetch(e.target.href, {
      method: "GET",
      headers: {}
    })
      .then(response => {
        response.arrayBuffer().then(function(buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <h1>Upload and Display Image usign React Hook's</h1>
      {selectedImage && (
        <div>
        {/* <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} /> */}
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
      
      
      { selectedImage && <div><div className="cropper">
        <Cropper
          // image="https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000"
          image = {URL.createObjectURL(selectedImage)}
          aspect={CROP_AREA_ASPECT}
          crop={crop}
          zoom={zoom}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropAreaChange={(croppedArea) => {
            setCroppedArea(croppedArea);
          }}
        />
      </div>
      {/* <div>
        <a
          href={URL.createObjectURL(croppedArea)}
          download
          onClick={e => download(e)}
        >
          download
        </a>
      </div> */}
      <div className="viewer">
        <div>{croppedArea && <Output croppedArea={croppedArea} selectedImage = {selectedImage} />}</div>
      </div></div>}
    </div>
  );
}
