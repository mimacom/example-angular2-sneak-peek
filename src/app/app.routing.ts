import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {HeroesComponent} from "./heroes/heroes.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";

const appRoutes: Routes = [{
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
}, {
    path: 'heroes',
    component: HeroesComponent
}, {
    path: 'dashboard',
    component: DashboardComponent
}, {
    path: 'detail/:id',
    component: HeroDetailComponent
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
