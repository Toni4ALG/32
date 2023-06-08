import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/alg.png";
import emotion from "../../Assets/Projects/alg.png";
import editor from "../../Assets/Projects/alg.png";
import chatify from "../../Assets/Projects/alg.png";
import suicide from "../../Assets/Projects/alg.png";
import bitsOfCode from "../../Assets/Projects/alg.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Discord Ai Bot"
              description="Unlock the power of AI in our Discord room. Join us to learn the latest AI methodologies and expand your knowledge."
              ghLink="https://github.com/Toni4ALG"
              demoLink="https://discord.gg/alg0community0-710947717031133197"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Blog"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/Toni4ALG"
              demoLink="https://blog.alg-community.eu.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Mini GAMES Cloud"
              description="Welcome to our innovative project! Our website provides a seamless gaming and application experience, allowing you to play and use a variety of games and applications directly in your browser on both mobile and desktop devices."
              ghLink="https://github.com/Toni4ALG"
              demoLink="https://gg.algc.eu.org/"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Quran APP"
              description="a small website offering a Quran application for mobile and desktop. With this website, you can conveniently access and use the application directly on your browser, without the need for any downloads."
              ghLink="https://github.com/Toni4ALG"
              demoLink="https://discord.gg/alg0community0-710947717031133197"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Best AI Discord Bot 4ever"
              description="Discord bot uses chat and has powers to expel members from the servers, join the voice room, and play music via artificial intelligence."
              ghLink="https://github.com/Toni4ALG"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Soon"
              description="Thxx thxnxr x Clxssxfxr xsxng 'Fxx-2013 dxxtxst' wxth Kxrxs xnd txfsxrlxw bxxkxnd. Thx clxssxfxr sxccxssfxlly pxxdxctxd thx vxxxxsx typxs xf xmxtxxns xf hxmxn. Xnd thx hxxhxst xccxrxcy xbtxxxd wxxh thx mxdxl wxs 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/Toni4ALG"
              // demoLink="https://blogs.soumya-jit.tech/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
