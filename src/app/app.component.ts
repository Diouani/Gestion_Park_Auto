import { Component } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'GPA';
  items: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'home-outline',
      link: '/home',
      home: true,
    },
    {
      title: 'Composants',
      icon: 'cube-outline',
      link: '/logged',
    },
    {
      title: 'Cartes et Tickets',
      icon: 'credit-card-outline',
      link: '/users',
    },
    {
      title: 'Structures',
      icon: 'list-outline',
      link: '/users',
    },
    {
      title: 'Etat du parc',
      icon: 'activity-outline',
      link: '/users',
    },
    {
      title: 'Véhicules',
      icon: 'car-outline',
      link: '/users',
    },
    {
      title: 'Demande de Services',
      icon: 'edit-2-outline',
      link: '/users',
    },
    {
      title: 'Suivis des bus',
      icon: 'search-outline',
      link: '/users',
    },
    {
      title: 'Déplacements',
      icon: 'swap-outline',
      link: '/users',
    },
    {
      title: 'Conventions',
      icon: 'file-text-outline',
      link: '/users',
    },
    {
      title: 'Divers',
      icon: 'folder-outline',
      link: '/users',
    },
    {
      title: 'Fin',
      icon: 'power-outline',
      link: '/users',
      expanded: true,
      children: [
        {
          title: 'Change Password',
        },
        {
          title: 'Privacy Policy',
        },
        {
          title: 'Logout',
        },
      ],
    },
  ];
  constructor(private readonly sidebarService: NbSidebarService) {}
  toggleSidebar(): boolean {
    this.sidebarService.toggle();
    return false;
  }
}
