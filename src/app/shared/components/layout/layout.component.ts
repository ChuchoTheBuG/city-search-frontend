import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './sidenav/sidenav.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit {
  opened = true;
  @ViewChild(MatSidenav) public sidenav!: MatSidenav;

  constructor(private sidenavService: SidenavService ) { }

  ngOnInit(): void {
  }
  
  routerNav(router: string){
  }


  ngAfterViewInit() {
    this.sidenavService.setSidenav(this.sidenav);
    
  }

}


