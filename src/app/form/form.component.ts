import { Router } from '@angular/router';
import * as userActions from '../form/state/actions';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PaymentServiceService } from '../payment-service.service';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { User } from '../user.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  userForm: FormGroup = new FormGroup({});
 paymentSubscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder,
              private payService: PaymentServiceService,
              private toastr: ToastrService,
              private store: Store<any>,
              private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(1)]],
      lastName: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.minLength(11), Validators.maxLength(13)]],
      monthlyAdvertBudget: ['', [Validators.required]]
    });
  }

  submit(): void {

    this.paymentSubscription = this.payService.makePayment(this.userForm.value).subscribe({
      next: (data: User) => {
        console.log(data);

        // display a toast message for success
        this.toastr.success(`User with email ${data.email} added successfully`, 'SUCCESS');

        // store the new user in the ngrx store
        this.store.dispatch(new userActions.StoreUser(data));

        // go to home
        this.router.navigate(['/']);
      },
      error: (e) => {
        console.log(e);
        this.toastr.success(`There was an error processing your request`, 'ERROR');
      }
    });
  }

  ngOnDestroy(): void {
    this.paymentSubscription.unsubscribe();
  }
}

