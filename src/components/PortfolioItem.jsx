import React from "react";

function PortfolioItem({title, imgUrl, stack, link, color}) {
  return (
    <div className={`drop-shadow-xl rounded-md overflow-hidden`} style={{ backgroundColor: color }}>
      <a href={link} target="_blank">
        <img 
          src={imgUrl} 
          alt="portfolioImage"
          className="w-full h-36 md:h-48 object-cover cursor-pointer"
        />
      </a>
      <div className="w-full p-4">
        <h1 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h1>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map(item => (
            <span className="inline-block px-2 py-1 font-semibold border-2 
                            border-stone-900 rounded-md">
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}

export default PortfolioItem