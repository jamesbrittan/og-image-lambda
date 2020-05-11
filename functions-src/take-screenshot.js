const { createCanvas, loadImage } = require("canvas")

exports.handler = async (event, context) => {
  const canvas = createCanvas(200, 200)
  const ctx = canvas.getContext("2d")

  // Write "Awesome!"
  ctx.font = "30px Impact"
  ctx.rotate(0.1)
  ctx.fillText("Awesome!", 50, 100)

  // Draw line under text
  var text = ctx.measureText("Awesome!")
  ctx.strokeStyle = "rgba(0,0,0,0.5)"
  ctx.beginPath()
  ctx.lineTo(50, 102)
  ctx.lineTo(50 + text.width, 102)
  ctx.stroke()

  return {
    statusCode: 200,
    body: JSON.stringify({
      image: canvas.toDataURL(),
    }),
  }
}
