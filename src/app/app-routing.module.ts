import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsanonGuard } from './person/guards/isanon/isanon.guard';
import { IsloggedInGuard } from './person/guards/isloggedin/isloggedin.guard';

const routes: Routes = [
  // CORE
  {
    path: 'home',
    canActivate: [IsloggedInGuard],
    loadChildren: () =>
      import('./core/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'intro',
    canActivate: [IsanonGuard],
    loadChildren: () =>
      import('./core/intro/intro.module').then((m) => m.IntroModule),
  },

  // PERSON
  {
    path: 'signin',
    canActivate: [IsanonGuard],
    loadChildren: () =>
      import('./person/signin/signin.module').then((m) => m.SigninModule),
  },
  {
    path: 'signup',
    canActivate: [IsanonGuard],
    loadChildren: () =>
      import('./person/signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path: 'boarding',
    canActivate: [IsanonGuard],
    loadChildren: () =>
      import('./person/boarding/boarding.module').then((m) => m.BoardingModule),
  },
  {
    path: 'password-recovery',
    canActivate: [IsanonGuard],
    loadChildren: () =>
      import('./person/password-recovery/password-recovery.module').then(
        (m) => m.PasswordRecoveryModule
      ),
  },
  {
    path: 'validation',
    canActivate: [IsanonGuard],
    loadChildren: () =>
      import('./person/validation/validation.module').then(
        (m) => m.ValidationModule
      ),
  },
  {
    path: 'profile',
    canActivate: [IsloggedInGuard],
    loadChildren: () =>
      import('./person/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'security',
    canActivate: [IsloggedInGuard],
    loadChildren: () =>
      import('./person/security/security.module').then((m) => m.SecurityModule),
  },
  {
    path: 'notification',
    canActivate: [IsloggedInGuard],
    loadChildren: () =>
      import('./person/notification/notification.module').then(
        (m) => m.NotificationModule
      ),
  },

  // FEEDER
  {
    path: 'feeder',
    canActivate: [IsloggedInGuard],
    loadChildren: () =>
      import('./feeder/listing/listing.module').then((m) => m.ListingModule),
  },

  {
    path: 'feeder',
    canActivate: [IsloggedInGuard],
    loadChildren: () =>
      import('./feeder/broadcast/broadcast.module').then(
        (m) => m.BroadcastModule
      ),
  },

  {
    path: 'feeder',
    canActivate: [IsloggedInGuard],
    loadChildren: () =>
      import('./feeder/coupon/coupon.module').then((m) => m.CouponModule),
  },

  // DEFAULT
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
