import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getRoles() {
    return this.http.get<any>('http://localhost:3000/roles').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  updateRole(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/roles/' + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  getPrivileges() {
    return this.http.get<any>('http://localhost:3000/privileges').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  addRole(data: any) {
    return this.http.post<any>('http://localhost:3000/roles', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  addGroup(data: any) {
    return this.http.post<any>('http://localhost:3000/groupes', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  getGroups() {
    return this.http.get<any>('http://localhost:3000/groupes').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateGroup(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/groupes/' + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  addUser(data: any) {
    return this.http.post<any>('http://localhost:3000/users', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getUsers() {
    return this.http.get<any>('http://localhost:3000/users').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateUser(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/users/' + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteUser(id: number) {
    return this.http.delete<any>('http://localhost:3000/users/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
