import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.css']
})
export class BookformComponent implements OnInit {

  @Output() newbook = new EventEmitter();

  forbiddenTitle = ['html', 'css'];

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

  formnotvalid = false;

  constructor() { }

  getRandomImage() {
    return this.images[Math.floor(Math.random() * this.images.length)];
  }

  onBookSave() {
    let values = this.bookform.value;
    values.imgsrc = this.getRandomImage();
    this.books.push(values);
    // this.bookform.reset();
    // this.newbook.emit(this.books);
    console.log(this.bookform);
  }

  ngOnInit() {
    this.bookform = new FormGroup({
      'bookdata': new FormGroup({
        'title': new FormControl(null, [Validators.required, this.forbiddenTitleNames.bind(this)]),
        'author': new FormControl(null, [Validators.required]),
        'date': new FormControl(null)
      }),
      'authoremail': new FormControl(null, [Validators.required, Validators.email]),
      'keywords': new FormControl(null)
    });
  }

  forbiddenTitleNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenTitle.indexOf(control.value) !== -1) {
      return { 'booknotallowed': true };
    }
    return null;
  }

}
