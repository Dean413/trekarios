import accesoriesVideo from "./assets/accessories-video.mp4"


const Petaccessories = () => {
    return (
      <div className="relative h-60 w-full overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={accesoriesVideo}
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
  
  export default Petaccessories;