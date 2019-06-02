import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { debounceTime } from 'rxjs/operators';
import {pipe} from 'rxjs'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  pickedCode: String;
  searchResult: any;
  selectedCode: String;
  countryName: String;
  allCountries: any;
  searchCode: String;
  countryFlag: String;
  countryLang: Array<any>;
  neighbourCountryCodes: Array<String>
  neighbourCountries: any;
  dispalyDetails: Boolean = false;
  dispalyCountryList: Boolean = false;
  constructor(private ss: SearchService) { }
  
  ngOnInit() {
    this.getCountryCodes();
    this.selectedCode="IND";
  }

  search(event,){
    this.dispalyDetails = false;
    this.dispalyCountryList = true;
    this.searchCode = event.target.value;
    this.countryDetails(event.target.value);
  }

  getCountryCodes(){
    this.ss.getAllCountries().subscribe((res) => this.allCountries = res);
  }
  selectCountry(event){
    this.countryDetails(event.target.attributes["data-countrycode"].value);
    this.dispalyCountryList = false;
    this.selectedCode = event.target.attributes["data-countrycode"].value;
  }
  countryDetails(code){
    this.ss.getCountries(code).pipe(debounceTime(10000)).subscribe((res) => {
      this.searchResult = res;
      this.countryName = res.name;
      this.countryFlag = res.flag;
      this.countryLang = res.languages;
      this.neighbourCountryCodes = res.borders;
      this.dispalyDetails = true;
      if(this.neighbourCountryCodes.length){
          let codes = this.neighbourCountryCodes.join(';');
            this.ss.getCountryDetails(codes).subscribe((res) => {
              this.neighbourCountries = res;
            });          
      }
    });
  }
}
