// import React from "react";
// import "./IndustrySolutions_List.css";
import ProductTop from '../components/ProductTop'
import taskprojectImage from '../assets/product/task_projects.jpg'
import taskprojectImage2 from '../assets/product/task_project2.jpg'
import taskprojectImage3 from '../assets/product/task_projects3.jpg'
import task4 from '../assets/product/tasks4.jpg'
import task5 from '../assets/product/task_5.jpg'
import task6 from '../assets/product/task_6.jpg'



const TaskProjectData={h:"Free task management software for your business",
  p:"Set tasks, manage deadlines, collect reports, track KPIs, and run projects from wherever you are.",
  img:taskprojectImage,
  h_2:"Your tasks. Your way",
  p_2:"Bitrix24 features all the popular task management tools as a part of a single platform – pick the ones you're most comfortable with and start getting work done together with your team.",
  img_2:taskprojectImage2,
  h_3:"Ideal fit for any team",
  p_3:"No matter what project management methodology you adhere to, Bitrix24 has got your needs covered. You can choose between Kanban board, Gantt chart, Scrum, calendar, or a simple list of tasks – whichever works best for your team.",
  img_3:taskprojectImage3,
  btn:"START A PRJECT IN BITRIX24",

   h_4:"AI-powered project management",
  p_4:"Our AI assistant CoPilot is indispensable when it comes to planning a project or creating a new task. Based on your prompt, CoPilot can easily come up with a brief and understandable task description or even turn it into a checklist.",
  img_4:task4,
  btn_1:"TRY COPILOT IN BITRIX24",

  
   h_5:"Task automation",
  p_5:"Bitrix24 allows you to automate a wide range of standard, routine operations like creating a task, changing a responsible person, task status or a stage in Kanban, sending a notification or email to a particular employee, and much more.",
  img_5:task5,
  btn_2:"AUTOMATE YOUR TASK",

  
   h_6:"More than just tasks & projects",
  p_6:"In addition to various task and project management tools, Bitrix24 features everything your team needs to collaborate and communicate efficiently: chat, video calls and conferencing, file storage, calendar, online documents, mobile app, work time tracking, CRM, and more.",
  img_6:task6
 

}

export default function TaskProjects() {
  return (

 <ProductTop data={TaskProjectData}/>
  );
}