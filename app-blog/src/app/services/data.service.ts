import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  search<T>( motRecherche: string ) {
      let resultat = []; // par défaut le résultat == rien == tableau vide 

      if(motRecherche === "*"){
        return this.getAll() ;
      }

      this.getAll().forEach( function( item ){ 
        if( item.about.indexOf( motRecherche ) != -1 || item.company.indexOf(motRecherche)  != -1){
          resultat.push( item );
        }
      } );
      return resultat;
  }


  getAll<T>(){
    return [
      {
        "_id": "5fdcab989bd89091553497a6",
        "index": 0,
        "guid": "7f1d810e-3d0e-4e39-967f-e64b65d80a39",
        "isActive": false,
        "balance": "$3,304.97",
        "picture": "http://placehold.it/32x32",
        "age": 22,
        "eyeColor": "brown",
        "name": "Logan Crane",
        "gender": "male",
        "company": "ANACHO",
        "email": "logancrane@anacho.com",
        "phone": "+1 (927) 500-2274",
        "address": "240 Thatford Avenue, Sisquoc, New Mexico, 3625",
        "about": "Incididunt irure aute elit irure do sunt in. In et ipsum ad aute aute labore amet occaecat non Lorem. Ipsum voluptate aute dolor veniam veniam id magna dolore quis aliquip eu exercitation. Velit incididunt enim adipisicing eu culpa voluptate in esse quis culpa. Tempor dolore adipisicing ad pariatur eu enim anim velit nostrud velit amet.\r\n",
        "registered": "2014-04-02T12:36:24 -02:00",
        "latitude": 8.086116,
        "longitude": -3.41995,
        "tags": [
          "laborum",
          "excepteur",
          "excepteur",
          "reprehenderit",
          "velit",
          "exercitation",
          "aute"
        ],
        "friends": [
          {
            "id": 0,
            "name": "Julia Mccormick"
          },
          {
            "id": 1,
            "name": "Estelle Blackburn"
          },
          {
            "id": 2,
            "name": "Baird Sanders"
          }
        ],
        "greeting": "Hello, Logan Crane! You have 9 unread messages.",
        "favoriteFruit": "strawberry"
      },
      {
        "_id": "5fdcab981e4b5a944397d455",
        "index": 1,
        "guid": "9364b39a-68ac-4ca6-a318-773d8ad4e9a2",
        "isActive": false,
        "balance": "$1,129.52",
        "picture": "http://placehold.it/32x32",
        "age": 40,
        "eyeColor": "blue",
        "name": "Booth Norton",
        "gender": "male",
        "company": "ENDIPINE",
        "email": "boothnorton@endipine.com",
        "phone": "+1 (973) 468-3069",
        "address": "944 Nova Court, Coral, Wyoming, 6532",
        "about": "Incididunt non qui incididunt incididunt nulla et culpa incididunt veniam voluptate dolor. Magna in pariatur minim nisi enim pariatur excepteur. Elit consequat voluptate consequat tempor.\r\n",
        "registered": "2015-07-02T03:30:26 -02:00",
        "latitude": 9.273017,
        "longitude": 73.761661,
        "tags": [
          "do",
          "occaecat",
          "enim",
          "mollit",
          "mollit",
          "esse",
          "ex"
        ],
        "friends": [
          {
            "id": 0,
            "name": "Deborah Zamora"
          },
          {
            "id": 1,
            "name": "Strong Hernandez"
          },
          {
            "id": 2,
            "name": "Bradford Hatfield"
          }
        ],
        "greeting": "Hello, Booth Norton! You have 5 unread messages.",
        "favoriteFruit": "banana"
      },
      {
        "_id": "5fdcab98926aa85b52c054c6",
        "index": 2,
        "guid": "ba6a86de-6dfd-4597-ab5a-b05b47131f00",
        "isActive": false,
        "balance": "$2,216.29",
        "picture": "http://placehold.it/32x32",
        "age": 38,
        "eyeColor": "green",
        "name": "Willis Frazier",
        "gender": "male",
        "company": "ZILLADYNE",
        "email": "willisfrazier@zilladyne.com",
        "phone": "+1 (851) 495-3701",
        "address": "215 Jodie Court, Nadine, Oklahoma, 6689",
        "about": "Aliquip exercitation exercitation ex ut. Adipisicing tempor qui occaecat eu in deserunt nulla cillum est eiusmod ad. Eiusmod tempor ipsum proident officia laboris consequat sit incididunt magna.\r\n",
        "registered": "2017-08-06T01:13:04 -02:00",
        "latitude": -82.873635,
        "longitude": 30.146059,
        "tags": [
          "pariatur",
          "eiusmod",
          "ipsum",
          "laborum",
          "pariatur",
          "sunt",
          "qui"
        ],
        "friends": [
          {
            "id": 0,
            "name": "Virginia Nielsen"
          },
          {
            "id": 1,
            "name": "Glenna Chang"
          },
          {
            "id": 2,
            "name": "Millie Burns"
          }
        ],
        "greeting": "Hello, Willis Frazier! You have 10 unread messages.",
        "favoriteFruit": "strawberry"
      },
      {
        "_id": "5fdcab9868f57fac7f4577f0",
        "index": 3,
        "guid": "a89b3670-8034-4b63-8b13-6667cd55e721",
        "isActive": false,
        "balance": "$3,603.56",
        "picture": "http://placehold.it/32x32",
        "age": 24,
        "eyeColor": "green",
        "name": "Chan Rojas",
        "gender": "male",
        "company": "FREAKIN",
        "email": "chanrojas@freakin.com",
        "phone": "+1 (817) 433-2875",
        "address": "371 Duryea Place, Edgar, Guam, 1984",
        "about": "Laborum cupidatat dolor reprehenderit in aute culpa ipsum. Ullamco elit qui cillum esse anim est reprehenderit aliqua proident magna ad laboris. Ex aute incididunt ut elit pariatur non pariatur laborum deserunt.\r\n",
        "registered": "2020-08-12T04:35:00 -02:00",
        "latitude": -57.337643,
        "longitude": -55.493001,
        "tags": [
          "et",
          "magna",
          "id",
          "laboris",
          "fugiat",
          "incididunt",
          "exercitation"
        ],
        "friends": [
          {
            "id": 0,
            "name": "Rachelle Hubbard"
          },
          {
            "id": 1,
            "name": "Sharlene Chase"
          },
          {
            "id": 2,
            "name": "Wagner Harper"
          }
        ],
        "greeting": "Hello, Chan Rojas! You have 6 unread messages.",
        "favoriteFruit": "strawberry"
      },
      {
        "_id": "5fdcab98278e23ddacc770fb",
        "index": 4,
        "guid": "130ae1fd-0492-4b23-8058-09b0d9930984",
        "isActive": false,
        "balance": "$1,245.53",
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "eyeColor": "green",
        "name": "Neva Stephenson",
        "gender": "female",
        "company": "RONELON",
        "email": "nevastephenson@ronelon.com",
        "phone": "+1 (939) 470-3000",
        "address": "846 Havemeyer Street, Catherine, Connecticut, 1540",
        "about": "Ea tempor irure sunt ea ex sit enim cupidatat amet eiusmod minim eiusmod deserunt cillum. Enim sunt ex ut proident aliquip anim esse nostrud labore laboris exercitation. Pariatur voluptate deserunt veniam dolore nisi reprehenderit aliquip. Eu est commodo voluptate incididunt.\r\n",
        "registered": "2018-02-21T05:51:14 -01:00",
        "latitude": 11.713353,
        "longitude": 111.282296,
        "tags": [
          "consectetur",
          "consectetur",
          "amet",
          "nulla",
          "reprehenderit",
          "ex",
          "eu"
        ],
        "friends": [
          {
            "id": 0,
            "name": "Andrea Carson"
          },
          {
            "id": 1,
            "name": "Myra Mcfadden"
          },
          {
            "id": 2,
            "name": "Holt Welch"
          }
        ],
        "greeting": "Hello, Neva Stephenson! You have 8 unread messages.",
        "favoriteFruit": "banana"
      },
      {
        "_id": "5fdcab98d9357d4ce1fc2f17",
        "index": 5,
        "guid": "3584bfd7-c245-48ee-88d8-b0760a863944",
        "isActive": true,
        "balance": "$2,214.71",
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "eyeColor": "blue",
        "name": "Harvey Washington",
        "gender": "male",
        "company": "ZOLARITY",
        "email": "harveywashington@zolarity.com",
        "phone": "+1 (905) 568-2294",
        "address": "755 Fillmore Avenue, Vowinckel, Tennessee, 1036",
        "about": "Excepteur dolore excepteur reprehenderit quis. Reprehenderit veniam enim exercitation incididunt commodo pariatur eu eiusmod fugiat tempor reprehenderit pariatur ex voluptate. Ipsum nostrud excepteur aliquip ea consequat dolor mollit culpa id aute occaecat mollit fugiat. Irure elit magna dolor laborum minim et tempor duis ad. Sint qui laboris pariatur elit.\r\n",
        "registered": "2017-11-27T04:27:02 -01:00",
        "latitude": -14.992791,
        "longitude": 67.921796,
        "tags": [
          "reprehenderit",
          "non",
          "exercitation",
          "consequat",
          "laboris",
          "sint",
          "nulla"
        ],
        "friends": [
          {
            "id": 0,
            "name": "Best Faulkner"
          },
          {
            "id": 1,
            "name": "Acosta Williamson"
          },
          {
            "id": 2,
            "name": "Cortez Acevedo"
          }
        ],
        "greeting": "Hello, Harvey Washington! You have 8 unread messages.",
        "favoriteFruit": "strawberry"
      }
    ]
  }

  constructor() { }
}
