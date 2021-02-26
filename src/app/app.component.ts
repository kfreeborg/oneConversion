import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyProject';

  showMsg = false;

  switchValue = "three";

  users = [
    {id:1, name:'john'},
    {id:2, name: "jackson"}
  ];
  

  readMe() {
    console.log("button clicked");
  }
}
