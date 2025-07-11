import dogBathing from "./assets/dog-bathing.mp4"


const Bathing = () => {
    return (
      <div className="relative h-60 w-full overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={dogBathing}
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
  
  export default Bathing;