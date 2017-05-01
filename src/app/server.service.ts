import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServerService {

  constructor(private http: Http) { }

  postServers(servers) {
    return this.http.post('https://mastercard-session.firebaseio.com/data.json', servers);
  }

}
