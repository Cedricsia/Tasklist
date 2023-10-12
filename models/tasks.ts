import { Schema, model, models } from "mongoose";
import { ITasks } from "@/types";

const taskSchema = new Schema<ITasks>({
  task: {
    type: String,
    required: [true, "task is required"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
//cree un model mongoose base  sur taskschemas elle utilise models .task pour verifier si ca existe , si oui ca le recupere sinon il cree un nouveaux model task avec le tassk schemas
const Task = models.Task || model<ITasks>("Task", taskSchema);

export default Task;
