import {Component} from "@angular/core";
import {Hero} from "./hero";
import "../style/main.scss";

@Component({
    selector: 'app',
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html'
})
export class AppComponent {

    title = 'Tour of Heroes';
    hero: Hero = {
        id: 1,
        name: 'Spoderman'
    };
}
