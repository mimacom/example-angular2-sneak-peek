import {Component, OnInit} from "angular2/core";
import {Hero} from "./../hero";
import {HeroDetailComponent} from "./../hero-detail/hero-detail.component.ts";
import {HeroService} from "./../hero.service.ts";
import {Router} from "angular2/router";

@Component({
    selector: 'heroes',
    styles: [require('./heroes.component.scss')],
    template: require('./heroes.component.html'),
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {

    public selectedHero:Hero;
    public heroes:Hero[];

    constructor(private _heroService:HeroService, private _router:Router) {
    }

    public onSelect(hero:Hero) {
        this.selectedHero = hero;
    }

    public getHeroes():void {
        this._heroService.getHeroes().then((heroes:Hero[]) => {
            this.heroes = heroes;
        });
    }

    public ngOnInit():any {
        this.getHeroes();
    }

    public goToDetail():void {
        let link = ['HeroDetail', {id: this.selectedHero.id}];
        this._router.navigate(link);
    }
}
