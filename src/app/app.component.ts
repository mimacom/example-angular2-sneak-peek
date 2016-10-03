import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import {HeroService} from "./hero.service";
import {HeroesComponent} from "./heroes/heroes.component.ts";
import {DashboardComponent} from "./dashboard/dashboard.component.ts";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component.ts";
import "../style/main.scss";

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    styles: [require('./app.component.scss')],
    directives: [HeroesComponent, ...ROUTER_DIRECTIVES],
    providers: [HeroService, ...ROUTER_PROVIDERS]
})
@RouteConfig([
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/hero/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    }
])
export class AppComponent {

    public title:string = 'Tour of Heroes';
}
