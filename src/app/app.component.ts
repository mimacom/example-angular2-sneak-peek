import {Component} from "@angular/core";
import "../style/main.scss";

@Component({
    selector: 'app',
    styles: [require('./app.component.scss')],
    template: require('./app.component.html')
})
export class AppComponent {
}
