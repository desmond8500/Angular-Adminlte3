import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  public sidemenu = {
    logo: 'assets/adminlte3/dist/img/AdminLTELogo.png',
    siteTitle: 'Angular AdminLTE3',
    userImage: 'assets/adminlte3/dist/img/user2-160x160.jpg',
    userName: 'admin'
  };

  public menu = [
    {
      nom: 'Dashboard',
      lien: '/dashboard',
      icon: 'nav-icon far fa-circle nav-icon',
    },
    {
      nom: 'Boxes',
      lien: '/boxes',
      icon: 'nav-icon far fa-circle nav-icon',
    },
    {
      nom: 'Cards',
      lien: '/cards',
      icon: 'nav-icon far fa-circle nav-icon',
    },
    {
      nom: 'Tables',
      lien: '/tables',
      icon: 'nav-icon far fa-circle nav-icon',
    },
    {
      nom: 'Mails',
      lien: '/mails',
      icon: 'nav-icon far fa-circle nav-icon',
    },
    {
      nom: 'Projects',
      lien: '/prjects',
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
