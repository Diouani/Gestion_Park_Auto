import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-marque-vehicule-update',
  templateUrl: './marque-vehicule-update.component.html',
  styleUrls: ['./marque-vehicule-update.component.scss'],
})
export class MarqueVehiculeUpdateComponent implements OnInit {
  @Input() libelle: any;
  @Input() libelle_comment: any;
  marque: any;
  constructor(
    private api: ApiService,
    protected dialogRef: NbDialogRef<MarqueVehiculeUpdateComponent>
  ) {}

  ngOnInit(): void {
    this.libelle = this.marque.name;
  }

  updateSection() {
    // this.api.updateVehiculeMarque(updatedData, updatedData.id).subscribe(
    //   (res) => {
    //     console.log(res);
    //     alert("Section Updataed succesfully");
    //   },
    //   (err) => {
    //     alert("Something Went Wrong");
    //   }
    // );
    alert('Marque Updated Succesfully');
  }

  close() {
    this.dialogRef.close();
  }
}
