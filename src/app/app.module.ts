import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {HeroService} from "./hero.service";
import {HeroesComponent} from "./heroes/heroes.component";
import {routing} from "./app.routing";
import {DashboardComponent} from "./dashboard/dashboard.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
