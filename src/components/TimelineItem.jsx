import React from "react";

function TimelineItem({year, job, title, duration, description}) {
  return (
    <ul className="flex flex-col md-flex-row relative border-l border-x-cyan-400">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-4 bg-cyan-400 rounded-full mt-1.5
                      -left-1.5 border border-cyan-400"/>
        <p className="flex flex-wrap gap-4 flex-row justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-cyan-400 bg-cyan-800">
            {year}
          </span>
          <h3 className="text-lg font-semibold text-cyan-200">
            {job}: 
          </h3>
          <h3 className="text-lg font-semibold text-cyan-400">
            {title}
          </h3>
          <div className="my-1 text-sm font-normal leading-none text-cyan-200 ">
            {duration}
          </div>
          <div className="my-2 text-base font-normal text-cyan-500">
            {description}
          </div>
        </p>              
      </li>
    </ul>
  )
}

export default TimelineItem