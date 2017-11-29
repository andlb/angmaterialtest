import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

const appRoutes: Routes = [
    { path: 'autocomplete', component: AutocompleteComponent}
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(appRoutes,
        {preloadingStrategy: PreloadAllModules})
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { }
