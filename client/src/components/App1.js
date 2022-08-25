import React, { useState, useCallback } from 'react'
// import ReactDOM from 'react-dom'
import Cropper from 'react-easy-crop'
// import Slider from '@material-ui/core/Slider'
// import Button from '@material-ui/core/Button'
// import Typography from '@material-ui/core/Typography'
// import { withStyles } from '@material-ui/core/styles'
// import ImgDialog from './ImgDialog'
import getCroppedImg from './cropImage'
// import { styles } from './styless'
import "./styless.css";



const dogImg =
  'https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000'

export default function App() {
  // const [crop, setCrop] = useState({ x: 0, y: 0 })
  // const [rotation, setRotation] = useState(0)
  // const [zoom, setZoom] = useState(1)
  // const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  // const [croppedImage, setCroppedImage] = useState(null)
  // const [selectedImage, setSelectedImage] = useState(null);


  // const getBase64 = (file) => {
  //   return new Promise((resolve,reject) => {
  //      const reader = new FileReader();
  //      reader.onload = () => resolve(reader.result);
  //      reader.onerror = error => reject(error);
  //      reader.readAsDataURL(file);
  //   });
  // }

  // const imageUpload = (e) => {
  //   const file = e.target.files[0];
  //   getBase64(file).then(base64 => {
  //     localStorage["fileBase64"] = base64;
  //     console.debug("file stored",base64);
  //   });
  // };

  // const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
  //   setCroppedAreaPixels(croppedAreaPixels)
  // }, [])

  // const showCroppedImage = useCallback(async () => {
  //   try {
  //     const croppedImage = await getCroppedImg(
  //       selectedImage,
  //       croppedAreaPixels,
  //       rotation
  //     )
  //     console.log('donee', { croppedImage })
  //     setCroppedImage(croppedImage)
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }, [croppedAreaPixels, rotation, selectedImage])

  // const onClose = useCallback(() => {
  //   setCroppedImage(null)
  // }, [])
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(200);
  const [image, setImage] = useState('dog.jpg');

  return (
    <div className='App'>
        {/* <h1>Upload Image</h1>
        {selectedImage && (
        <div>
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
            // setSelectedImage(event.target.files[0]);
            imageUpload();
        }}
        />


        { selectedImage && <div>
            <div className="cropper">
                <Cropper 
                image={URL.createObjectURL(selectedImage)}
                crop={crop}
                rotation={rotation}
                zoom={zoom}
                aspect={1 / 1}
                onCropChange={setCrop}
                onRotationChange={setRotation}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
                />
            </div>
            <div >

                <button
                onClick={showCroppedImage}
                >
                Show Result
                </button>
            </div>
            <div>
                    <img src={croppedImage} alt="Cropped" />
            </div>
        </div>} */}

        <label for = 'image'>Image</label>
        <input id='image' type="text" value={image} onChange={(e) => setImage(e.target.value)} ></input>
        <br/>
        <br/>
        <label for = 'width'>Width</label>
        <input id='width' type="text" onChange={(e) => setWidth(e.target.value)} ></input>
        <br/>
        <br/>
        <label for = 'height'>Height</label>
        <input id='height' type="text" onChange={(e) => setHeight(e.target.value)} ></input>
        <br/>
        <br/>
        <br/>
        <img src={"http://localhost:8888/unsafe/"+ width + "x" + height + "/" + image} />
    </div>
  )
}

