// import React from "react";
// import "./IndustrySolutions_List.css";
import ProductTop from '../components/ProductTop'
import taskprojectImage from '../assets/product/task_projects.jpg'
import taskprojectImage2 from '../assets/product/task_project2.jpg'
import taskprojectImage3 from '../assets/product/task_projects3.jpg'

const TaskProjectData={h:"Free task management software for your business",
  p:"Set tasks, manage deadlines, collect reports, track KPIs, and run projects from wherever you are.",
  img:taskprojectImage,
  h_2:"Your tasks. Your way",
  p_2:"Bitrix24 features all the popular task management tools as a part of a single platform – pick the ones you're most comfortable with and start getting work done together with your team.",
  img_2:taskprojectImage2,
  h_3:"Ideal fit for any team",
  p_3:"No matter what project management methodology you adhere to, Bitrix24 has got your needs covered. You can choose between Kanban board, Gantt chart, Scrum, calendar, or a simple list of tasks – whichever works best for your team.",
  img_3:taskprojectImage3,
  btn:"START A PRJECT IN BITRIX24"
}

export default function TaskProjects() {
  return (

 <ProductTop data={TaskProjectData}/>
  );
}