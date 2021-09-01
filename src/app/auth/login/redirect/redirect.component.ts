import { Component, OnInit } from '@angular/core';
import { NbAccessChecker } from '@nebular/security';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss'],
})
export class RedirectComponent implements OnInit {
  constructor(public accessChecker: NbAccessChecker) {}

  ngOnInit(): void {}
}
