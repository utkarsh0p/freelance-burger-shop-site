import React from "react";
import { useNavigate } from "react-router-dom";

const SlideButton = ({ value, url, nav }) => {
  const navigate = useNavigate();

  const baseClasses =
    "relative inline-block overflow-hidden px-6 py-3 bg-red-dark text-white transition-colors group italic tracking-wider font-heading";

  const innerSpan =
    "relative z-10 transition-colors duration-260 group-hover:text-white group-hover:font-heading group-hover:tracking-wider group-hover:italic";

  const beforeClasses =
    "absolute inset-0 bg-black/90 backdrop-blur-sm transform -translate-x-[110%] transition-transform duration-300 group-hover:translate-x-0 z-0";

  const content = (
    <>
      <span className={innerSpan}>{value}</span>
      <span className={beforeClasses}></span>
    </>
  );

  if (url) {
    return (
      <a href={url} className={baseClasses}>
        {content}
      </a>
    );
  }

  if (nav) {
    return (
      <button
        className={baseClasses}
        onClick={() => navigate(nav)}
      >
        {content}
      </button>
    );
  }

  return <button className={baseClasses}>{content}</button>;
};

export default SlideButton;
