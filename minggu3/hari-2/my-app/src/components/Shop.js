import React from "react"
import ShopingList from "./ShopingList"

function Shop() {
  return React.createElement(
    "div",
    { className: "App" },
    React.createElement(
      ShopingList,
      { name: "Mark" },
      React.createElement(
        "ul",
        { li: "Instagram" },
        React.createElement(
          "li",
          { li: "WhatsApp" },
          React.createElement("li", { li: "Facebook" })
        )
      )
    )
  )
}

export default Shop
