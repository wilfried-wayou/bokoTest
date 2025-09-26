import {Component, Input} from '@angular/core';
import {OverlayBadge} from 'primeng/overlaybadge';
import {Post, PostState} from './post_model';
import {DatePipe, DecimalPipe, NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [
    OverlayBadge,
    NgIf,
    NgClass,
    DecimalPipe,
    DatePipe
  ],
  templateUrl: './post.html',
  styleUrl: './post.css'
})
export class PostComponent {
  @Input({ required: true }) post!: Post;


  get isAvailable(): boolean {
    return this.post?.state === PostState.Available;
  }

  get stateLabel(): string {
    return this.post?.state ?? PostState.Pending;
  }

  // Tailwind badge color class by state
  get stateBadgeClass(): string {
    switch (this.post?.state) {
      case PostState.Available:
        return 'bg-[#0B6BBF] text-white';
      case PostState.Pending:
        return 'bg-yellow-500 text-white';
      case PostState.Completed:
        return 'bg-emerald-600 text-white';
      case PostState.Cancelled:
        return 'bg-gray-400 text-white';
      default:
        return 'bg-gray-300 text-gray-800';
    }
  }

  // Icon color by state (optional)
  get userIconColor(): string {
    if (this.isAvailable) return 'text-red-500';
    if (this.post?.state === PostState.Pending) return 'text-yellow-500';
    if (this.post?.state === PostState.Completed) return 'text-emerald-600';
    return 'text-gray-400';
  }

}
