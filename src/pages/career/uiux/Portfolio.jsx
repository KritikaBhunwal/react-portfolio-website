import { useState } from "react";
import SectionHeading from "../../../components/SectionHeading.jsx";
import ProjectContent from "../../../components/ProjectContent";
import WorkTogether from "../../../components/WorkTogether";
import SEO from "../../../components/SEO.jsx";
import PDFViewer from "../../../components/pdfViewer";
import FigmaFrame from "../../../components/FigmaFrame.jsx";

import "../../../styles/portfolio.css";

// Structured data for the portfolio design journey page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "My Design Journey – From Concept to Final Design",
  description:
    "Explore my comprehensive design journey—from early brainstorming to a fully realized digital experience. Learn how every step shaped my creative vision and led to a successful project.",
  url: "https://www.kritikabhunwal.com/uiux/portfolio",
};

const Portfolio = () => {
  // Modal preview state for images from various sections
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  // Define image arrays for each phase with at least two images per section
  // const ideationImages = [
  //   { src: "/PortfolioAsset01.jpeg", caption: "Brainstorming & Mind Mapping" },
  //   { src: "/PortfolioAsset02.jpeg", caption: "Additional Ideation Insight" },
  // ];
  const moodBoardImages = [
    { src: "/PortfolioAsset01.jpeg", caption: "Mood Board Inspiration" },
    { src: "/PortfolioAsset12.jpeg", caption: "Secondary Mood Board Detail" },
  ];
  const styleGuideImages = [
    // { src: "/PortfolioAsset02.jpeg", caption: "Style Guide & Visual Assets" },
    { src: "/PortfolioAsset03.jpeg", caption: "Extra Visual Asset" },
    { src: "/PortfolioAsset04.jpeg", caption: "Style Guide & Visual Assets" },
    { src: "/PortfolioAsset05.jpeg", caption: "Extra Visual Asset" },
  ];
  const wireframesImages = [
    { src: "/Wireframes.png", caption: "Wireframe Sketches & Mockups" },
    { src: "/Wireframes2.png", caption: "Alternate Wireframe Idea" },
  ];
  const researchImages = [
    { src: "/Research.jpg", caption: "Initial Research Insights" },
    { src: "/Research2.jpg", caption: "More Research Perspectives" },
  ];
  const designTransitionImages = [
    {
      src: "/PortfolioAsset02.jpeg",
      caption: "From Bold Illustrations to Subtle Professionalism",
    },
    {
      src: "/PortfolioAsset10.jpeg",
      caption: "Design Refinement Process",
    },
  ];
  const uxuidesignImages = [
    { src: "/PortfolioAsset07.jpeg", caption: "UX/UI Prototypes & Iterations" },
    { src: "/PortfolioAsset06.jpeg", caption: "Improved UX/UI Concepts" },
  ];
  const developmentImages = [
    {
      src: "/DevelopmentProcess.jpg",
      caption: "Journey from WordPress to React Development",
    },
    {
      src: "/DevelopmentProcess2.jpg",
      caption: "Further Development Insights",
    },
  ];
  const bibliographyImages = [
    { src: "/Credits.jpg", caption: "Acknowledgements & Credits" },
    { src: "/Credits2.jpg", caption: "Additional Acknowledgements" },
  ];

  // Combined modal images array (order follows the table of contents)
  const modalImages = [
    // ...ideationImages,
    ...moodBoardImages,
    ...styleGuideImages,
    ...wireframesImages,
    ...researchImages,
    ...designTransitionImages,
    ...uxuidesignImages,
    ...developmentImages,
    ...bibliographyImages,
  ];

  // Modal control functions
  const openModal = (index) => {
    setModalIndex(index);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const nextModalImage = () => {
    setModalIndex((prev) => (prev < modalImages.length - 1 ? prev + 1 : 0));
  };
  const prevModalImage = () => {
    setModalIndex((prev) => (prev > 0 ? prev - 1 : modalImages.length - 1));
  };

  return (
    <div className="portfolio-container">
      <SEO
        title="Designing a Portfolio Website – From Concept to Final Design"
        description="Explore my comprehensive design journey that unfolds from early ideation and mood board creation to detailed research, design transitions, and a fully integrated development process. Learn how simple ideas evolved into a dynamic digital experience."
        keywords="design journey, ideation, mood board, style guide, wireframes, mockups, research, design transition, UX/UI design, development, digital design journey, Kritika Bhunwal"
        url="https://www.kritikabhunwal.com/uiux/portfolio"
        type="website"
        lang="en"
        robots="index,follow"
        structuredData={structuredData}
      />

      {/* Responsive Banner */}
      <img
        src="/PortfolioBanner.png"
        alt="Design Journey Banner"
        className="portfolio-banner-img"
      />

      {/* Banner Section */}
      <div className="portfolio-banner">
        <header className="report-header">
          <div className="header-text">
            <h2>How I Designed My Portfolio Website</h2>
            <h3>From Early Ideas to a Fully Realized Digital Experience</h3>
          </div>
          <div className="report-authors">
            <span>
              <strong>Kritika Bhunwal</strong>
            </span>{" "}
            | <span>Richard Te</span> | <span>Airrick Dunfield</span> |{" "}
            <span>2024-25</span>
          </div>
        </header>
      </div>

      {/* Main Content */}
      <div className="portfolio-content">
        <div className="desktop-layout">
          <nav className="table-of-contents">
            <h3>Table of Contents</h3>
            <ul>
              <li>
                <a href="#ideation">Ideation</a>
              </li>
              <li>
                <a href="#mood-board">Mood Board</a>
              </li>
              <li>
                <a href="#style-guide">Style Guide</a>
              </li>
              <li>
                <a href="#wireframes-mockups">Wireframes &amp; Mockups</a>
              </li>
              <li>
                <a href="#initial-research">Initial Research</a>
              </li>
              <li>
                <a href="#design-transition">Design Transition Journey</a>
              </li>
              <li>
                <a href="#uxui-design">UX/UI Design</a>
              </li>
              <li>
                <a href="#development">Development</a>
              </li>
              <li>
                <a href="#bibliography">Bibliography</a>
              </li>
              <li>
                <a href="#figma-prototype">Figma Prototype</a>
              </li>
              <li>
                <a href="#pitch-deck-first">First Ever Pitch Deck</a>
              </li>
              <li>
                <a href="#pitch-deck-presentation">Pitch Deck Presentation</a>
              </li>
            </ul>
          </nav>

          <main className="content">
            {/* Ideation Section */}
            <section id="ideation" className="report-section">
              <SectionHeading title="Ideation" />
              <div className="section-content">
                <p>
                  In the beginning, I let my curiosity lead by writing down every idea that came to mind. I used brainstorming sessions and mind mapping to explore my creative potential and identify areas for growth.
                </p>
                <p>
                  This phase was simple, honest, and full of raw inspiration that set the tone for everything that followed.
                </p>
                <FigmaFrame 
                  figmaUrl="https://www.figma.com/design/QwIMymTyToy9PF7Yd1JsbC/Portfolio-Website-KritikaBhunwal?node-id=72-938&p=f&t=GvVvps5mcGDWgNOS-0" 
                />
                {/* <div className="section-gallery">
                  {ideationImages.map((img, idx) => (
                    <img
                      key={idx}
                      src={img.src}
                      alt={img.caption}
                      onClick={() => openModal(idx)}
                      className="gallery-image"
                    />
                  ))}
                </div> */}
              </div>
            </section>

            {/* Mood Board Section */}
            <section id="mood-board" className="report-section">
              <SectionHeading title="Mood Board" />
              <div className="section-content">
                <p>
                  I collected an array of images, textures, and color swatches that resonated with my vision. The mood board was a visual diary that helped me decide on the overall look I wanted to achieve.
                </p>
                <p>
                  It provided a simple and clear aesthetic direction that carried through the entire design process.
                </p>
                <div className="section-gallery">
                  {moodBoardImages.map((img, idx) => (
                    <img
                      key={idx}
                      src={img.src}
                      alt={img.caption}
                      onClick={() => openModal(ideationImages.length + idx)}
                      className="gallery-image"
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Style Guide Section */}
            <section id="style-guide" className="report-section">
              <SectionHeading title="Style Guide" />
              <div className="section-content">
                <p>
                  I established a clear visual language by defining a harmonious color palette, typography, and other visual assets. The style guide became my design bible, ensuring every element worked together.
                </p>
                <p>
                  It helped maintain consistency throughout the project and made decision‐making a lot more straightforward.
                </p>
                <div className="section-gallery">
                  {styleGuideImages.map((img, idx) => (
                    <img
                      key={idx}
                      src={img.src}
                      alt={img.caption}
                      onClick={() =>
                        openModal(
                          ideationImages.length +
                          moodBoardImages.length +
                          idx
                        )
                      }
                      className="gallery-image"
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Wireframes & Mockups Section */}
            <section id="wireframes-mockups" className="report-section">
              <SectionHeading title="Wireframes &amp; Mockups" />
              <div className="section-content">
                <p>
                  I started sketching rough layouts on paper and turned them into digital wireframes using Figma and Photoshop. These early mockups allowed me to test different layouts and interactions.
                </p>
                <p>
                  With each iteration, I refined the design, ensuring that the interface was both simple and effective.
                </p>
                <FigmaFrame 
                  figmaUrl="https://www.figma.com/design/QwIMymTyToy9PF7Yd1JsbC/Portfolio-Website-KritikaBhunwal?node-id=0-1&p=f&t=GvVvps5mcGDWgNOS-0" 
                />
              </div>
            </section>

            {/* Initial Research Section */}
            <section id="initial-research" className="report-section">
              <SectionHeading title="Initial Research" />
              <div className="section-content">
                <p>
                  I spent a great deal of time reading and exploring current design trends and web development practices. Interviews with mentors and case studies deepened my understanding of the challenges and opportunities.
                </p>
                <p>
                  This research laid a solid foundation for my decisions throughout the project.
                </p>
                <PDFViewer
                  src="/InitialPortfolioDesign.pdf"
                  width="100%"
                  style={{
                    borderRadius: "2rem",
                    margin: "1rem auto",
                    maxWidth: "90vw",
                    width: "90%",
                    height: "calc(90vh - 200px)",
                    maxHeight: "calc(90vh - 200px)",
                  }}
                />
              </div>
            </section>

            {/* Design Transition Journey Section */}
            <section id="design-transition" className="report-section">
              <SectionHeading title="Design Transition Journey" />
              <div className="section-content">
                <p>
                  As I developed my ideas, I gradually shifted from bold, attention-grabbing designs to a more refined and professional look. Experimentation during this phase was key to finding a balanced visual identity.
                </p>
                <p>
                  This transition was a learning process that improved both the style and functionality of the design.
                </p>
                <FigmaFrame 
                  figmaUrl="https://www.figma.com/proto/QwIMymTyToy9PF7Yd1JsbC/Portfolio-Website-KritikaBhunwal?node-id=27-435&p=f&t=ZbyRalM8fB037SC5-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2" 
                />
                <div className="section-gallery">
                  {designTransitionImages.map((img, idx) => (
                    <img
                      key={idx}
                      src={img.src}
                      alt={img.caption}
                      onClick={() =>
                        openModal(
                          ideationImages.length +
                          moodBoardImages.length +
                          styleGuideImages.length +
                          wireframesImages.length +
                          researchImages.length +
                          idx
                        )
                      }
                      className="gallery-image"
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* UX/UI Design Section */}
            <section id="uxui-design" className="report-section">
              <SectionHeading title="UX/UI Design" />
              <div className="section-content">
                <p>
                  I focused on crafting interfaces that were both simple and intuitive. Through user feedback and many revisions, I arrived at interactive prototypes that felt natural to use.
                </p>
                <p>
                  The design process balanced creative visuals with clear functionality, ensuring a pleasant user experience.
                </p>
                <div className="section-gallery">
                  {uxuidesignImages.map((img, idx) => (
                    <img
                      key={idx}
                      src={img.src}
                      alt={img.caption}
                      onClick={() =>
                        openModal(
                          ideationImages.length +
                          moodBoardImages.length +
                          styleGuideImages.length +
                          wireframesImages.length +
                          researchImages.length +
                          designTransitionImages.length +
                          idx
                        )
                      }
                      className="gallery-image"
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Development Section */}
            <section id="development" className="report-section">
              <SectionHeading title="Development" />
              <div className="section-content">
                <p>
                  My development journey began with experimenting in WordPress and evolved into custom coding with HTML, Tailwind CSS, and finally React. Each step built on the previous one, blending design creativity with technical skills.
                </p>
                <p>
                  The process was challenging but rewarding and ultimately brought the design to life on the web.
                </p>
                {/* <div className="section-gallery">
                  {developmentImages.map((img, idx) => (
                    <img
                      key={idx}
                      src={img.src}
                      alt={img.caption}
                      onClick={() =>
                        openModal(
                          ideationImages.length +
                          moodBoardImages.length +
                          styleGuideImages.length +
                          wireframesImages.length +
                          researchImages.length +
                          designTransitionImages.length +
                          uxuidesignImages.length +
                          idx
                        )
                      }
                      className="gallery-image"
                    />
                  ))}
                </div> */}
              </div>
            </section>

            {/* Bibliography Section */}
            <section id="bibliography" className="report-section">
              <SectionHeading title="Bibliography" />
              <div className="section-content">
                <p>
                  I owe a great deal of gratitude to Sujata Maheshwari, whose early support and belief in my vision opened the door to my creative journey. Her guidance was essential in shaping my design thinking.
                </p>
                <p>
                  Special thanks to Richard and Airrick for their collaboration, which helped transform my ideas into a finished and successful project.
                </p>
                {/* <div className="section-gallery">
                  {bibliographyImages.map((img, idx) => (
                    <img
                      key={idx}
                      src={img.src}
                      alt={img.caption}
                      onClick={() =>
                        openModal(
                          ideationImages.length +
                          moodBoardImages.length +
                          styleGuideImages.length +
                          wireframesImages.length +
                          researchImages.length +
                          designTransitionImages.length +
                          uxuidesignImages.length +
                          developmentImages.length +
                          idx
                        )
                      }
                      className="gallery-image"
                    />
                  ))}
                </div> */}
              </div>
            </section>

            {/* Figma Prototype Section */}
            {/* <section id="figma-prototype" className="report-section">
              <SectionHeading title="Figma Prototype" />
              <div className="section-content">
                <p>
                  I translated my design into an interactive Figma prototype that allowed for testing user flows and refining interactions. This phase was crucial for visualizing how the final product would work.
                </p>
                <p>
                  The prototype helped identify areas for improvement and ensured that the design was both attractive and practical.
                </p>
              </div>
            </section> */}

            {/* First Ever Pitch Deck Section */}
            {/* <section id="pitch-deck-first" className="report-section">
              <SectionHeading title="First Ever Pitch Deck" />
              <div className="section-content">
                <p>
                  This was my initial attempt at creating a pitch deck to express my design ideas. I combined simple visuals with clear, straightforward narratives to present my vision.
                </p>
                <p>
                  The pitch deck laid the groundwork for how I would communicate my design concepts in future presentations.
                </p>
              </div>
            </section> */}

            {/* Pitch Deck Presentation Section */}
            <section id="pitch-deck-presentation" className="report-section">
              <SectionHeading title="Pitch Deck Presentation" />
              <div className="section-content">
                <p>
                  In this refined pitch deck presentation, I polished my ideas and visuals to showcase the evolution of my design. The content was restructured for clarity and impact.
                </p>
                <p>
                  This presentation was pivotal in demonstrating my ability to blend creative design with strategic thinking.
                </p>
                <PDFViewer
                  src="/PitchDeck_ByKritika.pdf"
                  width="100%"
                  style={{
                    borderRadius: "2rem",
                    margin: "1rem auto",
                    maxWidth: "90vw",
                    width: "90%",
                    height: "calc(90vh - 200px)",
                    maxHeight: "calc(90vh - 200px)",
                  }}
                />
              </div>
            </section>
          </main>
        </div>
      </div>
      <SectionHeading title="Let's Collaborate!" />

      <ProjectContent
          title="A Partnership Rooted in Creativity & Collaboration"
          description="I thrive in creative collaborations that push boundaries and bring fresh perspectives to the table. Whether it's branding, illustration, UX/UI, or strategic design thinking, I am eager to contribute innovative solutions tailored to your vision. Let’s build something impactful together!"
          highlights={[
            {
              bulletPointOne: "Creative Branding",
              detail:
                "Unique and memorable visual identities that capture your brand's essence and set you apart in the marketplace.",
            },
            {
              bulletPointOne: "Illustration Expertise",
              detail:
                "Tailored illustrations that communicate your story with clarity, emotion, and a touch of artistry.",
            },
            {
              bulletPointOne: "UX/UI Design",
              detail:
                "User-centered design solutions that create seamless, engaging, and intuitive experiences.",
            },
            {
              bulletPointOne: "Strategic Design Thinking",
              detail:
                "Innovative problem-solving approaches that drive impactful, sustainable design outcomes.",
            },
          ]}
        />


      <WorkTogether />

      {/* Modal Preview for Images */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              ✖
            </button>
            <button className="modal-prev" onClick={prevModalImage}>
              ❮
            </button>
            <img
              src={modalImages[modalIndex].src}
              alt={modalImages[modalIndex].caption}
              className="modal-image"
            />
            <p className="modal-caption">{modalImages[modalIndex].caption}</p>
            <button className="modal-next" onClick={nextModalImage}>
              ❯
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
