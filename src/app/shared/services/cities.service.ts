import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Subscriber } from 'rxjs';
import { City } from '../components/Interfaces/responseCity';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private httpClient: HttpClient) { }
  //////////////////////////////////////
  //          Cities                 ///
  /////////////////////////////////////

  //* Obtener Areas
  getCity() {
    let url = environment.apiApp;
    return this.httpClient.get<City>(url).pipe(map(response => {
      return response;
    }));
  }
}



