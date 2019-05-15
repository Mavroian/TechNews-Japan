import { Component, OnInit } from '@angular/core';
import {HttpClient , HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  private apiUrl = 'https://newsapi.org/v2/top-headlines';
  data:{}
  constructor(private http: HttpClient) { 
    this.getData();
  }
  getData(){
    let headers = new HttpHeaders({
      'X-Api-Key': "50f8f4a6e7fd4986a55c9e1a0166097a"
      
    })
    let httpParams = new HttpParams()
    const myObject: any = { country: 'jp', category:'technology'};
    Object.keys(myObject).forEach(key=>{
      httpParams = httpParams.append(key,myObject[key])
    })
    
    const options = { params: httpParams, headers: headers };

    return this.http.get(this.apiUrl,options).subscribe(data=>{
      
      this.data = data["articles"]
      console.log(this.data)
      
    })
  }
  ngOnInit() {
  }

}
