"use client"

import type React from "react"
import { useState } from "react"
import { Send, Loader2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

interface ChatInterfaceProps {
  isFloating?: boolean
  setIsOpen?: (isOpen: boolean) => void // Accept setIsOpen as a prop
}

export function ChatInterface({ isFloating = false, setIsOpen }: ChatInterfaceProps) {
  const [userMessage, setUserMessage] = useState("")
  const [chat, setChat] = useState<{ role: string; text: string }[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const { theme } = useTheme()

  async function askAssistant() {
    if (!userMessage.trim()) return

    setIsLoading(true)
    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      })

      const data = await res.json()

      let assistantReply = ""
      if (typeof data.response === "string") {
        assistantReply = data.response
      } else if (data.response?.parts?.[0]?.text) {
        assistantReply = data.response.parts[0].text
      } else {
        assistantReply = "I'm not sure, but I can try to find out for you!"
      }

      setChat([...chat, { role: "user", text: userMessage }, { role: "ai", text: assistantReply }])
      setUserMessage("")
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isLoading) {
      askAssistant()
    }
  }

  const formatText = (text: string) => {
    return text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={index}>{part.slice(2, -2)}</strong>
      ) : (
        part
      )
    )
  }

  return (
    <Card className={cn("bg-card text-card-foreground w-full max-w-3xl mx-auto h-[500px] flex flex-col md:h-[600px] sm:h-[450px]")}> 
      {!isFloating && (
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl font-bold">Chat with AI</CardTitle>
        </CardHeader>
      )}
      
      <CardHeader className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-md md:text-lg font-semibold">AI Assistant</h2>
          <Button 
            onClick={() => setIsOpen?.(false)}  // Close the chat using setIsOpen
            variant="ghost" 
            size="icon" 
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      </CardHeader>

      <CardContent className="overflow-y-auto flex-1 p-4">
        {chat.length === 0 ? (
          <div className="flex items-center justify-center h-full text-muted-foreground text-sm md:text-base">
            <p>Start a conversation...</p>
          </div>
        ) : (
          <div className="space-y-4">
            {chat.map((msg, index) => (
              <div key={index} className={cn("flex", msg.role === "user" ? "justify-end" : "justify-start")}> 
                <div className={cn("max-w-[85%] md:max-w-[80%] rounded-lg p-3 break-words", msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground")}>
                  <p>{formatText(msg.text)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="border-t p-4">
        <div className="flex w-full gap-2 flex-row">
          <Input
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your message..."
            className="flex-grow text-sm md:text-base"
            disabled={isLoading}
          />
          <Button onClick={askAssistant} disabled={isLoading || !userMessage.trim()} size="icon">
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
