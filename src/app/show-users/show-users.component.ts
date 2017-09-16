import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  items: FirebaseListObservable<any[]>;
  //users: any;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('/Users');
    //this.users = this.items
    //console.log(db.object());
    //console.log(this.items);
  }

  ngOnInit() {
  }

}
