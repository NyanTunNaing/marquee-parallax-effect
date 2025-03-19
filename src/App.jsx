// React Hooks

// Components
import SmoothScroll from "./assets/components/SmoothScroll/SmoothScroll.jsx";
import Marquee from "./assets/components/Marquee/Marquee.jsx";

// Styles
import "./assets/css/main.scss";

function App() {

  return (
    <>
      <SmoothScroll />
      <div className="title-container" style={{ height: "100vh" }}>
        <h1>Scroll for Marquee Parallax Effect</h1>
      </div>
      <Marquee/>
      <div style={{ height: "100vh" }}></div>
    </>
  );
}

export default App;
