import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [CommonModule] 
})
export class AppComponent {
  title = 'Student List';
  loading = false;
  data: any[] = [];
  studentForm!: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.studentForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      age: ['', Validators.required],
      major: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  addStudent() {
    if (this.studentForm.valid) {
      const newStudent = this.studentForm.value;
      console.log('Adding student:', newStudent);
      this.http.post('http://localhost:9192/api/admin/1/studentId/4', newStudent).subscribe({
        next: (response: any) => {
          console.log('Student added successfully:', response);
          // Refresh the data after adding a new student
          this.fetchData();
          // Clear the form after adding
          this.studentForm.reset();
        },
        error: (err) => {
          console.error('Error adding student:', err);
        },
      });
    } else {
      console.error('Form is invalid');
    }
  }

  fetchData() {
    this.http.get('http://localhost:9192/api/admin/1/students').subscribe({
      next: (response: any) => {
        this.data = response.data; // Assign the fetched data to the property
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      },
    });
  }

  updateStudent(updatedStudent: any) {
    this.http.put(`http://localhost:9192/api/admin/${updatedStudent.id}`, updatedStudent).subscribe({
      next: (response: any) => {
        console.log('Student updated successfully:', response);
        // Refresh the data after updating a student
        this.fetchData();
      },
      error: (err) => {
        console.error('Error updating student:', err);
      },
    });
  }

  deleteStudent(studentId: number) {
    this.http.delete(`http://localhost:9192/api/admin/1/studentId/${studentId}`).subscribe({
      next: (response: any) => {
        console.log('Student deleted successfully:', response);
        // Refresh the data after deleting a student
        this.fetchData();
      },
      error: (err) => {
        console.error('Error deleting student:', err);
      },
    });
  }
}
