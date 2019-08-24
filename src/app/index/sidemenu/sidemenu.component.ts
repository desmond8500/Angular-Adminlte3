import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  public sidemenu = {
    logo: 'assets/adminlte3/dist/img/AdminLTELogo.png',
    siteTitle: 'Taaboour',
    userImage: 'assets/adminlte3/dist/img/user2-160x160.jpg',
    userName: 'admin'
  };

  public menu = [
    {
      nom: 'Acceuil',
      lien: '/',
      icon: 'nav-icon far fa-circle nav-icon',
    },
    {
      nom: 'Tickets',
      lien: '/tickets',
      icon: 'nav-icon far fa-circle nav-icon',
    },
    {
      nom: 'Favoris',
      lien: '/favoris',
      icon: 'nav-icon far fa-circle nav-icon',
    },
    {
      nom: 'Profile',
      lien: '/settings',
      icon: 'nav-icon far fa-circle nav-icon',
    },
    {
      nom: 'Admin',
      lien: '/admin',
      icon: 'nav-icon far fa-circle nav-icon',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
