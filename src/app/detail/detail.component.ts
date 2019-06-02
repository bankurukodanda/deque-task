import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DetailService } from "./detail.service";
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  code: String;
  details: any;
  constructor(private route: ActivatedRoute, private ds: DetailService) { }

  ngOnInit() {
    this.code = this.route.snapshot.paramMap.get("ccode")
    if(this.code){
      this.getDetails(this.code);
    }
  }

  getDetails(code){
    if(code){
      this.ds.getDetails(code).subscribe((res)=> this.details= res[0])
    }
  }

}
