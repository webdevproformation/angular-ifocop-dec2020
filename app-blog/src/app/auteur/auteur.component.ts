import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-auteur',
  template: '<p class="badge badge-primary"> {{ nom }}</p>',
  styleUrls: ['./auteur.component.css']
})
export class AuteurComponent implements OnInit {

  @Input() nom : string ;

  constructor() { }

  ngOnInit(): void {
  }

}
