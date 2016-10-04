import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Hero} from "./../hero";
import {HeroService} from "./../hero.service";

@Component({
    selector: 'dashboard',
    template: require('./dashboard.component.html')
})
export class DashboardComponent implements OnInit {
    public heroes: Hero[];

    constructor(private heroService: HeroService, private router: Router) {
    }

    public ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }

    public goToDetail(hero: Hero): void {
        this.router.navigate(['/detail', hero.id]);
    }
}
