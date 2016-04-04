import {Component, OnInit} from "angular2/core";
import {Hero} from "./../hero";
import {HeroService} from "./../hero.service.ts";
import {Router} from "angular2/router";

@Component({
    selector: 'dashboard',
    template: require('./dashboard.component.html')
})
export class DashboardComponent implements OnInit {
    public heroes:Hero[];

    constructor(private _heroService:HeroService, private _router:Router) {
    }

    public ngOnInit():any {
        this._heroService.getHeroes().then((heroes:Hero[]) => {
            this.heroes = heroes.slice(1, 5);
        });
    }

    public goToDetail(hero:Hero):void {
        let link = ['HeroDetail', {id: hero.id}];
        this._router.navigate(link);
    }
}
