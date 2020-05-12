const axios = require("axios")
const { createSVGWindow } = require("svgdom")
const window = createSVGWindow()
const SVG = require("svg.js")(window)
const document = window.document
const { svg2png } = require("svg-png-converter")
// const cloudinary = require("cloudinary").v2

// cloudinary.config({
//   cloud_name: "dk5jxmsza",
//   api_key: "594557748412479",
//   api_secret: "ZIlGIYnEBLSX0ozmlOXLJDIFhS0",
// })
const cloudinaryAPI = "https://api.cloudinary.com/v1_1/dk5jxmsza"
const cloudinaryUploadPreset = "shelter-stats-card"
exports.handler = async (event, context) => {
  // const handleUpload = async image => {
  //   axios({
  //     url: `${cloudinaryAPI}/upload`,
  //     method: "POST",
  //     data: {
  //       file: `data:image/svg+xml;utf8,${image}`,
  //       upload_preset: cloudinaryUploadPreset,
  //       tags: ["card"],
  //       // public_id: `${search.city}`,
  //       public_id: `test`,
  //     },
  //   })
  //     .then(res => console.log(`new image uploaded for test`))
  //     .catch(err => console.error(err))
  // }

  // create svg.js instance
  const canvas = SVG(document.documentElement).size(1200, 660)

  // use svg.js as normal
  canvas.rect(1200, 660).fill("yellow")
  // .move(50, 50)

  canvas.text("hello 123456")

  const s = await svg2png({
    input: canvas.node.outerHTML.trim(),
    encoding: "dataURL",
    format: "png",
    width: 1200,
    height: 660,
    // multiplier: 0.7,
    // quality: 0.5,
  })



  // axios({
  //   url: `${cloudinaryAPI}/upload`,
  //   method: "POST",
  //   data: {
  //     file:
  //       "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2240%22%20stroke%3D%22black%22%20stroke-width%3D%223%22%20fill%3D%22red%22%20%2F%3E%3C%2Fsvg%3E",
  //     upload_preset: cloudinaryUploadPreset,
  //     tags: ["card"],
  //     public_id: `12345`,
  //   },
  // })
  //   .then(res => console.log(`new image uploaded for ${search.city}`))
  //   .catch(err => console.error(err))

  return {
    statusCode: 200,
    body: JSON.stringify({
      image: s,
    }),
  }
}
