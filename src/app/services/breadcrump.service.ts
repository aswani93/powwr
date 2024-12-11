import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumpService {
  breadcrump : {label: string, url?: string}[] = []
  setData(data: {label: string, url?: string}[] | null) {
    // breadcrump array containing a `label` and an optional `url`.
    if(data){
      this.breadcrump = data;
    } else {
      this.breadcrump = [];
    }
    
  }
  getData() {
    return this.breadcrump;
  }
}
