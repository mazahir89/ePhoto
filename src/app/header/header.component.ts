import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header = {};

  constructor(private config: ConfigService) { }

  ngOnInit() {

    this.header = this.getHeader();
  }

  getHeader() {
    return this.config.getConfig().header;
  }

}
