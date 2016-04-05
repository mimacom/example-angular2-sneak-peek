import {Component} from "angular2/core";
import {Hero} from "./hero";

@Component({
    selector: 'app',
    styles: [require('./app.component.scss')],
    template: require('./app.component.html')
})
export class AppComponent {

    public title:string = 'Tour of Heroes';
    public hero:Hero = new Hero(1, 'Spiderman');
}
