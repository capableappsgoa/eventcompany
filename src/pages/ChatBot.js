import React, { useEffect } from 'react'
 
const Chatbot = () => {

  const config = {
    "composerPlaceholder": "Chat with Sarah Ai",
    "botConversationDescription": "Feel free to ask questions",
    "botId": "b4268da4-4f0f-4efc-8bb5-983665f33a9f",
    "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
    "messagingUrl": "https://messaging.botpress.cloud",
    "clientId": "b4268da4-4f0f-4efc-8bb5-983665f33a9f",
    "webhookId": "3c9a848b-0bac-49de-ae1c-68b20548a754",
    "lazySocket": true,
    "themeName": "prism",
    "botName": "Cas Ant Ai",
    "avatarUrl": "https://cloud.appwrite.io/v1/storage/buckets/6620f76347a6c75a350d/files/665065f40021a220938f/view?project=661d51c7e4d47fa7d45d&mode=admin",
    "stylesheet": "https://webchat-styler-css.botpress.app/prod/d0bb4cb9-545f-45cb-a1e6-8aadf9787bd6/v69772/style.css",
    "frontendVersion": "v1",
    "theme": "prism",
    "themeColor": "#2563eb",
    "allowedOrigins": []
  };



  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
    script.onload = () => {
      window.botpressWebChat.init({
        composerPlaceholder: "Ask me anything",
        botId: config.botId,
        hostUrl: config.hostUrl,
        messagingUrl: config.messagingUrl,
        avatarUrl: config.avatarUrl,
        clientId: config.clientId,
        stylesheet: "https://webchat-styler-css.botpress.app/prod/d0bb4cb9-545f-45cb-a1e6-8aadf9787bd6/v68061/style.css",
        botName: "Cas Ant Ai",
        webhookId: config.webhookId,
        lazySocket: config.lazySocket,
        themeName: "prism",
        themeColor: config.themeColor,
        allowedOrigins: config.allowedOrigins,
        frontendVersion: config.frontendVersion
      })

      window.botpressWebChat.sendPayload({ type: 'text', text: 'Hi' })
    }
  }, [])
 
  return <div id="webchat" />
}
 
export default Chatbot