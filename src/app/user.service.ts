import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class UserService {
    users: any[] = [];
    URL = 'http://localhost:8082/apiUser';
    constructor(private http: HttpClient) {

    }
    envoyer(user: any) {
        return this.http.post(this.URL + '/envoyer', user, { observe: 'response' });
    }

    findByEmail(email: any) {

        return this.http.post(this.URL + '/redirect', email);
    }

}
