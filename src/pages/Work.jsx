import { Container } from "react-bootstrap";
import YouTubeVideo from "../components/YoutubeVideo";
import LikeButton from "../LikeButton";
import "../styles.css";

export default function Work() {
  return (
    <Container>
      <main className="Work" style={{ color: "orange" }}>
        <h2>My work</h2>
        <p style={{ marginTop: "1rem" }}>
          Here is a sample of a webshop I'm currently working on! Here I'm using
          React and Node.js as backend.
        </p>
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
