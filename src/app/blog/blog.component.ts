import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
title: string;
content:string;
blogs=[];
  constructor() { }

  ngOnInit() {
  }
addBlog(){
  let blog={'title':this.title,'content':this.content};
  if(localStorage.getItem("blogs")){
    this.blogs=JSON.parse(localStorage.getItem("blogs"));
  }
  this.blogs.push(blog);
  localStorage.setItem("blogs",JSON.stringify(this.blogs));

};
  
}