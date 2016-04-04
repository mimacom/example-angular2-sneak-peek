import {Component, OnInit, Input} from "angular2/core";
import {Hero} from "./../hero";
import {HeroService} from "./../hero.service.ts";
import {RouteParams} from "angular2/router";

@Component({
    selector: 'hero-detail',
    template: require('./hero-detail.component.html')
})
export class HeroDetailComponent implements OnInit {

    @Input()
    public hero:Hero;

    constructor(private _heroService:HeroService, private _routeParams:RouteParams) {
    }

    public ngOnInit():any {
        let id:number = Number(this._routeParams.get('id'));
        this._heroService.getHero(id).then((hero:Hero) => {
            this.hero = hero;
        });
    }

    public onBack() {
        window.history.back();
    }
}
