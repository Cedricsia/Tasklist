import { AddTaskProps } from "@types";

const AddTask = ({ task, setTask, handleCreateTask }: AddTaskProps) => {
  return (
    <div className="pt-8 pl-8 pr-8 pb-4 w-full flex items-center gap-1">
      <input
        type="text"
        placeholder="Nouvelle tache..."
        className="w-full h-12 pl-2"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <button type="button" className=" btn bg-blue-400 text-white text-2xl ">
        +
      </button>
    </div>
  );
};

export default AddTask;
