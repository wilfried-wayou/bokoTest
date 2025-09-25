import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Button} from 'primeng/button';
import {IconField} from 'primeng/iconfield';
import {Badge} from 'primeng/badge';
import { BadgeModule } from 'primeng/badge';
import {OverlayBadge, OverlayBadgeModule} from 'primeng/overlaybadge';
import {Header} from './header/header';
import {Chip} from 'primeng/chip';
import {Card} from 'primeng/card';
import {Post} from './post/post_model';
import {PostState} from './post/post_model';
import {PostComponent} from './post/post';
@Component({
  selector: 'app-root',
  imports: [Button ,Header, PostComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  items: Post[] = [
    {
    id: 'p1',
    createdAt: '2024-08-10',
    sourceCountry: 'Canada',
    sourceAmount: 3000,
    sourceCurrency: 'CAD',
    targetCountry: 'Cameroun',
    targetAmount: 1395000,
    targetCurrency: 'XAF',
    rate: 465,
    applicantsCount: 2,
    state: PostState.Available,
  },
    {
      id: 'p2',
      createdAt: '2024-09-15',
      sourceCountry: 'USA',
      sourceAmount: 5000,
      sourceCurrency: 'USD',
      targetCountry: 'Nigeria',
      targetAmount: 4250000,
      targetCurrency: 'NGN',
      rate: 850,
      applicantsCount: 3,
      state: PostState.Pending,
    },
    {
      id: 'p3',
      createdAt: '2024-09-20',
      sourceCountry: 'France',
      sourceAmount: 2000,
      sourceCurrency: 'EUR',
      targetCountry: 'Senegal',
      targetAmount: 1310000,
      targetCurrency: 'XOF',
      rate: 655,
      applicantsCount: 0,
      state: PostState.Available,
    },
    {
      id: 'p4',
      createdAt: '2024-09-22',
      sourceCountry: 'UK',
      sourceAmount: 3500,
      sourceCurrency: 'GBP',
      targetCountry: 'Ghana',
      targetAmount: 52500,
      targetCurrency: 'GHS',
      rate: 15,
      applicantsCount: 1,
      state: PostState.Completed,
    },
    {
      id: 'p5',
      createdAt: '2024-09-23',
      sourceCountry: 'Australia',
      sourceAmount: 4000,
      sourceCurrency: 'AUD',
      targetCountry: 'Kenya',
      targetAmount: 420000,
      targetCurrency: 'KES',
      rate: 105,
      applicantsCount: 2,
      state: PostState.Available,
    },
    {
      id: 'p6',
      createdAt: '2024-09-24',
      sourceCountry: 'Germany',
      sourceAmount: 2500,
      sourceCurrency: 'EUR',
      targetCountry: 'Morocco',
      targetAmount: 27500,
      targetCurrency: 'MAD',
      rate: 11,
      applicantsCount: 0,
      state: PostState.Available,
    },
    {
      id: 'p7',
      createdAt: '2024-09-24',
      sourceCountry: 'Switzerland',
      sourceAmount: 6000,
      sourceCurrency: 'CHF',
      targetCountry: 'Ivory Coast',
      targetAmount: 3930000,
      targetCurrency: 'XOF',
      rate: 655,
      applicantsCount: 4,
      state: PostState.Pending,
    },
    {
      id: 'p8',
      createdAt: '2024-09-25',
      sourceCountry: 'Belgium',
      sourceAmount: 1500,
      sourceCurrency: 'EUR',
      targetCountry: 'DRC',
      targetAmount: 3750000,
      targetCurrency: 'CDF',
      rate: 2500,
      applicantsCount: 1,
      state: PostState.Available,
    },
    {
      id: 'p9',
      createdAt: '2024-09-25',
      sourceCountry: 'Japan',
      sourceAmount: 50000,
      sourceCurrency: 'JPY',
      targetCountry: 'Ethiopia',
      targetAmount: 18500,
      targetCurrency: 'ETB',
      rate: 0.37,
      applicantsCount: 0,
      state: PostState.Cancelled,
    },
    {
      id: 'p10',
      createdAt: '2024-09-25',
      sourceCountry: 'UAE',
      sourceAmount: 10000,
      sourceCurrency: 'AED',
      targetCountry: 'Tunisia',
      targetAmount: 31000,
      targetCurrency: 'TND',
      rate: 3.1,
      applicantsCount: 2,
      state: PostState.Available,
    },
    {
      id: 'p11',
      createdAt: '2024-09-25',
      sourceCountry: 'Saudi Arabia',
      sourceAmount: 8000,
      sourceCurrency: 'SAR',
      targetCountry: 'Egypt',
      targetAmount: 64000,
      targetCurrency: 'EGP',
      rate: 8,
      applicantsCount: 1,
      state: PostState.Available,
    }
  ];

  protected readonly title = signal('bokoTest');
}
