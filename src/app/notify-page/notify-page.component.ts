import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SharedDataService } from '../shared-data.service';
@Component({
  selector: 'app-notify-page',
  templateUrl: './notify-page.component.html',
  styleUrls: ['./notify-page.component.css']
})
export class NotifyPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, public sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => this.id = +param.get('id'))
  }


  id: number;
}
