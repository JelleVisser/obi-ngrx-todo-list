import { createReducer, on } from "@ngrx/store";
import { addTask, removeTask, toggleTask } from "./task.actions";
import { ITask } from "./app.component";

export const initialState: ITask[] = [];

export const taskReducer = createReducer(
  initialState,
  on(addTask, (state, task: { title: string }) => {
    return [...state, { title: task.title, isCompleted: false }];
  }),
  on(removeTask, (state, task: { title: string }) => {
    return [...state.filter(t => t.title !== task.title)];
  }),
  on(toggleTask, (state, task: { title: string }) => {
    // This logic would be better done with some immutable library
    const newState: ITask[] = JSON.parse(JSON.stringify(state));
    const foundTask = newState.find(t => t.title === task.title);
    if (foundTask) {
      foundTask.isCompleted = !foundTask.isCompleted;
    }

    return [...newState];
  })
);
