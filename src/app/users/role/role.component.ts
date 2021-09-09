import { ApiService } from './../../shared/api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DualListComponent } from 'src/app/components/dual-list/dual-list.component';
import { NbListComponent } from '@nebular/theme';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
})
export class RoleComponent implements OnInit {
  selected;
  constructor(private api: ApiService) {}
  data = {};
  tab = 1;
  keepSorted = false;
  key: string;
  display: string;
  filter = false;
  source: Array<any>;
  confirmed: Array<any>;
  privilegesAssignes: Array<any>;
  userAdd = '';
  disabled = false;
  roleName: string;
  sourceLeft = true;
  container = {};
  privileges = [];
  roles;
  updatedValue;
  format: any = DualListComponent.DEFAULT_FORMAT;

  private sourceStations: Array<any>;

  private confirmedStations: Array<any>;

  private stations: Array<any>;

  ngOnInit() {
    this.doReset();
  }
  refresh() {
    this.selected = undefined;
  }

  console(hello) {
    this.selected = hello;

    this.privilegesAssignes = hello.privileges;
    console.log(this.privilegesAssignes);
  }

  addingRole() {
    this.container['name'] = this.roleName;
    console.log(this.container);
    this.privileges = this.confirmed;
    console.log(this.privileges);
    this.container['privileges'] = this.privileges;
    this.container['id'] = Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    this.data = this.container;

    // this.data.push({ roleName: username });
    // this.data.push({ privileges: confirmed });
    console.log(this.data);
    this.api.addRole(this.data).subscribe(
      (res) => {
        console.log(res);
        alert('Role Added succesfully');
        this.roleName = '';
        this.ngOnInit();
      },
      (err) => {
        alert('Something Went Wrong');
      }
    );
  }
  getAllRoles() {
    this.api.getRoles().subscribe((res) => {
      this.roles = res;
    });
  }
  updateRole(privilegesAssignes, selected) {
    this.updatedValue = {
      name: this.selected.name,
      privileges: this.privilegesAssignes,
      id: this.selected.id,
    };
    console.log(this.updatedValue);
    this.api.updateRole(this.updatedValue, selected.id).subscribe(
      (res) => {
        console.log(res);
        alert('Role Updataed succesfully');
        this.selected = undefined;
      },
      (err) => {
        alert('Something Went Wrong');
      }
    );
  }

  getAllPrivileges() {
    this.api.getPrivileges().subscribe((res) => {
      this.confirmedStations = new Array<any>();
      this.stations = res;
      this.sourceStations = JSON.parse(JSON.stringify(this.stations));
      this.key = 'id';
      this.display = 'name'; // [ 'station', 'state' ];
      this.keepSorted = true;
      this.source = this.sourceStations;
      this.confirmed = this.confirmedStations;
    });
  }
  private useStations() {}
  doReset() {
    this.getAllPrivileges();
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
