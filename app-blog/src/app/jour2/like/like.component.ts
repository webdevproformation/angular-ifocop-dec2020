import { Component, OnInit, Output , EventEmitter } from '@angular/core';

// emojipedia
@Component({
  selector: 'app-like',
  template: ` 
    👍  <button class="btn btn-sm btn-outline-success" (click)="onClickLike()">+</button>
  `,
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Output() like = new EventEmitter();

  onClickLike(){
    this.like.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
