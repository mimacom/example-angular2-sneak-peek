import {Component, OnInit} from "angular2/core";
import {Hero} from "./hero";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroService} from "./hero.service";

@Component({
    selector: 'app',
    styles: [require('./app.component.scss')],
    template: require('./app.component.html'),
    directives: [HeroDetailComponent],
    providers: [HeroService]
})
export class AppComponent implements OnInit {

    public title:string = 'Tour of Heroes';
    public selectedHero:Hero;
    public heroes:Hero[];

    constructor(private _heroService:HeroService) {
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
}
