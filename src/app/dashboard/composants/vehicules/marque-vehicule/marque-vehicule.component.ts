import { MarqueVehiculeUpdateComponent } from './modals/marque-vehicule-update/marque-vehicule-update.component';
import { Component, OnInit } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { ApiService } from 'src/app/shared/api.service';
import { MarqueVehiculeAddComponent } from './modals/marque-vehicule-add/marque-vehicule-add.component';

@Component({
  selector: 'app-marque-vehicule',
  templateUrl: './marque-vehicule.component.html',
  styleUrls: ['./marque-vehicule.component.scss'],
})
export class MarqueVehiculeComponent implements OnInit {
  constructor(
    private api: ApiService,
    private dialogService: NbDialogService
  ) {}

  users: { name: string; title: string }[] = [
    { name: 'Toyota', title: 'Nurse' },
    { name: 'Peugeot', title: 'Doctor of Medicine' },
    { name: 'Citroen', title: 'Janitor' },
    { name: 'BMW', title: 'Doctor of Medicine' },
    { name: 'Mercedes', title: 'Carpenter and photographer' },
    { name: 'Lexus', title: 'Janitor' },
    { name: 'Audi', title: 'Doctor of Medicine' },
    { name: 'Renault', title: 'Carpenter and photographer' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
  ];

  OpenModal() {
    this.dialogService.open(MarqueVehiculeAddComponent);
  }

  updateMarque(marque) {
    this.dialogService.open(MarqueVehiculeUpdateComponent, {
      context: { marque: marque },
    });
  }

  ngOnInit(): void {}
}
