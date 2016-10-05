import {Component, OnInit} from "@angular/core";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import "../style/main.scss";

@Component({
    selector: 'app',
    styles: [require('./app.component.scss')],
    template: require('./app.component.html'),
    providers: [HeroService]
})
export class AppComponent implements OnInit {

    title = 'Tour of Heroes';
    selectedHero: Hero;
    heroes: Hero[];

    constructor(private heroService: HeroService) {
    }

    public onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    public getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    public ngOnInit(): void {
        this.getHeroes();
    }
}
