import { Component, OnInit } from '@angular/core';
import { Group } from './model/group'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-list',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class StudentListComponent implements OnInit {
  title: string = 'Student List';
  loading: boolean = false;
  groups: Group[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPrintedContent();
  }

  getPrintedContent(): void {
    this.loading = true;
    this.http.get<Group[]>('http://localhost:9192/api/admin/1/students')
      .subscribe(data => {
        this.groups = data;
        this.loading = false;
      }, error => {
        this.loading = false;
        console.error('Error fetching data:', error);
      });
  }
}
