import React, { useState } from 'react'
import { UserCircle2, Plus, MoreVertical, Send, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const tasks = [
  { id: 1, title: "Create Navbar", assignee: "FBP", status: "todo", description: "Design and implement a responsive navigation bar for the e-commerce website.", reporter: "Zosh" },
  { id: 2, title: "Implement Authentication", assignee: "AJK", status: "todo", description: "Set up user authentication system using JWT tokens.", reporter: "Liam" },
  { id: 3, title: "Design Product Page", assignee: "LMN", status: "inProgress", description: "Create an attractive and user-friendly product page layout.", reporter: "Raam" },
  { id: 4, title: "Set up Database", assignee: "XYZ", status: "inProgress", description: "Configure and set up the MongoDB database for the project.", reporter: "Zosh" },
  { id: 5, title: "Create Footer", assignee: "PQR", status: "done", description: "Design and implement the website footer with relevant links and information.", reporter: "Liam" },
  { id: 6, title: "Optimize Performance", assignee: "EFG", status: "done", description: "Improve website loading speed and overall performance.", reporter: "Raam" },
]

const chatMessages = [
  { id: 1, sender: "Raam", message: "How's the progress on the navbar?" },
  { id: 2, sender: "Zosh", message: "I'm almost done. Just fixing some responsive issues." },
  { id: 3, sender: "Liam", message: "Great! Let me know when it's ready for review." },
  { id: 4, sender: "Raam", message: "Sure thing. I'll push the changes to the repo soon." },
]

const teamMembers = ['Z', 'R', 'L', 'A']

function TaskDetailsModal({ isOpen, onClose, task }) {
  const [newComment, setNewComment] = useState('');

  const handleAddComment = (e) => {
    e.preventDefault();
    console.log('Adding comment:', newComment);
    setNewComment('');
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-[#FFF5EE] text-[#8B4513] border-[#FFE4E1]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#8B4513]">{task.title}</DialogTitle>
          <Button variant="ghost" size="icon" onClick={onClose} className="absolute right-4 top-4 text-[#8B4513] hover:text-[#A0522D]">
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-[#8B4513]">Description</h3>
              <p className="text-[#A0522D]">{task.description}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-[#8B4513]">Activity</h3>
              <Tabs defaultValue="all">
                <TabsList className="bg-[#FFE4E1] text-[#8B4513]">
                  <TabsTrigger value="all" className="data-[state=active]:bg-white">All</TabsTrigger>
                  <TabsTrigger value="comments" className="data-[state=active]:bg-white">Comments</TabsTrigger>
                  <TabsTrigger value="history" className="data-[state=active]:bg-white">History</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-4 text-[#A0522D]">
                  All activity will be shown here.
                </TabsContent>
                <TabsContent value="comments" className="mt-4 text-[#A0522D]">
                  Comments will be shown here.
                </TabsContent>
                <TabsContent value="history" className="mt-4 text-[#A0522D]">
                  Task history will be shown here.
                </TabsContent>
              </Tabs>
            </div>
            <form onSubmit={handleAddComment} className="space-y-2">
              <Input
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="bg-white text-[#8B4513] placeholder-[#A0522D] border-[#FFE4E1]"
              />
              <Button type="submit" className="bg-[#FFB6C1] text-[#8B4513] hover:bg-[#FFC0CB]">
                Save
              </Button>
            </form>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#8B4513]">Details</h3>
            <div className="space-y-2 text-[#A0522D]">
              <div className="flex justify-between items-center">
                <span>Assignee</span>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-6 h-6 bg-[#FFE4E1] text-[#8B4513]">
                    <AvatarFallback>{task.assignee[0]}</AvatarFallback>
                  </Avatar>
                  <span>{task.assignee}</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Labels</span>
                <span>None</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Status</span>
                <Badge variant="outline" className="bg-[#FFE4E1] text-[#8B4513] border-[#FFB6C1]">
                  {task.status}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Reporter</span>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-6 h-6 bg-[#FFE4E1] text-[#8B4513]">
                    <AvatarFallback>{task.reporter[0]}</AvatarFallback>
                  </Avatar>
                  <span>{task.reporter}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function ProjectDetailWithTaskModal() {
  const [newMessage, setNewMessage] = useState('')
  const [showChat, setShowChat] = useState(true)
  const [inviteEmail, setInviteEmail] = useState('')
  const [newIssue, setNewIssue] = useState({ title: '', description: '' })
  const [selectedTask, setSelectedTask] = useState(null)

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log('Sending message:', newMessage);
    setNewMessage('');
  }

  const handleToggleChat = () => {
    setShowChat(!showChat);
  }

  const handleInviteUser = (e) => {
    e.preventDefault();
    console.log('Inviting user:', inviteEmail);
    setInviteEmail('');
  }

  const handleCreateIssue = (e) => {
    e.preventDefault();
    console.log('Creating issue:', newIssue);
    setNewIssue({ title: '', description: '' });
  }

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  }

  return (
    <div className="flex flex-col min-h-screen font-['Oswald',sans-serif] bg-[#FFF5EE] text-[#8B4513]">
      <header className="sticky top-0 z-10 w-full border-b border-[#FFE4E1] bg-white">
        <nav className="container flex items-center justify-between h-16 px-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-[#8B4513]">ProjeX Manager</h1>
            <Button variant="outline" size="sm" className="border-[#FFE4E1] text-[#8B4513] hover:bg-[#FFF0F5]">
              New Project
            </Button>
          </div>
          <Button variant="ghost" size="icon" onClick={handleToggleChat} className="text-[#8B4513] hover:text-[#A0522D]">
            <UserCircle2 className="w-6 h-6" />
          </Button>
        </nav>
      </header>
      <main className="flex-1 container px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-sm mb-2">
            <span className="text-[#A0522D]">Projects</span>
            <ChevronRight className="w-4 h-4 text-[#A0522D]" />
            <span className="text-[#A0522D]">Ecommerce Website</span>
          </div>
          <h2 className="text-3xl font-bold mb-2 text-[#8B4513]">Create Ecommerce Website Using React</h2>
          <p className="text-[#A0522D]">A modern e-commerce platform built with React and Node.js</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="bg-white border-[#FFE4E1]">
              <CardHeader>
                <CardTitle className="flex justify-between items-center text-[#8B4513]">
                  <span>Project Details</span>
                  <Button variant="ghost" size="icon" className="text-[#8B4513] hover:text-[#A0522D]">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-[#A0522D]">Project Lead</p>
                    <p className="text-lg font-semibold text-[#8B4513]">Zosh</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#A0522D]">Category</p>
                    <p className="text-lg font-semibold text-[#8B4513]">Fullstack</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#A0522D]">Start Date</p>
                    <p className="text-lg font-semibold text-[#8B4513]">01/05/2023</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#A0522D]">Deadline</p>
                    <p className="text-lg font-semibold text-[#8B4513]">30/07/2023</p>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex space-x-10 items-center mb-2">
                    <p className="text-sm text-[#A0522D]">Team Members</p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="border-[#FFE4E1] text-[#8B4513] hover:bg-[#FFF0F5]">
                          Invite+
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-white border-[#FFE4E1]">
                        <DialogHeader>
                          <DialogTitle className="text-[#8B4513]">Invite User</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleInviteUser} className="space-y-4">
                          <Input
                            type="email"
                            placeholder="Enter email address"
                            value={inviteEmail}
                            onChange={(e) => setInviteEmail(e.target.value)}
                            className="bg-[#FFF5EE] text-[#8B4513] placeholder-[#A0522D] border-[#FFE4E1]"
                          />
                          <Button type="submit" className="w-full bg-[#FFB6C1] text-[#8B4513] hover:bg-[#FFC0CB]">
                            Send Invitation
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="flex space-x-2">
                    {teamMembers.map((member, index) => (
                      <Avatar key={index} className="bg-[#FFF0F5] text-[#8B4513]">
                        <AvatarFallback>{member}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-[#FFE4E1]">
              <CardHeader>
                <CardTitle className="text-[#8B4513] text-2xl">Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {['Todo', 'In Progress', 'Done'].map((status) => (
                    <div key={status} className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-[#8B4513]">{status}</h3>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" className="border-[#FFE4E1] text-[#8B4513] hover:bg-[#FFF0F5]">
                              + Create Issue
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="bg-white border-[#FFE4E1]">
                            <DialogHeader>
                              <DialogTitle className="text-[#8B4513]">Create New Issue</DialogTitle>
                            </DialogHeader>
                            <form onSubmit={handleCreateIssue} className="space-y-4">
                              <Input
                                placeholder="Issue title"
                                value={newIssue.title}
                                onChange={(e) => setNewIssue({ ...newIssue, title: e.target.value })}
                                className="bg-[#FFF5EE] text-[#8B4513] placeholder-[#A0522D] border-[#FFE4E1]"
                              />
                              <Textarea
                                placeholder="Issue description"
                                value={newIssue.description}
                                onChange={(e) => setNewIssue({ ...newIssue, description: e.target.value })}
                                className="bg-[#FFF5EE] text-[#8B4513] placeholder-[#A0522D] border-[#FFE4E1]"
                              />
                              <Button type="submit" className="w-full bg-[#FFB6C1] text-[#8B4513] hover:bg-[#FFC0CB]">
                                Create Issue
                              </Button>
                            </form>
                          </DialogContent>
                        </Dialog>
                      </div>
                      <div className="space-y-2">
                        {tasks.filter(task => task.status === status.toLowerCase().replace(' ', '')).map((task) => (
                          <div 
                            key={task.id} 
                            className="flex justify-between items-center p-4 rounded-lg bg-[#FFF0F5] text-[#8B4513] cursor-pointer hover:bg-[#FFE4E1]"
                            onClick={() => handleTaskClick(task)}
                          >
                            <span>{task.title}</span>
                            <Badge variant="outline" className="ml-2 bg-[#FFE4E1] text-[#8B4513]">
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
          <aside className={`lg:col-span-1 ${showChat ? 'flex' : 'hidden'} flex-col bg-white text-[#8B4513]`}>
            <Card className="flex-1 flex flex-col border-[#FFE4E1]">
              <CardHeader>
                <CardTitle className="text-[#8B4513]">Chat</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ScrollArea className="flex-1 overflow-auto">
                  <div className="space-y-4">
                    {chatMessages.map((message) => (
                      <div key={message.id} className={`flex ${message.sender === "Raam" ? 'justify-end' : 'justify-start'} space-x-2`}>
                        <div className={`p-2 rounded-lg ${message.sender === "Raam" ? 'bg-[#FFF0F5] text-[#8B4513]' : 'bg-[#FFE4E1] text-[#8B4513]'}`}>
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
                    className="bg-[#FFF5EE] text-[#8B4513] placeholder-[#A0522D] flex-1 border-[#FFE4E1]"
                  />
                  <Button type="submit" variant="outline" className="ml-2 border-[#FFE4E1] text-[#8B4513] hover:bg-[#FFF0F5]">
                    <Send className="w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
      {selectedTask && (
        <TaskDetailsModal
          isOpen={!!selectedTask}
          onClose={() => setSelectedTask(null)}
          task={selectedTask}
        />
      )}
    </div>
  )
}