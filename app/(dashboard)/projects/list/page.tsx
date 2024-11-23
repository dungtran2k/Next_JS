import Link from "next/link";
import React from "react";

const ProjectList = () => {
  return (
    <>
      <div>ProjectList</div>

      <ul>
        <li>
          <Link href={"/projects/jobit"}>Jobit</Link>
        </li>

        <li>
          <Link href={"/projects/carrent"}>Car Rent</Link>
        </li>

        <li>
          <Link href={"/projects/hipnode"}>Hip Node</Link>
        </li>
      </ul>
    </>
  );
};

export default ProjectList;
