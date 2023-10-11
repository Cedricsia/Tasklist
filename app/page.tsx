"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import AddTask from "@/components/AddTask";

export default function Home() {
  const [task, seTtask] = useState("");
  const handleCreateTask = async () => {};
  return (
    <div>
      <Header />
      <AddTask
        task={task}
        setTask={seTtask}
        handleCreateTask={handleCreateTask}
      />
    </div>
  );
}
