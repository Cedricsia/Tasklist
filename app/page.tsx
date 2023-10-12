"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import AddTask from "@/components/AddTask";
import { ITasks } from "@types";
import NoTask from "@components/NoTask";
import Task from "@components/Task";
import Loading from "@components/Loading";
import { error } from "console";

export default function Home() {
  const [task, seTtask] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [allTask, setAllTask] = useState([]);
  console.log(allTask);

  const handleCreateTask = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/task/new", {
        method: "POST",
        body: JSON.stringify({
          task: task,
        }),
      });
      if (response.ok) {
        seTtask("");
        fetchTask();
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const fetchTask = async () => {
    try {
      const response = await fetch("/api/task/all");
      const data = await response.json();
      setAllTask(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  const handleDeleteTask = async (id: string) => {
    try {
      const response = await fetch(`api/task/delete/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setAllTask((prevTasks) =>
          prevTasks.filter((task: ITasks) => task._id !== id)
        );
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCompleteTask = async (id: string) => {
    try {
      const response = await fetch(`api/task/completed/${id}`, {
        method: "PATCH",
      });
      if (response.ok) {
        await fetchTask();
      } else {
        console.log("Error comlpeted task ");
      }
    } catch (error) {
      console.log("error completed task", error);
    }
  };
  return (
    <div>
      <Header />
      <AddTask
        task={task}
        setTask={seTtask}
        handleCreateTask={handleCreateTask}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col p-2">
          {allTask.length > 0 ? (
            allTask.map((individualTask: ITasks) => (
              <Task
                key={individualTask._id}
                individualTask={individualTask}
                handleCompleteTask={handleCompleteTask}
                handleDeleteTask={handleDeleteTask}
              />
            ))
          ) : (
            <NoTask />
          )}
        </div>
      )}
    </div>
  );
}
