import {Component} from "@angular/core";
import "../style/main.scss";

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    styles: [require('./app.component.scss')]
})
export class AppComponent {

    public title: string = 'Tour of Heroes';
}
