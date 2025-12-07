import { useState, useMemo, useEffect } from 'react'

function App() {

  const products = [
    "wireless charger", "usb hub", "game controller", "batteries", "motherboard",
    "hard drive enclosure", "projector", "usb cable", "gpu", "desk mat",
    "stylus pen", "sd card reader", "printer", "router antenna", "cooling fan",
    "rgb strip", "vr headset", "screen protector", "tablet stand",
    "ssd", "smart bulb", "smart plug", "rgb controller", "tripod",
    "gaming chair", "ethernet cable", "desktop tower", "webcam", "modem",
    "flash drive", "keyboard", "microphone", "fitness tracker", "smartwatch",
    "mechanical keyboard", "ring light", "cpu", "hdmi cable", "microphone stand",
    "gaming mouse", "soundbar", "tablet", "camera", "gamepad",
    "smart speaker", "screen cleaner", "monitor arm", "micro sd card",
    "phone", "power supply", "ethernet switch", "tv", "usb-c cable",
    "phone holder", "usb adapter", "drone", "capture card", "laptop stand",
    "case", "surge protector", "vr controller", "ram", "disk reader",
    "graphics tablet", "bluetooth speaker", "cooling pad", "headphones",
    "lightning cable", "monitor", "battery", "graphic card", "graphics tablet",
    "mouse pad", "phone case", "power bank", "hard drive", "wifi extender",
    "motherboard battery", "router", "camera tripod", "bluetooth adapter",
    "joystick", "gaming headset", "wifi router", "ethernet card", "laptop",
    "speaker", "usb cable organizer", "led lamp", "external hdd",
    "portable ssd", "laptop charger", "memory card", "mouse", "sata cable",
    "earbuds", "power adapter", "security camera", "external blu-ray drive",
    "label maker", "document scanner", "mini projector", "portable power station",
    "cable ties", "soldering iron", "circuit breaker", "multimeter",
    "oscilloscope", "3d printer filament", "electronic drawing tablet",
    "smart scale", "air purifier", "robotic vacuum cleaner", "smart coffee maker",
    "digital picture frame", "portable charger case", "magnetic phone mount",
    "wireless keyboard and mouse combo", "voice recorder", "network attached storage (nas)",
    "server rack", "kvm switch", "patch panel", "fiber optic cable",
    "audio interface", "midi controller", "studio monitor", "drum machine",
    "synthesizer", "dj controller", "electric standing desk", "ergonomic office chair",
    "foot rest", "anti-glare screen filter", "blue light blocking glasses",
    "webcam cover", "privacy screen filter", "keyboard wrist rest",
    "mouse wrist rest", "trackball mouse", "mechanical pencil", "smart pen",
    "notebook cooler", "laptop skin", "portable monitor", "video doorbell",
    "smart thermostat", "door sensor", "window sensor", "smoke detector",
    "carbon monoxide detector", "water leak sensor", "smart lock", "pet feeder",
    "electric scooter", "dash cam", "tire pressure monitoring system (tpms)",
    "car charger adapter", "bluetooth car kit", "jump starter", "laser pointer",
    "barcode scanner", "thermal printer", "receipt printer", "cash register",
    "credit card reader", "rfid reader", "electronic tag", "mini drone",
    "underwater drone", "gimbal stabilizer", "action camera", "telescope",
    "microscope", "weather station", "digital caliper", "laser measure",
    "stud finder", "electric screwdriver set", "precision tool kit",
    "magnifying lamp", "desktop microphone stand", "pop filter", "shock mount",
    "audio mixer", "vlogging kit", "green screen", "stream deck",
    "elgato stream deck", "portable hard drive", "enterprise ssd", "sas cable",
    "raid controller", "motherboard standoff screws", "thermal paste",
    "cable management sleeves", "cable clip", "rechargeable battery pack"
  ];


  let [search, setSearch] = useState("");
  let [theam, settheam] = useState(true);

  const filltering = useMemo(() => {
    console.log("filltering started")

    return products.filter(containsProduct)

  }, [search])


  function containsProduct(product) {
    return product.toLowerCase().includes(search.toLowerCase())
  }


  useEffect(() => {
    console.log("renderd")
  })

  useEffect(() => {

  })
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}>


      <div style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: !theam ? "rgb(37, 37, 37)" : "white"
      }}>

        <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "space-between" }}>


          <input
            type="text"
            placeholder="Search product..."
            onChange={e => setSearch(e.target.value)}
            value={search}
            style={{ padding: "8px", width: "250px" }}
          />

          <button
            onClick={() => { settheam(!theam) }}
          >{theam ? "🌑" : "☀️"}</button>


        </div>

        <br />

        <ol>
          {
            filltering && filltering.map((product) =>
              <li
                style={{
                  color: !theam ? "white" : "black"
                }}>
                <h3> {product}</h3>
              </li>
            )}
        </ol>

      </div >
    </div>
  )
}

export default App
