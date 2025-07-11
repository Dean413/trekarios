import video from "./assets/Stitching-video.mp4"
const DogSurgery = () => {
    return (
      <div className="relative h-60 w-full overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={video}
          autoPlay
          muted
          loop
          playsInline
        />
  
        {/* Overlay (optional) */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      </div>
    );
  };
  
  export default DogSurgery;

  

  