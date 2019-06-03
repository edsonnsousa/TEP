import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TaskService }  from '../task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})

export class TaskDetailsComponent implements OnInit {

  /*@Input()*/ task: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location) { }

  ngOnInit() {
    this.getTask();
  }

  getTask(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(id).subscribe(task => this.task = task);
  }

  goBack(): void {
    this.location.back();
  }
}
