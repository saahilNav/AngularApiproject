import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  getDetails(id:any):Observable<any> {
    console.log("Id is" , id.id);
    return this.http.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&key=AIzaSyCjBRPz2l14dM4d0omghFAWBgvc0qjjNGY&id=${ id.id }`);
  }




  search(term: any): Observable<any>{
    return this.http
      .get("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&contentDetails&statistics&key=AIzaSyCjBRPz2l14dM4d0omghFAWBgvc0qjjNGY&q="+term)
      
  }
   newSearchObserable(term):Observable<any[]>{
  return forkJoin([ 
    this.http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&contentDetails&statistics&key=AIzaSyCjBRPz2l14dM4d0omghFAWBgvc0qjjNGY&q="+term),
    
     this.http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&contentDetails&statistics&key=AIzaSyCjBRPz2l14dM4d0omghFAWBgvc0qjjNGY&maxResults=6&q="+term)
  ])
  }

  newSearchPromiseterm(term:any):Promise<any[]>{
  try {
    const response1=  this.http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&contentDetails&statistics&key=AIzaSyCjBRPz2l14dM4d0omghFAWBgvc0qjjNGY&q="+term).toPromise();
    const response2 =  this.http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&contentDetails&statistics&key=AIzaSyCjBRPz2l14dM4d0omghFAWBgvc0qjjNGY&maxResults=6&q="+term).toPromise();
   console.log("this is await response 1",response1);
   console.log("this is await response 2",response2);
   let res=  Promise.all([response1,response2]); 
   console.log("this is await result",res)

     return res;
  }
  catch (err) {
    console.log('fetch failed', err);
  }
     
}   
}
