import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.css']
})
export class BookformComponent implements OnInit {

  @Output() newbook = new EventEmitter();

  books: { title: string, author: string, releasedate: string, keyword?: string, imgsrc: string }[] = [];
  images = [
    '../assets/img/js1.png',
    '../assets/img/js2.png',
    '../assets/img/js3.png',
    '../assets/img/js4.png',
    '../assets/img/js5.png',
    '../assets/img/js6.png'
  ];

  bookform: FormGroup;

  constructor() { }

  getRandomImage() {
    return this.images[Math.floor(Math.random() * this.images.length)];
  }

  onBookSave() {
    let values = this.bookform.value;
    values.imgsrc = this.getRandomImage();
    this.books.push(values);
    this.bookform.reset();
    // this.newbook.emit(this.books);
    console.log(this.books);
  }

  ngOnInit() {
    this.bookform = new FormGroup({
      "title": new FormControl(null),
      "author": new FormControl(),
      "date": new FormControl(null),
      "keywords": new FormControl(null)
    });
  }

}
