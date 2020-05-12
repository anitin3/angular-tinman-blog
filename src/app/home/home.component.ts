import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
blogs=[];
  constructor() { }

  ngOnInit() {
     this.blogs=JSON.parse(localStorage.getItem("blogs"));
  }
  
  removeBlog(blog){
   if(confirm("Are you sure to delete ? ")) 
   {
    let index=this.blogs.indexOf(blog);
this.blogs.splice(index,1);
 localStorage.setItem("blogs",JSON.stringify(this.blogs));
   }
  }


}