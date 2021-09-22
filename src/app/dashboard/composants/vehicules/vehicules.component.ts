import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from 'src/app/shared/smart-table/smart-table.service';

@Component({
  selector: 'app-vehicules',
  templateUrl: './vehicules.component.html',
  styleUrls: ['./vehicules.component.scss'],
})
export class VehiculesComponent implements OnInit {
  ngOnInit() {}
}
