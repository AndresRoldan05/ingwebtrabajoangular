import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;

@Injectable({
  providedIn: 'root'
})

export class CollegeService {
uri = 'http://localhost:4000/college' ;
  constructor(private http: HttpClient) { }

    addStudent ( person_name , id_number , phone_number, sex ){
      const obj={
        person_name: person_name ,
        id_number: id_number,
        phone_number: phone_number,
        sex: sex
      };
      console . log ( obj );
 this . http . post ( ` ${this.uri}/add` , obj )
. subscribe ( res => console.log ( 'Done' ));

    }
  }

