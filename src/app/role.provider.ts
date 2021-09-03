import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { NbRoleProvider } from '@nebular/security';
import { of } from 'rxjs';

@Injectable()
export class RoleProvider implements NbRoleProvider {
  constructor(private authService: NbAuthService) {}

  getRole(): Observable<string> {
    return this.authService.onTokenChange().pipe(
      map((token: NbAuthJWTToken) => {
        return !token.isValid() ? token.getPayload()['role'] : 'admin';
      })
    );
  }

  //   let result;
  //   this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
  //     if (!token.isValid()) {
  //       result = token.getPayload()['role'];
  //     } else {
  //       result = 'user';
  //     }
  //   });
  //   // return observableOf(result);
  //   return of(result);
  // }
}
