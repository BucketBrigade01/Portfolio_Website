import React from "react";
import portfolio from "../Data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";

function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Title>Projects</Title>
      <div className="flex flex-col md:flex-row
                    items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
          {portfolio.map(project => (
            <PortfolioItem
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              link={project.link}
              color={project.color}
            />
          ))}
        </div>
      </div>
      <p className="pt-5 text-cyan-300 font-bold text-sm md:text-lg underline">
        Click on the image to navigate to the desired project.
      </p>
    </div>
  )
}

export default Portfolio