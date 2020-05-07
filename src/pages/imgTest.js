import React, {useEffect, useState} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ImgTest = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState("")

  useEffect(() => {
    setLoading(true)
    fetch("/.netlify/functions/generate-image", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setLoading(false)
        setData(json)
      })
      .catch(err => {
        if (window.location.origin === "http://localhost:8000")
          setErr(
            'your origin is "http://localhost:8000". You are likely not using Netlify Dev so the functions server isnt running. Please read the docs, use Netlify Dev, and go to http://localhost:8888'
          )
        else setErr(err)
        throw err
      })
    return () => {
      console.log(data);
    }
  }, [])



  return (
    <Layout>
      <SEO title="Local image stats test" />
      <div>test</div>
    </Layout>
  )
}

export default ImgTest
