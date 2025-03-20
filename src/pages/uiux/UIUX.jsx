import React from "react";
import SectionHeading from "../../components/SectionHeading.jsx";
// import SubSectionHeading from "../../components/SubSectionHeading.jsx";
import ProjectContent from "../../components/ProjectContent.jsx";
import ImageBanner from "../../components/ImageBanner.jsx";

// Import UX/UI banner images
import UXUIBannerBase from "../../assets/images/UXUIBannerBase.png";
import UXUIBannerTop from "../../assets/images/UXUIBannerTop.png";

import "../../styles/uiux.css";

const UIUX = () => {
  return (
    <div className="uxui-container">
      <ImageBanner
        baseImage={UXUIBannerBase}
        topImage={UXUIBannerTop}
        baseAlt="Base UX/UI Banner"
        topAlt="Top UX/UI Banner"
        bannerClass="image-banner"
      />
      <SectionHeading title="UX / UI Design" />
      <ProjectContent
        title="User-Centered Digital Experiences"
        description="A comprehensive approach to designing intuitive digital products that blend aesthetics with seamless usability. Focusing on interactive design and functionality."
        highlights={[
          {
            bulletPointOne: "User Focus",
            detail:
              "We put the user's needs first by employing thorough user research and continuous feedback loops to tailor our designs to real-world usage."
          },
          {
            bulletPointOne: "Accessibility",
            detail:
              "Our designs comply with the latest accessibility standards, ensuring that digital experiences are usable and inclusive for everyone."
          },
          {
            bulletPointOne: "Innovation",
            detail:
              "We integrate emerging technologies and design trends to create modern interfaces that captivate and inspire."
          },
          {
            bulletPointOne: "Responsive Design",
            detail:
              "Optimized layouts adapt seamlessly to any device, ensuring an exceptional user experience across all platforms."
          },
          {
            bulletPointOne: "Visual Storytelling",
            detail:
              "Engaging aesthetics and narrative-driven design that communicate your brand's story effectively."
          }
        ]}
      />
      <SectionHeading title="Digital Product Portfolio" />
    </div>
  );
};

export default UIUX;
