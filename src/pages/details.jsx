import { useState, useEffect } from 'react'
import { UserCircle2, Plus, MoreVertical, Send, Sun, Moon, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"

const tasks = [
  { id: 1, title: "Create Navbar", assignee: "FBP", status: "todo" },
  { id: 2, title: "Implement Authentication", assignee: "AJK", status: "todo" },
  { id: 3, title: "Design Product Page", assignee: "LMN", status: "inProgress" },
  { id: 4, title: "Set up Database", assignee: "XYZ", status: "inProgress" },
  { id: 5, title: "Create Footer", assignee: "PQR", status: "done" },
  { id: 6, title: "Optimize Performance", assignee: "EFG", status: "done" },
]

const chatMessages = [
  { id: 1, sender: "Raam", message: "How's the progress on the navbar?" },
  { id: 2, sender: "Zosh", message: "I'm almost done. Just fixing some responsive issues." },
  { id: 3, sender: "Liam", message: "Great! Let me know when it's ready for review." },
  { id: 4, sender: "Raam", message: "Sure thing. I'll push the changes to the repo soon." },
]

export default function ProjectDetail() {
  const [newMessage, setNewMessage] = useState('')
  const [showChat, setShowChat] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(false)  // Cambiado a false para el modo claro

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  const handleSendMessage = (e) => {
    e.preventDefault()
    console.log('Sending message:', newMessage)
    setNewMessage('')
  }

  const handleToggleChat = () => {
    setShowChat(!showChat)
  }

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`flex flex-col min-h-screen font-['Oswald',sans-serif] ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      <header className={`sticky top-0 z-10 w-full border-b ${isDarkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}`}>
        <nav className="container flex items-center justify-between h-16 px-4">
          <div className="flex items-center space-x-4">
            <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>ProjeX Manager</h1>
            <Button variant="outline" size="sm" className={`border ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-200'}`}>
              New Project
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={handleToggleTheme} className={`text-gray-500 ${isDarkMode ? 'hover:text-gray-100' : 'hover:text-gray-900'}`}>
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={handleToggleChat} className={`text-gray-500 ${isDarkMode ? 'hover:text-gray-100' : 'hover:text-gray-900'}`}>
              <UserCircle2 className="w-6 h-6" />
            </Button>
          </div>
        </nav>
      </header>
      <main className="flex-1 container px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-sm mb-2">
            <span className={`text-gray-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Projects</span>
            <ChevronRight className="w-4 h-4" />
            <span className={`text-gray-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Ecommerce Website</span>
          </div>
          <h2 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Create Ecommerce Website Using React</h2>
          <p className={`text-gray-600 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>A modern e-commerce platform built with React and Node.js</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className={`${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Project Details</span>
                  <Button variant="ghost" size="icon" className={`text-gray-500 ${isDarkMode ? 'hover:text-gray-100' : 'hover:text-gray-900'}`}>
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Project Lead</p>
                    <p className={`text-lg font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Zosh</p>
                  </div>
                  <div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Category</p>
                    <p className={`text-lg font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Fullstack</p>
                  </div>
                  <div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Start Date</p>
                    <p className={`text-lg font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>01/05/2023</p>
                  </div>
                  <div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Deadline</p>
                    <p className={`text-lg font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>30/07/2023</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>Team Members</p>
                  <div className="flex space-x-2">
                    {['Z', 'R', 'L', 'A'].map((member, index) => (
                      <Avatar key={index} className={`${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-200 text-gray-900'}`}>
                        <AvatarFallback>{member}</AvatarFallback>
                      </Avatar>
                    ))}
                    <Button variant="outline" size="icon" className={`rounded-full w-8 h-8 ${isDarkMode ? 'border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-gray-100' : 'border-gray-300 text-gray-600 hover:bg-gray-200 hover:text-gray-900'}`}>
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className={`${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
              <CardHeader>
                <CardTitle>Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {['Todo', 'In Progress', 'Done'].map((status) => (
                    <div key={status} className="space-y-4">
                      <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{status}</h3>
                      <div className="space-y-2">
                        {tasks.filter(task => task.status === status.toLowerCase()).map((task) => (
                          <div key={task.id} className={`flex justify-between items-center p-4 rounded-lg ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
                            <span>{task.title}</span>
                            <Badge variant="outline" className={`ml-2 ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-800'}`}>
                              {task.assignee}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <aside className={`lg:col-span-1 ${showChat ? 'flex' : 'hidden'} flex-col ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}>
            <Card className="flex-1 flex flex-col">
              <CardHeader>
                <CardTitle>Chat</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ScrollArea className="flex-1 overflow-auto">
                  <div className="space-y-4">
                    {chatMessages.map((message) => (
                      <div key={message.id} className={`flex ${message.sender === "Raam" ? 'justify-end' : 'justify-start'} space-x-2`}>
                        <div className={`p-2 rounded-lg ${message.sender === "Raam" ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-900'}`}>
                          {message.message}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <form onSubmit={handleSendMessage} className="mt-4 flex">
                  <Input
                    type="text"
                    placeholder="Type a message"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className={`${isDarkMode ? 'bg-gray-700 text-gray-100 placeholder-gray-400' : 'bg-gray-100 text-gray-900 placeholder-gray-600'} flex-1`}
                  />
                  <Button type="submit" variant="outline" className={`ml-2 ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-200'}`}>
                    <Send className="w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </aside>


        </div>
      </main>
    </div>
  )
}
