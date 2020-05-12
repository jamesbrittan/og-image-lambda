import React, { useEffect, useState, useRef } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ImgTest = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState("")
  const [image, setImage] = useState(null)
  const canvas = useRef(null)

  useEffect(() => {
    // console.log("use effect")
    // setLoading(true)
    // fetch("/.netlify/functions/generate-image", {
    //   // headers: {
    //   //   Accept: "application/json",
    //   //   "Content-Type": "application/json",
    //   // },
    // })
    //   .then(response => {
    //     response.json()
    //   })
    //   .then(json => {
    //     console.log(json)

    //   })

    fetch("/.netlify/functions/take-screenshot", {
      // method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(data => {
        // const ctx = canvas.current.getContext("2d")

        // const img = new Image()
        // const svg = new Blob([data.image], { type: "image/svg+xml" })
        // const url = URL.createObjectURL(svg)
        // img.src = url

        // console.log(url)
        // img.onload = () => {
        //   ctx.drawImage(img, 0, 0)
        //   // setImage(canvas.current.toDataURL("image/png"))
        // }

        // setImage(url)
        // console.log
        // ctx.save()

        setImage(data.image)

        console.log("Success:", data)
      })
      .catch(error => {
        console.error("Error:", error)
      })
  }, [])

  return (
    <Layout>
      <SEO title="Local image stats" metaImage={image} />
      {/* <img src={`data:image/svg+xml;utf8,${image}`} /> */}
      <img src={image} />
    </Layout>
  )
}

export default ImgTest
