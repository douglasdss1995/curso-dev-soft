import { Injectable } from '@angular/core';
import {apiUrl} from '../constants/api';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url: string = `${apiUrl}/users`;

  constructor(private http: HttpClient) {
  }

  getById(id: string): Observable<Task> {
    return this.http.get<Task>(`${this.url}/${id}`);
  }

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.url}`);
  }

  create(obj: Task): Observable<Task> {
    return this.http.post<Task>(`${this.url}`, obj);
  }

  updateItem(id: string, data: Task): Observable<Task> {
    return this.http.put<Task>(`${this.url}/${id}`, data);
  }

  delete(id: string): Observable<Object> {
    return this.http.delete(`${this.url}/${id}`);
  }
}

