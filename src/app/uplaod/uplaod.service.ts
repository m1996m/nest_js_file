import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UplaodService {

  constructor(private http:HttpClient) { }
  public upload(file:any){
    return this.http.post('http://localhost:3000/photos/upload',file);
  }
}
