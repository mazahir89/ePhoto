import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  testimonial = {};
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.testimonial = this.getTestimonial();
  }

  getTestimonial() {

    return this.config.getConfig().testimonial;
  }

}
