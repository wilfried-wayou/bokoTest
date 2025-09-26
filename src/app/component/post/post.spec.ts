import { ComponentFixture, TestBed } from '@angular/core/testing';



// post.spec.ts
import { PostComponent } from './post';
import { Post, PostState } from './post_model';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let host: HTMLElement;

  const makePost = (overrides: Partial<Post> = {}): Post => ({
    id: 'pX',
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
    ...overrides,
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostComponent], // standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    host = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    component.post = makePost();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should compute isAvailable and stateLabel correctly', () => {
    component.post = makePost({ state: PostState.Available });
    expect(component.isAvailable).toBeTrue();
    expect(component.stateLabel).toBe('Available');

    component.post = makePost({ state: PostState.Pending });
    expect(component.isAvailable).toBeFalse();
    expect(component.stateLabel).toBe('Pending');

    component.post = makePost({ state: PostState.Completed });
    expect(component.isAvailable).toBeFalse();
    expect(component.stateLabel).toBe('Completed');

    component.post = makePost({ state: PostState.Cancelled });
    expect(component.isAvailable).toBeFalse();
    expect(component.stateLabel).toBe('Cancelled');
  });

  it('should return correct stateBadgeClass per state', () => {
    component.post = makePost({ state: PostState.Available });
    expect(component.stateBadgeClass).toContain('bg-[#0B6BBF]');
    expect(component.stateBadgeClass).toContain('text-white');

    component.post = makePost({ state: PostState.Pending });
    expect(component.stateBadgeClass).toContain('bg-yellow-500');

    component.post = makePost({ state: PostState.Completed });
    expect(component.stateBadgeClass).toContain('bg-emerald-600');

    component.post = makePost({ state: PostState.Cancelled });
    expect(component.stateBadgeClass).toContain('bg-gray-400');
  });

  it('should return correct userIconColor per state', () => {
    component.post = makePost({ state: PostState.Available });
    expect(component.userIconColor).toBe('text-red-500');

    component.post = makePost({ state: PostState.Pending });
    expect(component.userIconColor).toBe('text-yellow-500');

    component.post = makePost({ state: PostState.Completed });
    expect(component.userIconColor).toBe('text-emerald-600');

    component.post = makePost({ state: PostState.Cancelled });
    expect(component.userIconColor).toBe('text-gray-400');
  });

  it('should render label, date, amounts, and rate line', () => {
    component.post = makePost({
      createdAt: '2024-08-10',
      sourceCountry: 'Canada',
      sourceAmount: 3000,
      sourceCurrency: 'CAD',
      targetCountry: 'Cameroun',
      targetAmount: 1395000,
      targetCurrency: 'XAF',
      rate: 465,
      state: PostState.Available,
    });
    fixture.detectChanges();

    // Badge text = state label
    const badge = host.querySelector('div[ngclass]') || host.querySelector('div');
    expect(host.textContent).toContain('Available');

    // Date is formatted dd/MM/yyyy
    expect(host.textContent).toContain('10/08/2024');

    // Source/Target rendering
    expect(host.textContent).toContain('Canada -');
    expect(host.textContent).toContain('3,000 CAD'); // DecimalPipe formatting
    expect(host.textContent).toContain('Cameroun - 1,395,000 XAF');

    // Rate line
    expect(host.textContent).toContain('1 CAD = 465 XAF');
  });

  it('should show the arrow when state is Available', () => {
    component.post = makePost({ state: PostState.Available });
    fixture.detectChanges();

    const arrow = host.querySelector('i.pi.pi-reply');
    expect(arrow).toBeTruthy();

    // Target span class should include the blue color when available
    const targetSpan = host.querySelector('span.text-\\[0\\.7rem\\]');
    expect(targetSpan?.className).toContain('text-[#0B6BBF]');
  });

  it('should not show the arrow when state is not Available', () => {
    component.post = makePost({ state: PostState.Pending });
    fixture.detectChanges();

    const arrow = host.querySelector('i.pi.pi-reply');
    expect(arrow).toBeFalsy();

    // Target span should have gray class when not available
    const targetSpan = host.querySelector('span.text-\\[0\\.7rem\\]');
    expect(targetSpan?.className).toContain('text-gray-400');
  });

  it('should show applicants overlay badge when applicantsCount > 0', () => {
    component.post = makePost({ applicantsCount: 2 });
    fixture.detectChanges();

    const overlay = host.querySelector('p-overlay-badge');
    expect(overlay).toBeTruthy();

    // Fallback icon should not appear
    const fallback = host.querySelector('i.pi.pi-user.text-gray-300');
    expect(fallback).toBeFalsy();
  });

  it('should show fallback user icon when applicantsCount = 0', () => {
    component.post = makePost({ applicantsCount: 0 });
    fixture.detectChanges();

    const overlay = host.querySelector('p-overlay-badge');
    expect(overlay).toBeFalsy();

    const fallback = host.querySelector('i.pi.pi-user.text-gray-300');
    expect(fallback).toBeTruthy();
  });
});
