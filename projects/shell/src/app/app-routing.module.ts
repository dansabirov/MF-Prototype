import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // Your route here:

  {
    path: 'profile',
    loadChildren: () => loadRemoteModule({
        remoteEntry: 'http://localhost:4203/remoteEntry.js',
        remoteName: 'partViews',
        exposedModule: './Module'
      })
      .then(m => m.ProfileModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
