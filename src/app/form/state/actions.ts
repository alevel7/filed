import { User } from 'src/app/user.model';
import { Action } from '@ngrx/store';


export const ADD_USER = 'add user';
export const GET_USER = 'get user';


export class StoreUser implements Action {
  readonly type = ADD_USER;

  constructor(public payload?: User) { }
}

// export StoreUser ;
