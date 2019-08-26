import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import * as heroActions from './heroes.actions';
import { mergeMap, map, catchError, concatMap, merge } from 'rxjs/operators';
import { HeroService } from '../../hero.service';


@Injectable()
export class HeroesEffects {
  constructor(
    private actions$: Actions,
    private heroService: HeroService) { }

  @Effect()
  loadHeroes$: Observable<Action> = this.actions$.pipe(
    ofType(heroActions.HeroActionTypes.GetHeroes),
    mergeMap(action => this.heroService.getHeroes().pipe(
      map(heroes => (new heroActions.GetHeroesSuccess(heroes))),
      catchError((err: string) => of(new heroActions.GetHeroesFailed(err)))
    ))
  );

  @Effect()
  saveHero$: Observable<Action> = this.actions$.pipe(
    ofType(heroActions.HeroActionTypes.SaveHero),
    mergeMap((action: heroActions.SaveHero) =>
      this.heroService.addHero(action.payload).pipe(
        map(hero => (new heroActions.SaveHeroSuccess(hero))),
        catchError((err: string) => of(new heroActions.SaveHeroFailed(err)))
      ))
  );

  @Effect()
  deleteHero$: Observable<Action> = this.actions$.pipe(
    ofType(heroActions.HeroActionTypes.DeleteHero),
    mergeMap((action: heroActions.DeleteHero) =>
      this.heroService.deleteHero(action.payload).pipe(
        map(hero => (new heroActions.DeleteHeroSuccess(action.payload)),
        catchError((err: string) => of(new heroActions.DeleteHeroFailed(err))))
      ))
  );

  @Effect()
  updateHero$: Observable<Action> = this.actions$.pipe(
    ofType(heroActions.HeroActionTypes.UpdateHero),
    mergeMap((action: heroActions.UpdateHero) =>
    this.heroService.updateHero(action.payload).pipe(
      map(hero => (new heroActions.UpdateHeroSuccess(action.payload)),
      catchError((err: string) => of(new heroActions.UpdateHeroFailed(err))))
    ))
  );
}
