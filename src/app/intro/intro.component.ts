import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  intro = {
  };
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.intro = this.getIntro();
  }

  getIntro() {
    return this.config.getConfig().intro;
  }

}
