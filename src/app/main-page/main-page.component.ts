import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { Observable } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private sharedDataService: SharedDataService) { }

  localData: Observable<User[]>
  data: User[];

  ngOnInit() {
    this.localData = this.sharedDataService.getData()

    this.sharedDataService.getData().subscribe(data => {this.data = data})
    console.log("main-page.init()")
  }


  txt: string;
  cardClick(str: string) {
    this.txt = str;
  }
}
