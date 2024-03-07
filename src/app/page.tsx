"use client";

import { Card } from "@/components/card";
import { addTask, deleteTask, getTasks, updateTask } from "@/utils/data";
import { set } from "date-fns";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ITodo {
  id?: number;
  title?: string;
  isComplete? : boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [newTask, setNewTask] = useState<ITodo>({});
  const [rawData, setRawData] = useState<any>({}); 
  const [search, setSearch] = useState<string>("");

  const getData = () => {
    getTasks().then((res: any) => {
      setTodos(res.data);
      setRawData(res.data);
    });
  }


  const handleAdd = () => {
    console.log("Add");

    addTask(newTask).then((res: any) => {
      if (res.ok) {
        getData();
      }
    });
  };

  const handleDelete = (id:string) => {
    deleteTask(id).then((res: any) => {
      if (res.ok) {
        getData();
      }
    });
  };

  const handleComplete = (id:string,data:ITodo) => {
    updateTask(id,data).then((res: any) => {
      if (res.ok) {
        getData();
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className=" w-full h-14 bg-gray-600 p-4 mb-4">
        <span className="text-white">To-do-APP</span>
      </div>

      <div className="container m-auto">
        <h1 className="mb-4">Welcome to the todo app</h1>
        <div className="flex space-x-4 mb-4">
          <input
            onChange={(e) => {
              setSearch(e.target.value);
              setTodos(rawData?.filter((item: any) => item?.title.includes(search)));
            }}
            className="p-2  h-12 w-56 border rounded-lg "
            type="text"
            placeholder="Search"
          />
          <input
            onChange={(e) => {
              setNewTask({...newTask, title: e.target.value });
            }}
            className="p-2 h-12 w-96 border rounded-lg "
            type="text"
            placeholder="enter new task content"
          />
          <button
            onClick={handleAdd}
            className="p-2 bg-green-400 rounded-lg text-white "
          >
            Add New
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {todos.map(({ title,id,isComplete }:any) => (
            <Card onComplete={()=>handleComplete(id,{title,isComplete:true})} onDelete={()=>handleDelete(id)} isComplete={isComplete} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
}
