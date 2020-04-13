import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        let config:any;
        return this.http.get<User[]>(`${config}api/users`);
    }

    register(user: User) {
        let config:any;
        return this.http.post(`${config}api/users/register`, user);
    }

    delete(id: number) {
        let config:any;
        return this.http.delete(`${config}api/users/${id}`);
    }
}