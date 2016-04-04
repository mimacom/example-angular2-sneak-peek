import {Injectable} from "angular2/core";
import {Hero} from "./Hero";
import {HEROES} from "./mock-heroes";

@Injectable()
export class HeroService {

    public getHeroes():Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
}
