const axios = require("axios")

// axios
//     .get("https://api.npoint.io/8bca2a2617a6afc15198")
//     .then(res => {
//       // console.log(res.data[0])
//       // console.log(qs.stringify(event.queryStringParameters))

//       // const image = drawImage(JSON.stringify(res.data[12]))

//       callback(null, {
//         statusCode: 200,
//         // body: JSON.stringify({ ...res.data[12], image: image }),
//         body: JSON.stringify({
//           ...res.data[12],
//           image: drawCircle(res.data[12].localAuth),
//         }),
//       })
//     })
//     .catch(err => {
//       callback(`${err} + RESFDGHDGSRIADSFGJBVHFGJ`)
//     })

const chromium = require("chrome-aws-lambda")
const puppeteer = require("puppeteer")
const { createCanvas, close } = require("puppet-canvas")

exports.handler = async (event, context, callback) => {
  const canvas = await createCanvas(400, 400)
  const ctx = await canvas.getContext("2d")

  // Draw a house
  ctx.lineWidth = 10
  ctx.strokeRect(75, 140, 150, 110)
  ctx.fillRect(130, 190, 40, 60)
  ctx.moveTo(50, 140)
  ctx.lineTo(150, 60)
  ctx.lineTo(250, 140)
  ctx.closePath()
  ctx.stroke()

  // Get the image as a data url
  const dataUrl = await canvas.toDataURL()

  // console.log(dataUrl)
  // Release
  await close()

  callback(null, {
    statusCode: 200,
    // body: JSON.stringify({ ...res.data[12], image: image }),
    body: JSON.stringify({
      // ...res.data[12],
      image: dataUrl,
    }),
  })
}
