import {inject} from 'aurelia-framework';
import {initialize} from 'aurelia-pal-browser';
import {IgService} from './ig-service';
initialize();

@inject(IgService)
export class Me {
  heading = "Me";
  me = {};

  constructor(igService){
    this.igService = igService;
  }

  activate() {
    if(localStorage.getItem('token')){
      return this.igService.me()
        .then(res => res.response.data)
        .then(me =>
          {
            this.me = me
            this.heading=me.full_name
          });
    }
  }
}
