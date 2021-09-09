import { ApiService } from 'src/app/shared/api.service';
import { Component, OnInit } from '@angular/core';
import { DualListComponent } from 'src/app/components/dual-list/dual-list.component';

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.scss'],
})
export class GroupeComponent implements OnInit {
  selected;
  constructor(private api: ApiService) {}

  data = {};
  tab = 1;
  keepSorted = false;
  // key: string;
  // display: string;

  filter = false;
  source: Array<any>;
  confirmed: Array<any>;
  privilegesAssignes: Array<any>;
  userAdd = '';
  disabled = false;
  groupName: string;
  sourceLeft = true;
  container = {};
  privileges = [];
  groups;
  rolesAssigned;
  updatedValue;
  key = 'id';
  display = 'name'; // [ 'station', 'state' ];
  format: any = DualListComponent.DEFAULT_FORMAT;

  private sourceGroups: Array<any>;

  private confirmedGroups: Array<any>;

  private Groups: Array<any>;

  ngOnInit() {
    this.doReset();
  }
  refresh() {
    this.selected = undefined;
  }

  console(hello) {
    /////////////// a refaireeeeeeeeeeeeeeeeeeeeeeee
    this.selected = hello;
    console.log(hello);
    this.privilegesAssignes = hello.roles;
    console.log(this.privilegesAssignes);
  }

  addingGroup() {
    this.container['groupName'] = this.groupName; // Expression a changer en this.container = {groupName : ....}
    console.log(this.container);
    this.rolesAssigned = this.confirmed;
    console.log(this.confirmed);
    this.rolesAssigned.forEach((element) => delete element.privileges);
    console.log(delete this.rolesAssigned.roles); //delete operator chercher une alternative
    console.log(this.rolesAssigned);
    this.container['roles'] = this.rolesAssigned;
    this.container['id'] = Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    this.data = this.container;

    console.log(this.data);
    this.api.addGroup(this.data).subscribe(
      (res) => {
        console.log(res);
        alert('Group Added succesfully');
        this.groupName = '';
        this.ngOnInit();
      },
      (err) => {
        alert('Something Went Wrong');
      }
    );
  }
  getAllRoles() {
    this.api.getRoles().subscribe((res) => {
      this.source = res;
      this.confirmedGroups = new Array<any>();
      this.confirmed = this.confirmedGroups;
      this.keepSorted = true;
    });
  }
  updateRole(privilegesAssignes, selected) {
    this.privilegesAssignes.forEach((element) => delete element.privileges);

    this.updatedValue = {
      groupName: this.selected.groupName,
      roles: this.privilegesAssignes,
      id: this.selected.id,
    };
    console.log(this.updatedValue);
    this.api.updateGroup(this.updatedValue, selected.id).subscribe(
      (res) => {
        console.log(res);
        alert(`Group ${this.selected.groupName} Updataed succesfully`);
        this.selected = undefined;
      },
      (err) => {
        alert('Something Went Wrong');
      }
    );
  }

  getAllGroups() {
    this.api.getGroups().subscribe((res) => {
      this.groups = res;
      console.log(this.groups);
    });
  }
  private useStations() {}
  doReset() {
    this.getAllGroups();
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
