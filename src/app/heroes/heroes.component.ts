import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Hero} from "./../hero";
import {HeroService} from "./../hero.service";

@Component({
    selector: 'heroes',
    styles: [require('./heroes.component.scss')],
    template: require('./heroes.component.html')
})
export class HeroesComponent implements OnInit {

    selectedHero: Hero;
    heroes: Hero[];

    constructor(private heroService: HeroService, private router: Router) {
    }

    public onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    public getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    public ngOnInit(): void {
        this.getHeroes();
    }

    public goToDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
