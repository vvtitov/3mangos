"use client";

import React from "react";
import ContactFormPreview from "./ui/contact-form";
import CustomShapeTop from "./ui/custom-shape-top";
import CustomShapeBottom from "./ui/custom-shape-bottom";
import { CardContainer } from "./ui/3d-card";

export default function Contact() {
  return (
    <>
      <div
        id="contact"
        className="relative flex my-20 mx-auto w-full h-full justify-center bg-fixed lg:bg-repeat-x bg-center content-around bg-orange-300 bg-repeat-space py-10"
        style={{ backgroundImage: "url('/mango.png')" }}
      >
        <CustomShapeTop />

        <div className="relative z-[3] my-40 mx-6 rotate-2">
          <CardContainer>
            <ContactFormPreview />
          </CardContainer>
        </div>

        <CustomShapeBottom />
      </div>
    </>
  );
}
