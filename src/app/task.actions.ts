import { createAction, props } from "@ngrx/store";

export const addTask = createAction("ADD TASK", props<{ title: string }>());
export const removeTask = createAction(
  "REMOVE TASK",
  props<{ title: string }>()
);
export const toggleTask = createAction(
  "TOGGLE TASK",
  props<{ title: string }>()
);
