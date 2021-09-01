import { Component, OnInit } from '@angular/core';
import { NbAccessChecker } from '@nebular/security';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
constructor(public accessChecker: NbAccessChecker){

}

  ngOnInit(): void {}
}
