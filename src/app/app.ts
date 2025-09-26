import {Component, signal, WritableSignal} from '@angular/core';
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
import {MenuBar} from './menu-bar/menu-bar';
import {Dialog} from 'primeng/dialog';
import {InputText} from 'primeng/inputtext';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {InputNumber} from 'primeng/inputnumber';
import {Select} from 'primeng/select';
@Component({
  selector: 'app-root',
  imports: [Button, Header, PostComponent, MenuBar, Dialog, InputText, ReactiveFormsModule, DatePipe, InputNumber, Select],
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
  visible:  WritableSignal<boolean> = signal(false);
  today: Date;
  postForm: FormGroup;
  currencies: any[] | undefined = [
    {label: 'US Dollar', value: 'USD'},
    {label: 'Euro', value: 'EUR'},
    {label: 'British Pound', value: 'GBP'},
    {label: 'Japanese Yen', value: 'JPY'},
    {label: 'Canadian Dollar', value: 'CAD'},
    {label: 'Australian Dollar', value: 'AUD'},
    {label: 'Swiss Franc', value: 'CHF'},
    {label: 'Chinese Yuan', value: 'CNY'},
    {label: 'CFA Franc', value: 'XAF'},
    {label: 'West African CFA Franc', value: 'XOF'},
    {label: 'Nigerian Naira', value: 'NGN'},
    {label: 'Ghanaian Cedi', value: 'GHS'},
    {label: 'Kenyan Shilling', value: 'KES'},
    {label: 'Moroccan Dirham', value: 'MAD'},
    {label: 'Congolese Franc', value: 'CDF'},
    {label: 'Ethiopian Birr', value: 'ETB'},
    {label: 'Tunisian Dinar', value: 'TND'},
    {label: 'Egyptian Pound', value: 'EGP'},
    {label: 'UAE Dirham', value: 'AED'},
    {label: 'Saudi Riyal', value: 'SAR'}
  ];
  countries: any[] | undefined = [

    {label: 'Canada', value: 'Canada'},
    {label: 'France', value: 'France'},
    {label: 'Germany', value: 'Germany'},
    {label: 'UK', value: 'UK'},
    {label: 'USA', value: 'USA'},
    {label: 'Switzerland', value: 'Switzerland'},
    {label: 'Belgium', value: 'Belgium'},
    {label: 'Japan', value: 'Japan'},
    {label: 'UAE', value: 'UAE'},
    {label: 'Saudi Arabia', value: 'Saudi Arabia'}
  ];
  postStates: any[] | undefined = [
    {label: 'Available', value: 'Available'},
    {label: 'Pending', value: 'Pending'},
    {label: 'Completed', value: 'Completed'},
    {label: 'Cancelled', value: 'Cancelled'}
  ];

  constructor(private fb: FormBuilder) {
    this.today = new Date();
    this.postForm = this.fb.group({
      sourceCountry: ['', Validators.required],
      sourceAmount: [0, [Validators.required, Validators.min(0)]],
      sourceCurrency: ['', Validators.required],
      targetCountry: ['', Validators.required],
      targetAmount: [0, [Validators.required, Validators.min(0)]],
      targetCurrency: ['', Validators.required],
      rate: [0, [Validators.required, Validators.min(0)]],
      applicantsCount: [0, [Validators.min(0)]],
      state: ['', Validators.required]
    });

  }

  showDialog() {
    this.visible.set(!this.visible())
  }
  hasError(controlName: string): boolean {
    const c = this.postForm.get(controlName);
    return !!(c && c.invalid && (c.dirty || c.touched));
  }

  onSubmit() {
    if (this.postForm.valid) {
      const newPost: Post = {
        id: `p${this.items.length + 1}`,
        createdAt: this.today.toISOString().split('T')[0],
        sourceCurrency: this.postForm.get('sourceCurrency')?.value,
        sourceAmount: this.postForm.get('sourceAmount')?.value,
        sourceCountry: this.postForm.get('sourceCountry')?.value,
        targetCurrency: this.postForm.get('targetCurrency')?.value,
        targetAmount: this.postForm.get('targetAmount')?.value,
        targetCountry: this.postForm.get('targetCountry')?.value,
        rate: this.postForm.get('rate')?.value,
        applicantsCount: 0,
        state: PostState.Available
      };
      this.items.push(newPost);
      this.postForm.reset();
      this.visible.set(false);
    }
  }

  onCancel() {
    this.postForm.reset();
    this.visible.set(false);
  }
}
