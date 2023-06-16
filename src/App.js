import defaultVideo from "./video/welcome.mp4";
import video1 from "./video/example1.mp4";
import GreetVideo from "./greet-video";

const greetOptions = [
  { id: 1, link: `${video1}`, laval: "Food Review", type: "video" },
  { id: 1, link: `${defaultVideo}`, laval: "Doctor Review", type: "video" },
  { id: 2, link: "#", laval: "Contact", type: "link" },
  { id: 3, link: "#", laval: "Send Email", type: "email_form" },
];

function App() {
  return (
    <>
    <GreetVideo
        hi="hi! 👋"
        border="#7432ff"
        isLeft="no"
        btnColorBg="#7432ff"
        btnColorText="#fff"
        defaultVideo={defaultVideo}
        greetOptions={greetOptions}
        web3formsAccessKey= "b1c275cd-e749-49e3-82cf-537ac0a8bcde"
      />
    </>
  );
}

export default App;