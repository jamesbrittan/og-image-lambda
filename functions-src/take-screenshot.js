const { createSVGWindow } = require("svgdom")
const window = createSVGWindow()
const SVG = require("svg.js")(window)
const document = window.document

exports.handler = async (event, context) => {
  // create svg.js instance
  const canvas = SVG(document.documentElement)

  // use svg.js as normal
  canvas
    .rect(100, 100)
    .fill("yellow")
    .move(50, 50)

  // get your svg as string
  console.log(canvas.svg())
  // or
  console.log(canvas.node.outerHTML)

  return {
    statusCode: 200,
    body: JSON.stringify({
      image: canvas.node.outerHTML,
    }),
  }
}
