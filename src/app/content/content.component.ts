import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  service = {};
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.service = this.getService();
  }

  getService() {
    return this.config.getConfig().service;
  }
}
