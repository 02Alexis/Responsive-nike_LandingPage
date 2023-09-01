import BackgroundOne from "../assets/background1.png";

function Background({ backgroundStyle }) {
  return (
    <div className="background">
      <img src={backgroundStyle || BackgroundOne} alt="BackgroundOne"  />
    </div>
  );
}

export default Background;
