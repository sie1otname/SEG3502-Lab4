import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Data } from '../data';

@Component({
  selector: 'app-res',
  imports: [RouterLink],
  templateUrl: './res.html'
})
export class Res {
  data = inject(Data);
}
