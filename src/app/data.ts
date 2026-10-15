import { Injectable } from '@angular/core';

export interface Info {
  pren: string;
  nom: string;
  tel: string;
  mail: string;
}

@Injectable({ providedIn: 'root' })
export class Data {
  info: Info | null = null;
}
