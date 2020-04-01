import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators } from '@angular/forms' ;

import {CollegeService} from '../college.service';


@Component({
  selector: 'app-crud-add',
  templateUrl: './crud-add.component.html',
  styleUrls: ['./crud-add.component.css']
})
export class CrudAddComponent implements OnInit {

  angForm : FormGroup ;
  constructor(private fb : FormBuilder , private bs : CollegeService ) {
    this . createForm ();
   }

   createForm () {
    this . angForm = this . fb . group ({
    person_name: [ '' , Validators . required ],
    id_number: [ '' , Validators . required ],
    phone_number: [ '' , Validators . required ],
    sex: [ '' , Validators . required ]
    });
    }

    addStudent ( person_name , id_number , phone_number, sex ) {
      this . bs . addStudent ( person_name , id_number , phone_number, sex );
      }

  ngOnInit(): void {
  }

}
