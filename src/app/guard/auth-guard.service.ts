import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { NbAclService } from '@nebular/security';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: NbAuthService,
    private router: Router,
    private nbAclService: NbAclService
  ) {}
  permissions: any;
  canActivate() {
    return this.authService.isAuthenticated().pipe(
      tap(async (authenticated) => {
        this.authService.getToken().subscribe((token: NbAuthJWTToken) => {
          if (token.isValid()) {
            // this.permissions = token.getPayload().permissions;
            this.permissions = {
              user: {
                view: ['auto', 'hr'],
              },
              moderator: {
                parent: 'user',
                create: 'auto',
              },
              admin: {
                parent: 'moderator',
                create: 'hr',
                remove: '*',
              },
            };
            console.log(this.permissions);
            this.nbAclService.setAccessControl(this.permissions);
          }
        });
        if (!authenticated) {
          this.router.navigate(['auth/login']);
        }
      })
    );
  }
}
