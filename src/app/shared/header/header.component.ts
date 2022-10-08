import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { skip, takeUntil } from 'rxjs/operators';
import { UserService } from 'src/app/person/services/user/user.service';
import { signoutUser } from 'src/app/person/store/actions/user/user.actions';
import { personSelectUser } from 'src/app/person/store/selectors/user/user.selectors';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() menuEvent = new EventEmitter<any>();

  user$: Observable<any> | undefined;
  loading: boolean = false;

  destroyed = new Subject<void>();
  currentScreenSize: string | undefined;
  opened: boolean = false;

  // Create a map to display breakpoint names for demonstration purposes.
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'Small'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
  ]);

  constructor(
    private store: Store<AppState>,
    private actionListener$: ActionsSubject,
    private userService: UserService,
    breakpointObserver: BreakpointObserver
  ) {
    this.user$ = this.store.pipe(select(personSelectUser));

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
  }

  ngOnInit(): void {
    this.actionListener$
      .pipe(
        skip(1) // optional: skips initial logging done by ngrx
      )
      .subscribe((action: any) => {
        this.loading = true;
        let type: string = action.type.toLocaleLowerCase();

        if (
          (type.includes('success') && action?.data) ||
          (type.includes('failure') && action?.error) ||
          type.includes('reset') ||
          action.type === signoutUser.type
        ) {
          this.loading = false;
        }
      });
  }

  signout(): void {
    this.store.dispatch(signoutUser());
  }

  closeMenu() {
    this.opened = !this.opened;
    this.menuEvent.emit({ opened: this.opened });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
