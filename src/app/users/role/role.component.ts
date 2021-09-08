import { ApiService } from './../../shared/api.service';
import { Component, OnInit } from '@angular/core';
import { DualListComponent } from 'src/app/components/dual-list/dual-list.component';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
})
export class RoleComponent implements OnInit {
  constructor(private api: ApiService) {}
  data = [];
  tab = 1;
  keepSorted = false;
  key: string;
  display: string;
  filter = false;
  source: Array<any>;
  confirmed: Array<any>;
  userAdd = '';
  disabled = false;
  roleName: string;
  sourceLeft = true;
  format: any = DualListComponent.DEFAULT_FORMAT;

  private sourceStations: Array<any>;

  private confirmedStations: Array<any>;

  private stations: Array<any>;

  ngOnInit() {
    this.doReset();
  }
  addingRole() {
    this.roleName['roleName'] = username;
    console.log(this.roleName);
    this.privileges = confirmed;
    console.log(this.privileges);
    this.roleName['privileges'] = this.privileges;
    this.roleName['id'] = 3;
    this.data = this.roleName;

    // this.data.push({ roleName: username });
    // this.data.push({ privileges: confirmed });
    console.log(this.data);
    this.api.addRole(this.data).subscribe(
      (res) => {
        console.log(res);
        alert('Role Added succesfully');
        // this.formValue.reset();
      },
      (err) => {
        alert('Something Went Wrong');
      }
    );
  }
  getAllRoles() {
    this.api.getPrivileges().subscribe((res) => {
      this.confirmedStations = new Array<any>();
      this.stations = res;
      this.sourceStations = JSON.parse(JSON.stringify(this.stations));
      this.key = 'id';
      this.display = 'name'; // [ 'station', 'state' ];
      this.keepSorted = true;
      console.log(this.sourceStations);
      this.source = this.sourceStations;
      this.confirmed = this.confirmedStations;
      console.log(this.source);
    });
  }
  private useStations() {}
  doReset() {
    this.getAllRoles();

    // Preconfirm some items.
    // this.confirmedStations.push(this.stations[1]);

    this.useStations();
  }

  filterBtn() {
    return this.filter ? 'Hide Filter' : 'Show Filter';
  }

  doDisable() {
    this.disabled = !this.disabled;
  }

  disableBtn() {
    return this.disabled ? 'Enable' : 'Disabled';
  }

  swapDirection() {
    this.sourceLeft = !this.sourceLeft;
    this.format.direction = this.sourceLeft
      ? DualListComponent.LTR
      : DualListComponent.RTL;
  }
}
