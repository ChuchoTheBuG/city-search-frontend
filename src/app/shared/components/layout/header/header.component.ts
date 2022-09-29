import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SidenavService } from '../sidenav/sidenav.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
 
  constructor(
   private sindenav : SidenavService
  ) { }


  ngOnInit() {

  }

  toggleSidenav() {
    this.sindenav.toggle();
  }

}
