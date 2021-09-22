import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-marque-vehicule-add',
  templateUrl: './marque-vehicule-add.component.html',
  styleUrls: ['./marque-vehicule-add.component.scss'],
})
export class MarqueVehiculeAddComponent implements OnInit {
  data: any;
  marqueName: string;
  constructor(
    private api: ApiService,
    private dialogRef: NbDialogRef<MarqueVehiculeAddComponent>
  ) {}
  input = document.getElementById('MarqueName');
  ngOnInit(): void {
    console.log(this.marqueName);
  }
  addMarque() {
    if (this.marqueName != undefined) {
      this.api.addVehiculeMarque(this.marqueName).subscribe(
        (res) => {
          console.log(res);
          alert('Marque Added succesfully');
          this.marqueName = '';
        },
        (err) => {
          alert('Something Went Wrong');
        }
      );
    }
  }
  close() {
    this.marqueName = '';
    this.dialogRef.close();
  }
}
