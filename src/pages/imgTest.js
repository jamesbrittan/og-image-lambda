import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ImgTest = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState("")
  const [image, setImage] = useState("https://res.cloudinary.com/dk5jxmsza/image/upload/v1588260297/cards/blank-card.png")

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

    fetch("/.netlify/functions/generate-image?city=cornwall", {
      // method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(data => {
        setImage(data.image)
        console.log("Success:", data)
      })
      .catch(error => {
        console.error("Error:", error)
      })
  }, [])

  return (
    <Layout>
      <SEO title="Local image stats" metaImage={image}/>
      {/* <img src={image} /> */}
      <img src={`data:image/svg+xml;utf8,${image}`} />
      <div>test</div>
    </Layout>
  )
}

export default ImgTest
