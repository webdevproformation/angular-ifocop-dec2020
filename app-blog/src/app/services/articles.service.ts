import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  // json generator ??? 
  // google => json generator => https://www.json-generator.com/
  getAll <T> (){
    return [
      {
        "_id": "5fda21139b39f7b572c2ccc0",
        "index": 0,
        "guid": "ddcd1ca9-16e4-45aa-8c49-1ad739744158",
        "isActive": true,
        "balance": "$3,698.40",
        "picture": "http://placehold.it/32x32",
        "age": 25,
        "eyeColor": "brown",
        "name": "Webb Horton",
        "gender": "male",
        "company": "TELPOD",
        "email": "webbhorton@telpod.com",
        "phone": "+1 (982) 578-2293",
        "address": "345 Wilson Street, Beaverdale, Indiana, 9770",
        "about": "Aliqua exercitation dolor eu deserunt elit. Sit nostrud in cupidatat ut commodo consequat ea labore eu incididunt consectetur. Eiusmod enim cillum occaecat sint dolor laboris.\r\n",
        "registered": "2017-05-23T10:58:40 -02:00",
        "latitude": -55.161193,
        "longitude": 29.291634,
        "tags": [
          "incididunt",
          "incididunt",
          "excepteur",
          "in",
          "amet",
          "ut",
          "quis"
        ],
        "friends": [
          {
            "id": 0,
            "name": "Margo Ross"
          },
          {
            "id": 1,
            "name": "Noel Pugh"
          },
          {
            "id": 2,
            "name": "Cantu Salinas"
          }
        ],
        "greeting": "Hello, Webb Horton! You have 10 unread messages.",
        "favoriteFruit": "strawberry"
      },
      {
        "_id": "5fda2113ddbeccf12b282e2b",
        "index": 1,
        "guid": "c0ccd224-a26f-4f3c-ba6f-5590ec3907cc",
        "isActive": true,
        "balance": "$2,166.05",
        "picture": "http://placehold.it/32x32",
        "age": 34,
        "eyeColor": "brown",
        "name": "Cline Webster",
        "gender": "male",
        "company": "GOLISTIC",
        "email": "clinewebster@golistic.com",
        "phone": "+1 (906) 461-3558",
        "address": "735 Benson Avenue, Bedias, Montana, 6712",
        "about": "Non nulla elit ex tempor sint veniam ad commodo in pariatur adipisicing aliquip sunt. Tempor ullamco tempor adipisicing sit et. Minim dolor irure qui mollit.\r\n",
        "registered": "2017-09-18T11:17:13 -02:00",
        "latitude": -10.591584,
        "longitude": -87.155015,
        "tags": [
          "est",
          "commodo",
          "ea",
          "enim",
          "eiusmod",
          "nisi",
          "veniam"
        ],
        "friends": [
          {
            "id": 0,
            "name": "Carla Gibbs"
          },
          {
            "id": 1,
            "name": "Mendez Washington"
          },
          {
            "id": 2,
            "name": "Mcintyre Wilder"
          }
        ],
        "greeting": "Hello, Cline Webster! You have 9 unread messages.",
        "favoriteFruit": "strawberry"
      },
      {
        "_id": "5fda2113d44e6b2304cc68a4",
        "index": 2,
        "guid": "942d57a0-f3d0-4f98-99f4-777049715fa0",
        "isActive": true,
        "balance": "$1,871.25",
        "picture": "http://placehold.it/32x32",
        "age": 34,
        "eyeColor": "brown",
        "name": "Earline Ramirez",
        "gender": "female",
        "company": "CUJO",
        "email": "earlineramirez@cujo.com",
        "phone": "+1 (947) 471-2047",
        "address": "798 Cove Lane, Remington, Colorado, 3216",
        "about": "In eiusmod in labore occaecat non ut excepteur anim labore ea sint non quis. Nulla reprehenderit nulla voluptate aliquip sunt in qui cupidatat anim officia adipisicing. Anim officia nostrud id est aute veniam nulla ullamco ullamco. Consectetur fugiat exercitation tempor excepteur excepteur eiusmod consequat pariatur elit et cillum sint ut consequat. Esse est anim enim cupidatat nisi. Esse exercitation ipsum reprehenderit commodo Lorem veniam excepteur dolor laborum exercitation consectetur sunt exercitation.\r\n",
        "registered": "2015-08-27T09:59:38 -02:00",
        "latitude": -5.961275,
        "longitude": 67.215289,
        "tags": [
          "Lorem",
          "mollit",
          "proident",
          "dolor",
          "ipsum",
          "duis",
          "adipisicing"
        ],
        "friends": [
          {
            "id": 0,
            "name": "Kathie Harmon"
          },
          {
            "id": 1,
            "name": "Mcknight Reyes"
          },
          {
            "id": 2,
            "name": "Anastasia Walter"
          }
        ],
        "greeting": "Hello, Earline Ramirez! You have 3 unread messages.",
        "favoriteFruit": "strawberry"
      },
      {
        "_id": "5fda2113458c96b7bca39608",
        "index": 3,
        "guid": "7992e618-c215-476e-9547-7cccb58dd57e",
        "isActive": true,
        "balance": "$2,796.16",
        "picture": "http://placehold.it/32x32",
        "age": 25,
        "eyeColor": "brown",
        "name": "Hyde Salas",
        "gender": "male",
        "company": "INFOTRIPS",
        "email": "hydesalas@infotrips.com",
        "phone": "+1 (902) 473-3571",
        "address": "932 Putnam Avenue, Westmoreland, Puerto Rico, 3226",
        "about": "Dolore voluptate sunt cupidatat aliqua in do fugiat. Fugiat incididunt quis reprehenderit est tempor deserunt ullamco dolor. Dolor magna eu consectetur duis exercitation aute qui nulla excepteur cillum ipsum. Eiusmod reprehenderit sit ullamco fugiat tempor ullamco occaecat proident.\r\n",
        "registered": "2018-09-22T02:58:43 -02:00",
        "latitude": 78.91787,
        "longitude": 163.817286,
        "tags": [
          "nulla",
          "ut",
          "amet",
          "voluptate",
          "nisi",
          "amet",
          "nostrud"
        ],
        "friends": [
          {
            "id": 0,
            "name": "Bowen Mcfadden"
          },
          {
            "id": 1,
            "name": "Benton Yang"
          },
          {
            "id": 2,
            "name": "Sherman Mcleod"
          }
        ],
        "greeting": "Hello, Hyde Salas! You have 6 unread messages.",
        "favoriteFruit": "apple"
      },
      {
        "_id": "5fda2113e5566c63ddee2df9",
        "index": 4,
        "guid": "b65258e3-bc72-4008-a01a-05069a1bf5f5",
        "isActive": true,
        "balance": "$3,907.30",
        "picture": "http://placehold.it/32x32",
        "age": 34,
        "eyeColor": "blue",
        "name": "Petersen Petersen",
        "gender": "male",
        "company": "COMBOT",
        "email": "petersenpetersen@combot.com",
        "phone": "+1 (972) 587-3784",
        "address": "291 Roder Avenue, Hilltop, South Carolina, 6155",
        "about": "Dolore in id voluptate incididunt reprehenderit aliquip ut anim. Ad sunt minim laboris elit magna nostrud magna dolore laborum. Aute voluptate id adipisicing consectetur qui proident ex enim eu ullamco.\r\n",
        "registered": "2016-08-31T04:08:51 -02:00",
        "latitude": 39.733604,
        "longitude": 139.458013,
        "tags": [
          "dolore",
          "mollit",
          "velit",
          "incididunt",
          "cillum",
          "excepteur",
          "duis"
        ],
        "friends": [
          {
            "id": 0,
            "name": "Clements William"
          },
          {
            "id": 1,
            "name": "Greene Durham"
          },
          {
            "id": 2,
            "name": "Witt Rivas"
          }
        ],
        "greeting": "Hello, Petersen Petersen! You have 1 unread messages.",
        "favoriteFruit": "banana"
      }
    ]
  }


  constructor() { }
}
