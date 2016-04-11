import {Injectable} from "angular2/core";
import {Hero} from "./Hero";
import {HEROES} from "./mock-heroes";

@Injectable()
export class HeroService {

    public getHeroes():Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHero(id:number):Promise<Hero> {
        return Promise.resolve(HEROES.filter((hero) => hero.id === id)[0]);
    }

    removeHero(hero:Hero):void {
        HEROES.splice(HEROES.indexOf(hero), 1);
    }
}
