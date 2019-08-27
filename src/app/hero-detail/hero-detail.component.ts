import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../model/Hero';
import { Location } from '@angular/common';

import { Store, select } from '@ngrx/store';

import { State } from '../state/app.state';
import * as heroActions from '../heroes/state/heroes.actions';
import * as fromHeroes from '../heroes/state/heroes.selector';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
   fcHeroName = new FormControl('');
   fcHeroId = new FormControl('');
  //  @Input() hero: Hero;

  constructor(
    private location: Location,
    private store: Store<State>) { }

  ngOnInit() {
    this.store.pipe(select(fromHeroes.getCurrentHero)).subscribe(
      currentHero => {
        this.fcHeroId.setValue(currentHero.id);
        this.fcHeroName.setValue(currentHero.name);
        // this.hero = currentHero;
      });

  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.store.dispatch(new heroActions.UpdateHero({name: this.fcHeroName.value, id: this.fcHeroId.value} as Hero));
    this.goBack();
  }
}
