import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { getShowProductCode } from '../form/state/user.reducer';
import { User } from '../user.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  nextPage = true;
  currentUser!: User;
  constructor(private router: Router, private store: Store<any>) {
    this.store.pipe(select(getShowProductCode)).subscribe((user) => {
      this.currentUser = user;
      console.log(this.currentUser);
    });
   }

  ngOnInit(): void {
  }
  toNewPage(): void {
    this.router.navigate(['/', 'form']);
    this.nextPage = false;
  }
}
