import { Component, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { getUserFromCookie } from './person/store/actions/user/user.actions';
import { personSelectUser } from './person/store/selectors/user/user.selectors';
import { AppState } from './store/reducers';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cliexec';
  user$: Observable<any> | undefined;

  destroyed = new Subject<void>();
  currentScreenSize: string | undefined;
  opened: boolean = false;
  isLoggedIn: boolean = false;

  // Create a map to display breakpoint names for demonstration purposes.
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'Small'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
  ]);

  constructor(
    private store: Store<AppState>,
    private router: Router,
    breakpointObserver: BreakpointObserver
  ) {
    this.store.dispatch(getUserFromCookie());
    this.user$ = this.store.pipe(select(personSelectUser));
    this.user$.pipe(takeUntil(this.destroyed)).subscribe((state: any) => {
      let user = state?.data?.user;
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });

    breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize =
              this.displayNameMap.get(query) ?? 'Unknown';
          }
        }
      });

    // Listen navigation
    this.router.events.subscribe((event) => {
      // close sidenav on routing
      if (this.opened) this.opened = false;
    });
  }

  receiveMenuEvent(event: any) {
    this.opened = !this.opened;
  }

  menuClose(event: any) {
    this.opened = false;
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
