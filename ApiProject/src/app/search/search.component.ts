import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

public data: any = [];
public dataList: any[] = [];
 public response1:Observable<any[]>;
 
  
  queryField: FormControl = new FormControl();
  constructor(private interservice:ApiServiceService , private router: Router) { }

     ngOnInit() {
    
     try {
      this.queryField.valueChanges.subscribe(async(queryField) => {
        console.log("console2");
        this.data = await  this.interservice.newSearchPromiseterm(queryField);
        console.log("console 3", this.data)
      });
      
    } 
      catch(e) {
      console.log(e);
    }
     this.getData();
     
 }
  getData(){
    // this.queryField.valueChanges.subscribe((queryField) =>this.response1= this.interservice.newSearchObserable(queryField));  

  }

  // public prepareList() {
  //   this.data.forEach((element) => {
  //       element.items.forEach((element) => {
  //         this.dataList.push(element);
  //       });      
  //   });
  // }

  gotoDetail(obj1: any, ) {

    console.log(obj1);
    // this.interservice.valueChange.next(obj1);
    this.router.navigate(['vedioDetails', obj1.id])
    console.log("this id", obj1.id)
  }

  }