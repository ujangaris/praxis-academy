import React from "react"

class ShopingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Daftar Belanja untuk {this.props.name}</h1>
        <ul>
          {/* <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li> */}
        </ul>
      </div>
    )
  }
}

export default ShopingList
