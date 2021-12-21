import { Injectable } from '@angular/core';
import {Channel, ImageSlider, TopMenu} from "../../shared/components";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Ad} from "../../shared/domain";

@Injectable({
  providedIn: 'root'
})
export class HomeService {


  constructor(private http: HttpClient) { }

  getTabs() {
    return this.http.get<TopMenu[]>(`${environment.baseUrl}/tabs`, {
      params: {icode: `${environment.icode}`}
    });
  }

  getchannels() {
    return this.http.get<Channel[]>(`${environment.baseUrl}/channels`, {
      params: {icode:`${environment.icode}`}
    })
  }

  getBanners() {
    return this.http.get<ImageSlider[]>(`${environment.baseUrl}/banners`, {
        params: {icode: `${environment.icode}`}
      }
    )
  }

  getAdByTab(tab: string) {
    return this.http.get<Ad>(`${environment.baseUrl}/ads`,{
      params: {categories_like: tab}
    })
  }

}
