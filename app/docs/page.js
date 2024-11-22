// app/docs/page.js
"use client"
import { useEffect } from "react"
import axios from "axios"
import o from "../declaration/createScript"
import v from "../declaration/createLink"

export default function ApiDocs() {
  useEffect(() => {
    const docs = async () => {
      try {
        const linkStyle = v("https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.css")
        document.head.appendChild(linkStyle)

        const customStyle = document.createElement("style")
        const a = await axios.get("/style.css")
        customStyle.innerHTML = a.data
        document.head.appendChild(customStyle)

        const scriptBundle = o("https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.js")
        const scriptPreset = o("https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.js")
        
        // Add integrity and crossorigin for security
        scriptBundle.integrity = "sha384-YOUR_HASH_HERE"
        scriptBundle.crossOrigin = "anonymous"
        scriptPreset.integrity = "sha384-YOUR_HASH_HERE"
        scriptPreset.crossOrigin = "anonymous"
        
        document.body.appendChild(scriptBundle)
        document.body.appendChild(scriptPreset)

        scriptBundle.onload = () => {
          if (window.SwaggerUIBundle && window.SwaggerUIStandalonePreset) {
            window.SwaggerUIBundle({
              url: "/swg.json",
              dom_id: "#swagger-ui",
              presets: [
                window.SwaggerUIBundle.presets.apis,
                window.SwaggerUIStandalonePreset,
              ],
              layout: "StandaloneLayout",
              deepLinking: true,  // Enable deep linking
              displayOperationId: false,
              defaultModelsExpandDepth: 1,
              defaultModelExpandDepth: 1,
              displayRequestDuration: true,
              filter: true,
              persistAuthorization: true
            })
          }
        }
      } catch (error) {
        console.error("Error loading Swagger UI:", error)
      }
    }

    docs()

    return () => {
      // Optional cleanup: remove dynamically added scripts/styles
      const elementsToRemove = document.querySelectorAll(
        'link[href*="swagger-ui"], script[src*="swagger-ui"]'
      )
      elementsToRemove.forEach(el => el.remove())
    }
  }, [])

  return (
    <div 
      id="swagger-ui" 
      style={{ 
        minHeight: "100vh", 
        width: "100%", 
        padding: "20px" 
      }}
    />
  )
}