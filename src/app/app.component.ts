import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { addTask, toggleTask, removeTask } from "./task.actions";

export interface ITask {
  title: string;
  isCompleted: boolean;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  tasks$: Observable<ITask>;
  newTaskTitle = "";

  constructor(private store: Store<{ tasks: ITask[] }>) {
    this.tasks$ = store.pipe(select("tasks"));
  }

  ngOnInit() {}

  onSubmit() {
    if (this.newTaskTitle && this.newTaskTitle.trim()) {
      this.store.dispatch(addTask({ title: this.newTaskTitle }));
      this.newTaskTitle = "";
    }
  }

  onToggle(task: ITask) {
    this.store.dispatch(toggleTask({ title: task.title }));
  }

  onRemove(task: ITask) {
    this.store.dispatch(removeTask({ title: task.title }));
  }
}
