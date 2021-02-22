import WorldTree from "./WorldTree";
import Typography from "@material-ui/core/Typography";
import Typed from "react-typed";

function App() {
  return (
    <div>
      <Typography
        style={{
          textTransform: "upperCase",
          textShadow: "pink 1px 1px",
          float: "left",
        }}
        variant="body1"
        color="secondary"
      >
        <Typed
          strings={[
            "Tree Map powered by D3JS, React and Json",
            "Click the red dot to expand and shrink",
          ]}
          typeSpeed={20}
          backSpeed={40}
          loop
        />
      </Typography>
      <WorldTree />
    </div>
  );
}

export default App;
