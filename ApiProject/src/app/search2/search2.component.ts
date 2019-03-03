import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search2',
  templateUrl: './search2.component.html',
  styleUrls: ['./search2.component.scss']
})
export class Search2Component implements OnInit {

  public data: any = [];
public dataList: any[] = [];
 
  
  queryField: FormControl = new FormControl();
  constructor(private interservice:ApiServiceService , private router: Router) { }

  ngOnInit() {
  
  this.queryField.valueChanges.subscribe((queryField) => this.interservice.newSearchPromiseterm(queryField)
  .then(response => {
    this.data = response;
    console.log(this.data);
  }));
  }
}
