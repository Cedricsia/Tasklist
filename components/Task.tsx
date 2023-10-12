import { TaskProps } from "@types";
const Task = ({
  individualTask,
  handleCompleteTask,
  handleDeleteTask,
}: TaskProps) => {
  return (
    <div>
      <div className="p-4 mb-2 flex items-center border">
        {individualTask.completed ? (
          <p className="flex-grow line-through">{individualTask.task}</p>
        ) : (
          <p className="flex-grow ">{individualTask.task}</p>
        )}
        <div>
          {individualTask.completed ? (
            <button type="button" className="btn btn-disabled ml-4">
              ✅
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-success"
              onClick={() => handleCompleteTask(individualTask._id)}
            >
              ✅
            </button>
          )}
          <button
            type="button"
            className="btn btn-error ml-4"
            onClick={() => handleDeleteTask(individualTask._id)}
          >
            ❌
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
