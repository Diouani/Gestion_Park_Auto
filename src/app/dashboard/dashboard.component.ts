import { Component, OnInit } from '@angular/core';
import { NbAccessChecker } from '@nebular/security';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
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

      children: [
        {
          title: 'Véhicules',
          link: 'composants/vehicule',
        },
        {
          title: 'Véhicules-two',
          link: 'composants/vehicule-two',
        },
        {
          title: 'Fournisseurs',
        },
        {
          title: 'Types',
          link: '/home/types',
        },
        {
          title: 'Paramétrage de taxes spéciales',
        },
        {
          title: 'Paramétrage des assurances',
        },
        {
          title: 'Villes',
        },
        {
          title: 'Conducteurs',
        },
      ],
    },
    {
      title: 'Cartes et Tickets',
      icon: 'credit-card-outline',
      link: 'home/users',
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
      children: [
        {
          title: 'Gestion des Roles',
          link: '/home/roles',
        },
        {
          title: 'Gestion des Groupes',
          link: '/home/groupes',
        },
      ],
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
          title: 'Logout',
          link: '/logout',
        },
      ],
    },
  ];
  constructor(private readonly sidebarService: NbSidebarService) {}
  toggleSidebar(): boolean {
    this.sidebarService.toggle();
    return false;
  }

  ngOnInit(): void {}
}
