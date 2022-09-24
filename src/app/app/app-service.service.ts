import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  file?:File;

  lien = 'http://localhost:3000/article';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http:HttpClient) { }

  downloadFile(data:any, filename='data') {
    let csvData = this.ConvertToCSV(data, ['name','age', 'average', 'approved', 'description']);
    console.log(csvData)
    let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
      dwldLink.setAttribute("target", "_blank");
    }
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", filename + ".csv");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }

  ConvertToCSV(objArray:any, headerList:any) {
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = 'S.No|';
    for (let index in headerList) {
      row += headerList[index] + ',';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';
    for (let i = 0; i < array.length; i++) {
      let line = (i+1)+'';
      for (let index in headerList) {
        let head = headerList[index];

        line += ',' + array[i][head];
      }
      str += line + '\r\n';
    }
    return str;
  }

  //array varibales to store csv data
  /*lines = []; //for headings
  linesR = []; // for rows
  //File upload function
  changeListener(files: FileList){
    console.log(files);
    if(files && files.length > 0) {
      let file: File = files.item(0);
      console.log(file.name);
      console.log(file.size);
      console.log(file.type);
      //File reader method
      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        let csv: any = reader.result;
        let allTextLines = [];
        allTextLines = csv.split(/\r|\n|\r/);

        //Table Headings
        let headers = allTextLines[0].split(';');
        let data = headers;
        let tarr = [];
        for (let j = 0; j < headers.length; j++) {
          tarr.push(data[j]);
        }
        //Pusd headings to array variable
        this.lines.push(tarr);


        // Table Rows
        let tarrR = [];

        let arrl = allTextLines.length;
        let rows = [];
        for(let i = 1; i < arrl; i++){
          rows.push(allTextLines[i].split(';'));

        }

        for (let j = 0; j < arrl; j++) {

          tarrR.push(rows[j]);

        }
        //Push rows to array variable
        this.linesR.push(tarrR);
      }
    }
  }*/

  getArticle():Observable<any>{
      return this.http.get("http://localhost:3000/article");
  }
}
