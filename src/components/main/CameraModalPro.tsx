import React, { useState, useRef } from 'react';
import { Camera } from 'react-camera-pro';

interface CameraRef {
  takePhoto: () => string;
}

const CameraModalPro = () => {
  const camera = useRef<CameraRef | null>(null);
  const [image, setImage] = useState<string | undefined>(undefined);

  const handleTakePhoto = () => {
    if (camera.current) {
      const photo = camera.current.takePhoto();
      setImage(photo);
    }
  };

  return (
    <div className={'fixed top-0 w-screen h-screen'}>
      <Camera
        ref={camera}
        errorMessages={{
          noCameraAccessible:
            'No camera device accessible. Please connect your camera or try a different browser.',
          permissionDenied:
            'Permission denied. Please refresh and give camera permission.',
          switchCamera:
            'It is not possible to switch camera to different one because there is only one video device accessible.',
          canvas: 'Canvas is not supported.',
        }}
      />
      <div
        className={
          'fixed flex bottom-0 left-0 w-full min-w-[130px] min-h-[130px] h-1/5 bg-black bg-opacity-80 z-20 items-center justify-center p-[50px] box-border flex-row-reverse aspect-[1/1]:flex-row aspect-[1/1]:bottom-0 aspect-[1/1]:w-full aspect-[1/1]:h-1/5 max-w-[400px]:p-[10px]'
        }
      >
        <button
          className={
            'flex items-center justify-center bg-white w-[50px] h-[50px] rounded-[100%] shadow-lg mb-4'
          }
          onClick={handleTakePhoto}
        ><div className='w-[40px] h-[40px] rounded-full bg-white border border-[#b8b8b8]'/></button>
      </div>
      <img
        src={image}
        className={'absolute left-10 bottom-10 z-30 w-[6vh]'}
        alt="Taken photo"
      />
    </div>
  );
};

export default CameraModalPro;
