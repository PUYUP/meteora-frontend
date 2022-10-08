import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadStat } from 'src/app/feeder/store/actions/stat/stat.actions';
import { selectStat } from 'src/app/feeder/store/selectors/stat/stat.selectors';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  stat$: Observable<any> | undefined;

  constructor(private store: Store<AppState>) {
    this.stat$ = this.store.pipe(select(selectStat));
  }

  ngOnInit(): void {
    this.store.dispatch(loadStat());
  }
}
