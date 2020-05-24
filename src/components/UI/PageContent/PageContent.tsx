import React from "react";
import "./PageContent.scss";

function PageContent(props: PageContentProps) {
  return (
    <div className="PageContent">
      <h2 className="title">{props.title}</h2>
      <p className="description">{props.description}</p>

      <div className="content">{props.children}</div>
    </div>
  );
}

export type PageContentProps = {
  title: string;
  description?: string;
  children?: JSX.Element[];
};

export default PageContent;
