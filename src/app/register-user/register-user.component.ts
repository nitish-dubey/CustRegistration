import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { CustInfo } from '../custinfo';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
users: FirebaseListObservable<any>;
  custinfo: CustInfo;
  router: Router;

  constructor(db: AngularFireDatabase, router: Router) {
    this.users = new FirebaseListObservable(db.database.ref("/Users"));
    this.router = router;
  }

  ngOnInit() {
    this.custinfo = new CustInfo("", "", "", "");
    console.log(this.custinfo);
  }
  
  onSubmit() {
    console.log(this.custinfo);
    this.users.push(this.custinfo).then(
      obj => {
        console.log("Success: ", obj);
        this.router.navigate(['/users']);
      },
      err => console.log(err)
    );
  }
}
