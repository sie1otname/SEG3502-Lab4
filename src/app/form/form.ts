import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Data } from '../data';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.html'
})
export class Form {
  fb = inject(FormBuilder);
  nav = inject(Router);
  data = inject(Data);

  form = this.fb.nonNullable.group({
    pren: ['', Validators.required],
    nom: ['', Validators.required],
    tel: ['', Validators.pattern('^[1-9][0-9]{2}[1-9][0-9]{6}$')],
    mail: ['', Validators.email]
  });

  send(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.data.info = this.form.getRawValue();
    this.nav.navigate(['/resultat']);
  }
}
