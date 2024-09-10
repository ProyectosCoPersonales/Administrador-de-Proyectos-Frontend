import React from 'react';
import { UserCircle2, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export default function HomeP() {
  const categories = ["All", "Full Stack", "Frontend", "Backend"];
  const tags = [
    { name: "All", icon: () => <span>🏷️</span> },
    { name: "React", icon: () => <span>⚛️</span> },
    { name: "Next.js", icon: () => <span className="font-bold">N</span> },
    { name: "Spring Boot", icon: () => <span>🍃</span> },
    { name: "Angular", icon: () => <span>🅰️</span> },
    { name: "Python", icon: () => <span>🐍</span> },
    { name: "MongoDB", icon: () => <span>🍃</span> },
    { name: "MySQL", icon: () => <span>🐬</span> },
  ];

  const projects = [
    { title: "Create Ecommerce Multivendor Project", category: "Full Stack", description: "Create platform for multiple seller, multiple seller can register them self and sell their project", tags: ["JavaScript", "React", "Spring Boot", "Angular", "Python"] },
    { title: "Create Coffee Shop", category: "Backend", description: "Some description", tags: ["React", "Angular"] },
    { title: "Create Realestate Website", category: "Full Stack", description: "User can sell and buy properties", tags: ["JavaScript", "React", "Django", "Angular", "Spring Boot"] },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FFF5EE] text-[#8B4513] font-['Oswald',sans-serif]">
      <header className="sticky top-0 z-10 w-full border-b border-[#FFE4E1] bg-white shadow-md">
        <nav className="container mx-auto flex items-center justify-between h-16 px-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-[#8B4513]">ProjeX Manager</h1>
            <Button variant="outline" size="sm" className="border-[#FFE4E1] text-[#8B4513] hover:bg-[#FFF0F5]">
              <Plus className="w-4 h-4 mr-2" />
              New Project
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="text-[#8B4513] hover:text-[#A0522D]">
            <UserCircle2 className="w-6 h-6" />
          </Button>
        </nav>
      </header>
      <main className="flex flex-1 gap-8 p-4 container mx-auto">
        <section className="w-full md:w-1/4">
          <Card className="bg-white border-[#FFE4E1]">
            <CardHeader>
              <CardTitle className="text-[#8B4513]">Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2 text-[#A0522D]">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox id={`category-${category}`} />
                      <label htmlFor={`category-${category}`} className="text-[#8B4513]">{category}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-[#A0522D]">Tags</h3>
                <div className="space-y-2">
                  {tags.map((tag) => (
                    <div key={tag.name} className="flex items-center space-x-2">
                      <Checkbox id={`tag-${tag.name}`} />
                      <label htmlFor={`tag-${tag.name}`} className="text-[#8B4513] flex items-center">
                        <span className="w-6 h-6 flex items-center justify-center mr-2">
                          <tag.icon />
                        </span>
                        {tag.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        <section className="w-full md:w-3/4">
          <Card className="bg-white border-[#FFE4E1]">
            <CardContent className="pt-6">
              <Input
                type="search"
                placeholder="Search project..."
                className="w-full bg-[#FFF5EE] border-[#FFE4E1] text-[#8B4513] placeholder-[#D2B48C]"
                icon={<Search className="w-4 h-4 text-[#D2B48C]" />}
              />
            </CardContent>
          </Card>
          <div className="space-y-4 mt-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white border-[#FFE4E1] hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span className="text-[#8B4513]">{project.title}</span>
                    <span className="text-sm font-normal text-[#A0522D]">{project.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#8B4513] mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => {
                      const tagInfo = tags.find(t => t.name === tag) || tags[0];
                      return (
                        <span key={tag} className="bg-[#FFF0F5] text-[#8B4513] px-2 py-1 rounded-full text-xs flex items-center">
                          <tagInfo.icon />
                          <span className="ml-1">{tag}</span>
                        </span>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}