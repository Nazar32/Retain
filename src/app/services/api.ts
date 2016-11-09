import { Injectable } from '@angular/core';
import { Headers, Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {
    headers: Headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });

    api_url: string = 'http://localhost:3500';

    constructor(private http: Http) {

    }

    private getJson(response: Response) {
        return response.json;
    }

    private checkForError(response: Response): Response {
        if (response.status >= 200 && response.status < 300) {
            return response;
        }
        else {
            const error = new Error(response.statusText);
            error['response'] = response;
            console.log(error);
            throw error;
        }
    }

    get(path:string): Observable<any> {
        return this.http.get('${this.api_url}${path}', this.headers)
        .map(this.checkForError)
        .catch(err => Observable.throw(err))
        .map(this.getJson)
    }

    post(path: string, body): Observable<any> {
        return this.http.post(
            '${this.api_url}${path}',
            JSON.stringify(body),
            {headers: this.headers}
        )
        .map(this.checkForError)
        .catch(err => Observable.throw(err))
        .map(this.getJson)
    }

    delete(path:string): Observable<any> {
        return this.http.delete('${this.api_url}${path}', this.headers)
        .map(this.checkForError)
        .catch(err => Observable.throw(err))
        .map(this.getJson)
    }
}