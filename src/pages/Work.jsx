import { Container } from "react-bootstrap";
import YouTubeVideo from "../components/YoutubeVideo";
import LikeButton from "../LikeButton";
import "../styles.css";

export default function Work() {
  return (
    <Container>
      <main className="Work" style={{ color: "orange" }}>
        <h2>My work</h2>
        <div className="container">
          <p style={{ margin: "1rem", marginBottom: "1rem" }}>
            Here is a sample of a webshop I'm currently working on!
          </p>
          <p>
            Here I'm using <b>React Vite </b>and <b>Node.js</b> as backend.
          </p>
        </div>
        <YouTubeVideo />
        <div className="src-code">
          <p>
            Src code:{" "}
            <a
              href="https://github.com/Niklaspelli/WebshopProject/tree/main"
              className="workLink"
            >
              Amazing shirts!
            </a>
          </p>
          <LikeButton />
        </div>
      </main>
    </Container>
  );
}
