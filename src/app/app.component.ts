import {Component} from "@angular/core";
import {Hero} from "./hero";
import "../style/main.scss";

@Component({
    selector: 'app',
    styles: [require('./app.component.scss')],
    template: require('./app.component.html')
})
export class AppComponent {

    title = 'Tour of Heroes';
    hero: Hero = {
        id: 1,
        name: 'Spoderman'
    };
}
