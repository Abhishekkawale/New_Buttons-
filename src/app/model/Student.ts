import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group } from './group';

@Injectable({
  providedIn: 'root'
})
export class Student {
  private baseUrl = 'http://localhost:9192/api/admin/1/students';

  constructor(private http: HttpClient) { }

  getAllStudents(adminId: number): Observable<Group[]> {
    return this.http.get<Group[]>(`${this.baseUrl}/${adminId}/students`);
  }
}
