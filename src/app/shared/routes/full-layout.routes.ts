import { Routes, RouterModule } from '@angular/router';
import { UserAuthGuard } from '../guards/user-auth.guard';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../full-layout/dashboard/dashboard.module').then(m => m.DashboardModule),
    canLoad: [UserAuthGuard],
  },
  {
    path: 'assigned-to-me',
    loadChildren: () => import('../../full-layout/assigned-to-me/assigned-to-me.module').then(m => m.AssignedToMeModule),
    canLoad: [UserAuthGuard],
  },  {
    path: 'history',
    loadChildren: () => import('../../full-layout/history/history.module').then(m => m.HistoryModule),
    canLoad: [UserAuthGuard],
  }
];
