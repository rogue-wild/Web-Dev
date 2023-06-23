import Typography from "./Typography/typography";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Typography
        variant="h1"
        color="primary"
        align="center"
        display="block"
        marginBottom="20px"
      >
        Heading 1
      </Typography>
      <Typography
        variant="text1"
        color="grey"
        align="center"
        display="block"
        marginBottom="20px"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
      </Typography>
    </div>
  );
}

export default App;
