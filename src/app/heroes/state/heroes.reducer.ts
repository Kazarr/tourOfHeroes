import { Hero } from 'src/app/hero';
import { HeroActions, HeroActionTypes } from './heroes.actions';

export interface HeroState {
  currentHero: Hero;
  heroes: Hero[];
}

const initialState: HeroState = {
  currentHero: null,
  heroes: []
};

export function reducer(state = initialState, action: HeroActions): HeroState {
  switch (action.type) {

    case HeroActionTypes.SetCurrentHero:
      return {
        ...state,
        currentHero: { ...action.payload }
      };

    case HeroActionTypes.GetHeroes:
      return {
        ...state,
        heroes: action.payload
      };

    case HeroActionTypes.InitializeHero:
      return {
        ...state,
        currentHero: {
          id: 0,
          name: 'DefaulHero'
        }
      };

    case HeroActionTypes.DeleteHero:
      return {
        ...state,
        heroes: [...state.heroes].filter(hero => hero.id !== action.payload.id)
      };

    case HeroActionTypes.SaveHero:
      return {
        ...state,
        heroes: [...state.heroes, action.payload]
      };

    default:
      return state;
  }
}

