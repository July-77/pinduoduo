import { Component, OnInit } from '@angular/core';
import {Channel, ImageSlider} from "../../../shared/components";
import {ActivatedRoute} from "@angular/router";
import {HomeService} from "../../services";


@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private service: HomeService) { }

  selectedTablink: any;

  imageSliders: ImageSlider[] = [];

  channels: Channel[] = []

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>
    this.selectedTablink = params.get('tablink'))
    this.imageSliders = this.service.getBanners();
    this.channels = this.service.getchannels();


  }

}
