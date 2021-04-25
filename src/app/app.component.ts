import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks = [];
  newTask;

  addToList() {
    this.tasks.push(this.newTask);
    this.newTask = '';
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
  }
}
