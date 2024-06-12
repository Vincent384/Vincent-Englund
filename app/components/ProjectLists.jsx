'use client'
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { db } from "@/firebase.confg";
import { Button } from "@/components/ui/button";

export const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projectsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-5">
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col items-center justify-center border-2 rounded-xl border-slate-300 w-full aspect-video p-5">
          <Link href={`/project/${project.id}`}>  
          <Image className="w-full h-full object-cover cursor-pointer hover:opacity-60 transition-opacity"
            src={project.Images[0]}
            width={200}
            height={200}
            alt={project.title}
          />
          </Link>

          <h2 className="m-2 text-lg text-center">{project.title}</h2>
          <p className="">{project.description.slice(0,50) + '...'}</p>
          <Link href={`/project/${project.id}`}>
            <Button className='border border-slate-400 bg-slate-500 container mt-5 hover:bg-slate-400 transition-colors duration-500 hover:text-white'>View Project</Button>
          </Link>
        </div>
      ))}
    </div>
  );
};