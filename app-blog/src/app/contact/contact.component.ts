import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title : string = "Nous contacter !!"
  private _show : boolean = false ;
  onSubmit(f) :void{
    if(f.valid){
      console.log(f.value)
      // traitement via un service => enregistrer le mail dans une bdd
      f.reset(); // vider les champs du formulaire 
      this.show = true;
     // let that = this;
      setTimeout(function(){
        this.show = false;
      }.bind(this) , 2000 );
    }
    
  }
  get show(){
    return this._show ;
  }
  set show( valeur : boolean){
    this._show = valeur
  }

  constructor() { }

  ngOnInit(): void {
  }

}
