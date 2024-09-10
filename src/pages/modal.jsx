import { useState } from 'react'
import { X, ChevronDown } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projectTypes = ["Full Stack", "Frontend", "Backend", "Mobile", "Data Science"]
const allTags = ["javascript", "react", "node", "express", "mongodb", "python", "django", "vue", "angular", "typescript"]

export default function Modal1() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTags, setSelectedTags] = useState([]);
  const [projectName, setProjectName] = useState("")
  const [projectDescription, setProjectDescription] = useState("")
  const [projectType, setProjectType] = useState("")

  const handleTagSelect = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(prev => prev.filter(t => t !== tag))
    } else {
      setSelectedTags(prev => [...prev, tag])
    }
  }

  const handleTagRemove = (tag) => {
    setSelectedTags(prev => prev.filter(t => t !== tag))
  }

  const handleCreateProject = () => {
    console.log({ projectName, projectDescription, projectType, selectedTags })
    // Aquí normalmente enviarías estos datos a tu backend
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#F0E6E6] text-[#8B4513] hover:bg-[#E6D8D8]">New Project</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-[#FFF5EE] border-[#FFE4E1] font-['Oswald',sans-serif]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-[#8B4513]">Create New Project</DialogTitle>
          <Button
            variant="ghost"
            className="absolute right-4 top-4 rounded-full p-0 w-6 h-6"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4 text-[#8B4513]" />
          </Button>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="space-y-2">
            <label htmlFor="projectName" className="text-sm font-medium text-[#8B4513]">Project Name</label>
            <Input
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Enter project name..."
              className="bg-white border-[#FFE4E1] text-[#8B4513] placeholder-[#D2B48C]"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="projectDescription" className="text-sm font-medium text-[#8B4513]">Project Description</label>
            <Textarea
              id="projectDescription"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              placeholder="Describe your project..."
              className="bg-white border-[#FFE4E1] text-[#8B4513] placeholder-[#D2B48C] min-h-[100px]"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="projectType" className="text-sm font-medium text-[#8B4513]">Project Type</label>
            <Select value={projectType} onValueChange={setProjectType}>
              <SelectTrigger id="projectType" className="bg-white border-[#FFE4E1] text-[#8B4513]">
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent className="bg-white border-[#FFE4E1] text-[#8B4513]">
                {projectTypes.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#8B4513]">Tags</label>
            <Select onValueChange={handleTagSelect}>
              <SelectTrigger className="bg-white border-[#FFE4E1] text-[#8B4513]">
                <SelectValue placeholder="Select tags" />
              </SelectTrigger>
              <SelectContent className="bg-white border-[#FFE4E1] text-[#8B4513]">
                {allTags.map((tag) => (
                  <SelectItem key={tag} value={tag}>
                    {tag}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedTags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-[#FFE4E1] text-[#8B4513] hover:bg-[#FFD5D5]"
                >
                  {tag}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-1 p-0 h-4 w-4"
                    onClick={() => handleTagRemove(tag)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <Button
          className="w-full bg-[#F0E6E6] text-[#8B4513] hover:bg-[#E6D8D8]"
          onClick={handleCreateProject}
        >
          Create Project
        </Button>
      </DialogContent>
    </Dialog>
  )
}