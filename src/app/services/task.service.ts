import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'
import {TASKS} from '../mock-tasks';
import {Task} from '../Task';


@Injectable({   
  providedIn: 'root'
})
export class TaskService {
  TaskService: Task[];

  constructor() { }

  getTask(): Observable<Task[]>{
    const tasks = of(TASKS)
    return tasks;
  }

}
