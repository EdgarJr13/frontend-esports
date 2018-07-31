import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule ({
    imports: [RouterModule.forRoot(appRoutes,
    { preloadingStrategy: PreloadAllModules, enableTracing: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}