import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { State } from '../state/app.state';
import * as fromHeroes from '../heroes/state/heroes.selector';
import * as heroActions from '../heroes/state/heroes.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService,
              private store: Store<State>) { }

  ngOnInit() {
    this.store.pipe(select(fromHeroes.getHeroes)).subscribe(
      heroes => this.heroes = heroes.slice(1, 5)
    );

    if (Boolean(this.heroes)) {
      this.getHeroes();
    }
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  onClick(hero: Hero) {
    this.store.dispatch(new heroActions.SetCurrentHero(hero));
  }
}
