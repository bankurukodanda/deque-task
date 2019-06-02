import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) { }
  getCountries = function(code){
    console.log(code);
    return this.http.get(environment.endpoint.countriesFromCode+"?code="+code);
  }
  getAllCountries(){
    return this.http.get(environment.endpoint.allCountries);
  }
  getCountryDetails(codes){
    return this.http.get(environment.endpoint.countryDetails+"?codes="+ codes);
  }
}
