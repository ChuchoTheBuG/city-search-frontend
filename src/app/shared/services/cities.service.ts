import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { City } from '../components/Interfaces/responseCity';
import * as moment from 'moment';
import 'moment/locale/es';

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
  getCity(city: string) {
    let url = environment.apiApp;
    const params = new HttpParams()
      .set("q", city)
      .set("appid", environment.apiToken)
      .set("lang","es")
    return this.httpClient.get<City>(url,{params}).pipe(map(response => {
      return response;
    }));
  }
}



