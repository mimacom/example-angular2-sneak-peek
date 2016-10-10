import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Hero} from "./../hero";
import {HeroService} from "./../hero.service";

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    heroes: Hero[];

    constructor(private heroService: HeroService, private router: Router) {
    }

    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }

    goToDetail(hero: Hero): void {
        this.router.navigate(['/detail', hero.id]);
    }
}
