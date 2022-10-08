import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { loadSuggest } from 'src/app/feeder/store/actions/suggest/suggest.actions';
import { selectSuggest } from 'src/app/feeder/store/selectors/suggest/suggest.selectors';
import { AppState } from 'src/app/store/reducers';
import { MatDialog } from '@angular/material/dialog';
import { InteractionEditorDialogComponent } from '../interaction-editor-dialog/interaction-editor-dialog.component';

@Component({
  selector: 'app-suggest-detail',
  templateUrl: './suggest-detail.component.html',
  styleUrls: ['./suggest-detail.component.css'],
})
export class SuggestDetailComponent implements OnInit {
  uuid: any;
  suggest$: Observable<any> | undefined;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private location: Location,
    private dialog: MatDialog
  ) {
    this.suggest$ = this.store.pipe(select(selectSuggest({ uuid: this.uuid })));
  }

  interactionDialog() {
    const dialogRef = this.dialog.open(InteractionEditorDialogComponent, {
      closeOnNavigation: true,
      disableClose: true,
      maxWidth: 450,
      maxHeight: '90vh',
      width: '450px',
      data: {
        suggest_uuid: this.uuid,
      },
    });
  }

  ngOnInit(): void {
    this.uuid = this.route.snapshot.paramMap.get('uuid');
    this.store.dispatch(loadSuggest({ uuid: this.uuid }));
  }

  leaveRespond() {
    this.interactionDialog();
  }

  back(): void {
    this.location.back();
  }
}
