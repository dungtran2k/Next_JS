import React from "react";

const ProjectDetails = ({ params }: { params: { slug: string } }) => {
  return <div>ProjectDetails {params.slug} </div>;
};

export default ProjectDetails;
