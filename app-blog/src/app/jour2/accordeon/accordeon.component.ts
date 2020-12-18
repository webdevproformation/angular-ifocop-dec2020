import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordeon',
  templateUrl: "./accordeon.component.html",
  styleUrls: ['./accordeon.component.css']
})
export class AccordeonComponent implements OnInit {

  accordeon: Array<boolean> = [ false , true, true, true ];

  onClickShow($event){
      let index = $event.target.dataset.index;
      let color = $event.target.dataset.color;
      $event.target.style.color = color || "blue";
      this.accordeon.fill(true);
      this.accordeon[index] = false;
    }
  constructor() { }
  ngOnInit(): void {
  }
}
