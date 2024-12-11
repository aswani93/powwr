import { Routes } from '@angular/router';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';
import { Task4Component } from './task4/task4.component';

export const PagesRoutes: Routes = [
  {
    path: 'task1',
    component: Task1Component,
    data: {
      title: 'Task 1',

    },
  },
  {
    path: 'task2',
    component: Task2Component,
    data: {
      title: 'Task 2',
    },
  },
  {
    path: 'task3',
    component: Task3Component,
    data: {
      title: 'Task 3',
    },
  },
  {
    path: 'task4',
    component: Task4Component,
    data: {
      title: 'Task 4',
      breadCrump: [{label: 'My deals', url: 'tasks/task3'},{label: 'New tender'}],
    },
  },
];
