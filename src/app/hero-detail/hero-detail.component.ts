import {Component, OnInit, Input} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import {HeroService} from "./../hero.service";
import {Hero} from "./../hero";

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {

    @Input()
    public hero: Hero;

    constructor(private heroService: HeroService,
                private route: ActivatedRoute,
                private location: Location) {
    }

    public ngOnInit(): any {
        this.route.params.forEach((params: Params) => {
            let id = Number(params['id']);
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }

    public goBack() {
        this.location.back();
    }
}
