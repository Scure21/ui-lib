import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type OverlayProps = {
  children: React.ReactNode | React.ReactNode[];
  overlayColor?: string;
  zIndex?: number;
};

export const Overlay = ({
  children,
  overlayColor = "rgba(31, 30, 30, 0.5)",
  zIndex = 500,
}: OverlayProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Prevent scrolling in the document body when overlay is open
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = "hidden";
      return () => {
        body.style.overflow = "auto";
      };
    }
  }, []);

  const OverlayBody = ({ children }: OverlayProps) => {
    const overlayStyles: React.CSSProperties = {
      position: "fixed",
      top: "0",
      left: "0",
      bottom: "0",
      right: "0",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      width: "100vw",
      height: "100vh",
      backgroundColor: overlayColor,
      zIndex: zIndex,
    };

    return isMounted ? (
      createPortal(
        <div aria-label="overlay" style={overlayStyles}>
          {children}
        </div>,
        document.body
      )
    ) : (
      <div aria-label="overlay" style={overlayStyles}>
        {children}
      </div>
    );
  };

  return <OverlayBody>{children}</OverlayBody>;
};
