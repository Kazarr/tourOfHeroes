import { Action } from '@ngrx/store';
import { Hero } from 'src/app/hero';


export enum HeroActionTypes {
  GetHeroes = '[Heores] Get heroes',
  GetHeroesSuccess = '[Heroes] Get heroes Success',
  GetHeroesFailed = '[Heroes] Get heroes Failed',
  InitializeHero = '[Heroes] Initialize hero',
  DeleteHero = '[Heroes] Delete hero',
  DeleteHeroSuccess = '[Heroes] Delete hero Success',
  DeleteHeroFailed = '[Heroes] Delete hero Failed',
  SetCurrentHero = '[Heroes] Set Current Hero',
  SaveHeroSuccess = '[Heroes] Save Hero Success',
  SaveHeroFailed = '[Heroes] Save Hero Failed',
  SaveHero = '[Heroes] Save hero',
  UpdateHero = '[Heroes] Update hero',
  UpdateHeroSuccess = '[Heroes] Update hero Success',
  UpdateHeroFailed = '[Heroes] Update hero Failed'
}

export class GetHeroes implements Action {
  readonly type = HeroActionTypes.GetHeroes;
}

export class GetHeroesSuccess implements Action {
  readonly type = HeroActionTypes.GetHeroesSuccess;

  constructor(public paylaod: Hero[]) { }
}

export class GetHeroesFailed implements Action {
  readonly type = HeroActionTypes.GetHeroesFailed;

  constructor(public payload: string) { }
}

export class InitializeHero implements Action {
  readonly type = HeroActionTypes.InitializeHero;
}

export class DeleteHero implements Action {
  readonly type = HeroActionTypes.DeleteHero;

  constructor(public payload: Hero) { }
}

export class DeleteHeroSuccess implements Action {
  readonly type = HeroActionTypes.DeleteHeroSuccess;

  constructor(public payload: Hero) { }
}

export class DeleteHeroFailed implements Action {
  readonly type = HeroActionTypes.DeleteHeroFailed;

  constructor(public payload: string) { }
}

export class SetCurrentHero implements Action {
  readonly type = HeroActionTypes.SetCurrentHero;

  constructor(public payload: Hero) { }
}

export class SaveHero implements Action {
  readonly type = HeroActionTypes.SaveHero;
  constructor(public payload: string) { }
}

export class SaveHeroSuccess implements Action {
  readonly type = HeroActionTypes.SaveHeroSuccess;
  constructor(public payload: Hero) { }
}

export class SaveHeroFailed implements Action {
  readonly type = HeroActionTypes.SaveHeroFailed;
  constructor(public payload: string) { }
}

export class UpdateHero implements Action {
  readonly type = HeroActionTypes.UpdateHero;
  constructor(public payload: Hero) { }
}

export class UpdateHeroSuccess implements Action {
  readonly type = HeroActionTypes.UpdateHeroSuccess;
  constructor(public payload: Hero) { }
}

export class UpdateHeroFailed implements Action {
  readonly type = HeroActionTypes.UpdateHeroFailed;
  constructor(public payload: string) { }
}

export type HeroActions = GetHeroes
  | GetHeroesSuccess
  | GetHeroesFailed
  | InitializeHero
  | DeleteHero
  | DeleteHeroSuccess
  | DeleteHeroFailed
  | SetCurrentHero
  | SaveHero
  | SaveHeroSuccess
  | SaveHeroFailed
  | UpdateHero
  | UpdateHeroSuccess
  | UpdateHeroFailed;
