import React from "react";

function Footer() {
  return (
    <div className="py-5 text-center">
      <p className="text-sm text-white mt-2 opacity-50">
        &copy; {new Date().getFullYear()} Jake Styles. All Rights Reserved
      </p>
    </div>
  )
}

export default Footer