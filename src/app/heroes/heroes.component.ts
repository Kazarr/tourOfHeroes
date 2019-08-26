import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';
import { Store, select } from '@ngrx/store';
import { ThrowStmt } from '@angular/compiler';
import { State } from '../state/app.state';
import * as fromHeroes from './state/heroes.selector';
import * as heroActions from './state/heroes.actions';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];


  constructor(
    private heroService: HeroService,
    private store: Store<State>) { }

  ngOnInit() {
    this.refreshHeroesFromState();
  }

  refreshHeroesFromState() {
    this.store.dispatch(new heroActions.GetHeroes());
    this.store.pipe(select(fromHeroes.getHeroes)).subscribe(
      fetchedHeroes => this.heroes = fetchedHeroes
    );
  }

  onClick(hero: Hero) {
    this.store.dispatch(new heroActions.SetCurrentHero(hero));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.store.dispatch(new heroActions.SaveHero(name));
  }

  delete(hero: Hero): void {
    this.store.dispatch(new heroActions.DeleteHero(hero));
  }
}
