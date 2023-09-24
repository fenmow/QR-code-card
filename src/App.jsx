import Image from "./imgs/image-qr-code.png"

export default function App() {
  return (
    <div className="app">
      <div className="card-component">
        <img src={Image} alt="qr-code" />
        <h3>Improve your front-end skills by building projects</h3>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  )
}