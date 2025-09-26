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
import {Post} from './post/post';
@Component({
  selector: 'app-root',
  imports: [Button, IconField, Badge, OverlayBadge, Header, Chip, Card, Post],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bokoTest');
}
