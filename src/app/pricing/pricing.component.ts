import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  pricing = {};
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.pricing = this.getPricing();
  }

  getPricing() {
    return this.config.getConfig().pricing;
  }
}
