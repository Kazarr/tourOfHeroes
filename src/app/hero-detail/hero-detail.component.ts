import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Store, select } from '@ngrx/store';

import { State } from '../state/app.state';
import * as heroActions from '../heroes/state/heroes.actions';
import * as fromHeroes from '../heroes/state/heroes.selector';

import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private store: Store<State>) { }

  ngOnInit() {
    this.store.pipe(select(fromHeroes.getCurrentHero)).subscribe(
      currentHero => this.hero = currentHero
    );

  }
  // getHero():void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.heroService.getHero(id)
  //   .subscribe(hero => this.hero = hero);
  // }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero).subscribe(
      () => {this.store.dispatch(new heroActions.UpdateHero(this.hero));
             this.goBack();
      }
    );
  }
}
