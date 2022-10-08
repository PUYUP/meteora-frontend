import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BroadcastDetailComponent } from './components/broadcast-detail/broadcast-detail.component';
import { BroadcastListComponent } from './components/broadcast-list/broadcast-list.component';
import { BroadcastPickSuggestComponent } from './components/broadcast-pick-suggest/broadcast-pick-suggest.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'broadcast',
        children: [
          {
            path: '',
            children: [
              {
                path: '',
                component: BroadcastListComponent,
              },
              {
                path: 'create',
                component: BroadcastPickSuggestComponent,
              },
              {
                path: ':broadcast_uuid',
                component: BroadcastDetailComponent,
              },
            ],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BroadcastRoutingModule {}
