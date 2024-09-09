import React from 'react';
import { UserCircle2, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export default function HomeP() {
  const categories = ["All", "Full Stack", "Frontend", "Backend"];
  const tags = [
    { name: "All", icon: () => <span className="text-gray-500">🏷️</span> },
    { name: "React", icon: () => <span className="text-blue-500">⚛️</span> },
    { name: "Next.js", icon: () => <span className="font-bold text-black">N</span> },
    { name: "Spring Boot", icon: () => <span className="text-green-500">🍃</span> },
    { name: "Angular", icon: () => <span className="text-red-500">🅰️</span> },
    { name: "Python", icon: () => <span className="text-yellow-500">🐍</span> },
    { name: "MongoDB", icon: () => <span className="text-green-600">🍃</span> },
    { name: "MySQL", icon: () => <span className="text-blue-600">🐬</span> },
  ];

  const projects = [
    { title: "Create Ecommerce Multivendor Project", category: "Full Stack", description: "Create platform for multiple seller, multiple seller can register them self and sell their project", tags: ["JavaScript", "React", "Spring Boot", "Angular", "Python"] },
    { title: "Create Coffee Shop", category: "Backend", description: "Some description", tags: ["React", "Angular"] },
    { title: "Create Realestate Website", category: "Full Stack", description: "User can sell and buy properties", tags: ["JavaScript", "React", "Django", "Angular", "Spring Boot"] },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-oswald">
      <header className="sticky top-0 z-10 w-full border-b border-gray-200 bg-white shadow-md">
        <nav className="container mx-auto flex items-center justify-between h-16 px-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-900">ProjeX Manager</h1>
            <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-100">
              <Plus className="w-4 h-4 mr-2" />
              New Project
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="text-gray-700 hover:text-gray-900">
            <UserCircle2 className="w-6 h-6" />
          </Button>
        </nav>
      </header>
      <main className="flex flex-1 gap-8 p-4 container mx-auto">
        <section className="w-full md:w-1/4">
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-900">Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2 text-gray-700">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox id={`category-${category}`} />
                      <label htmlFor={`category-${category}`} className="text-gray-600">{category}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-700">Tags</h3>
                <div className="space-y-2">
                  {tags.map((tag) => (
                    <div key={tag.name} className="flex items-center space-x-2">
                      <Checkbox id={`tag-${tag.name}`} />
                      <label htmlFor={`tag-${tag.name}`} className="text-gray-600 flex items-center">
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
          <Card className="bg-white border-gray-200">
            <CardContent className="pt-6">
              <Input
                type="search"
                placeholder="Search project..."
                className="w-full bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500"
                icon={<Search className="w-4 h-4 text-gray-500" />}
              />
            </CardContent>
          </Card>
          <div className="space-y-4 mt-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span className="text-gray-900">{project.title}</span>
                    <span className="text-sm font-normal text-gray-500">{project.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => {
                      const tagInfo = tags.find(t => t.name === tag) || tags[0];
                      return (
                        <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs flex items-center">
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
