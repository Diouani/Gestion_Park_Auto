import { Component } from '@angular/core';
import { NbAccessChecker } from '@nebular/security';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'GPA';
  constructor(public accessChecker: NbAccessChecker) {}

  
}
