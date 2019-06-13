import { Component } from '@angular/core';
import { SharedDataService } from './shared-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public sharedDataSerice: SharedDataService){ 

  }
  title = 'intern2019';

  items = [
    { name: "xx"}
  ]

  updateTitle(str: string) {
    console.log(str)
    this.title = str
    this.sharedDataSerice.textShared = str
  }
}
