const axios = require("axios")
const D3Node = require("d3-node")

// const { createCanvas, loadImage } = require("canvas")

// exports.handler = (event, context, callback) => {
//   axios
//     .get("https://jsonplaceholder.typicode.com/todos/1")
//     .then(res => {
//       callback(null, {
//         statusCode: 200,
//         body: JSON.stringify(res.data.title),
//       })
//     })
//     .catch(err => {
//       callback(`${err} + RESFDGHDGSRIADSFGJBVHFGJ`)
//     })
// }

exports.handler = (event, context, callback) => {
  // const city = event.queryStringParameters.city

  // const getLines = (ctx, text, maxWidth) => {
  //   const words = text.split(" ")
  //   const lines = []
  //   let currentLine = words[0]

  //   words.forEach(word => {
  //     const { width } = ctx.measureText(`${currentLine} ${word}`)
  //     if (width < maxWidth) {
  //       currentLine += ` ${word}`
  //     } else {
  //       lines.push(currentLine)
  //       currentLine = word
  //     }
  //   })

  //   lines.push(currentLine)

  //   return lines
  // }

  // const drawImage = stats => {
  //   const { localAuth, waitingList, housesBuilt } = stats
  //   const canvas = createCanvas(1200, 600)
  //   const ctx = canvas.getContext("2d")
  //   // const img = new Image()
  //   const fontSize = 60

  //   const lineHeight = fontSize * 1.26

  //   ctx.font = "500 60px Helvetica"
  //   ctx.fillStyle = "black"
  //   const lines = getLines(
  //     ctx,
  //     `There are ${waitingList} households on the waiting list for social housing in ${localAuth} – but ${housesBuilt} were delivered here last year.`,
  //     920
  //   )

  //   lines.forEach((line, i) => {
  //     ctx.fillText(line, 55, lineHeight * i + 100)
  //   })
  //   loadImage(
  //     "https://res.cloudinary.com/dk5jxmsza/image/upload/v1588260297/cards/blank-card.png"
  //   ).then(img => {
  //     ctx.drawImage(img, 0, 0)

  //   })

  //   return canvas.toDataURL("image/png")
  // }

  const drawCircle = placeName => {
    const d3n = new D3Node() // initializes D3 with container element
    const d3 = d3n.d3

    // console.log(d3n);
    // d3n.select('svg');

    const width = 800
    const height = 600

    const svg = d3n.createSVG(width, height)

    const circle = svg
      // .append("circle")
      // .attr("r", height / 2)
      // .attr("cx", width / 2)
      // .attr("cy", height / 2)
      // .attr("fill", "none")
      // .attr("stroke", "black")
      // .attr("fill-opacity", 0)
      // // .append("g")
      .append("g")
      .append("text")
      .attr("y", height / 2)
      .attr("x", height / 2)
      // .attr("dx", -20)
      .text(placeName)

    const svgString = d3n.svgString()

    return svgString
  }

  axios
    .get("https://api.npoint.io/8bca2a2617a6afc15198")
    .then(res => {
      // console.log(res.data[0])
      // console.log(qs.stringify(event.queryStringParameters))

      // const image = drawImage(JSON.stringify(res.data[12]))

      callback(null, {
        statusCode: 200,
        // body: JSON.stringify({ ...res.data[12], image: image }),
        body: JSON.stringify({
          ...res.data[12],
          image: drawCircle(res.data[12].localAuth),
        }),
      })
    })
    .catch(err => {
      callback(`${err} + RESFDGHDGSRIADSFGJBVHFGJ`)
    })
}
