import { TasksService } from './../../services/tasks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks = []
  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksService.getTasks()
    .subscribe(
      res => {
        console.log(res)
        this.tasks = res;
      },
      err => console.log(err)
    )
  }

}
