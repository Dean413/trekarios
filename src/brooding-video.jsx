import broodingVideo from "./assets/brooding.mp4"

const Brooding = () => {
    return (
      <div className="relative h-60 w-full overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={broodingVideo}
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
  
  export default Brooding;