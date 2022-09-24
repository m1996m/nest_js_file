import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UplaodService} from "./uplaod.service";


@Component({
  selector: 'app-uplaod',
  templateUrl: './uplaod.component.html',
  styleUrls: ['./uplaod.component.css']
})
export class UplaodComponent implements OnInit {

  private file: any;
  picture = {originalname: "", filename: "", mimetype: ""};
  constructor(private readonly  service:UplaodService) { }

  ngOnInit(): void {

  }

  onFileChange(event:any) {
    this.file = event.target?.files[0];
    //console.log(this.file);
    /*const reader = new FileReader();
    reader.onload = (e: any) => {
      this.picture.originalname = this.file.name;
      this.picture.filename = reader.result as string;
      this.picture.mimetype = this.file.name.substr(this.file.name.lastIndexOf('.') + 1);
    };
    reader.readAsDataURL(this.file);
    //console.log(this.file);

     */
  }
  uplaodFile(form:any){
    let formData = new FormData();
    formData.append('image',this.file,this.file?.name);
   this.service.upload(formData).subscribe((data:any)=>{
      console.log(data);
    });
  }

}
