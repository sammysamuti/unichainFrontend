"use client"

import { useState } from "react"
import { MessageSquare, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ChatInterface } from "@/app/ai-assistant/page"

export function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
       <ChatInterface isFloating={true} />
     
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full p-4 shadow-lg transition-all duration-200 transform hover:scale-110 h-14 w-14"
          size="icon"
        >
          <MessageSquare className="h-6 w-6" />
          <span className="sr-only">Open AI Assistant</span>
        </Button>
      )}
    </div>
  )
}

