import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];
  /*selectedTask: Task;*/

  constructor(private taskService: TaskService) { }

  getTasks(): void{
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  ngOnInit() {
    this.getTasks();
  }

  /*onSelect(task: Task): void{
    this.selectedTask = task;
  }*/

}
