import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { linkNAV } from '../../Interfaces/linkNAV';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit {

  public list: linkNAV[] = [ 
    {
      icon: 'home',
      title: 'Home',
      Router: '/home'
    },
    {
      icon: 'search',
      title: 'Busqueda',
      Router: '/home/search'
    }
  ]

  constructor(
    private router: Router,
    ) { }

  ngOnInit() {

  }

  routerNav(x: linkNAV){
    this.router.navigate([x.Router]); 
  }

}


