import { Pipe, PipeTransform, OnDestroy, ChangeDetectorRef, NgZone } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  pure: false,
})
export class TimeAgoPipe implements PipeTransform, OnDestroy {
  private timer: number;

  constructor(private changeDetectorRef: ChangeDetectorRef, private ngZone: NgZone) {}

  transform(value: any): string|null {
    if (value == null || value === '' || value !== value) {
      return null;
    }

    this.removeTimer();

    const d = new Date(value);
    const now = new Date();
    const diff = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
    const timeToUpdate = (Number.isNaN(diff)) ? 1000 : this.getSecondsUntilUpdate(diff) * 1000;

    this.timer = this.ngZone.runOutsideAngular(() => {
      if (typeof window !== 'undefined') {
        return window.setTimeout(() => {
          this.ngZone.run(() => this.changeDetectorRef.markForCheck());
        }, timeToUpdate);
      }
      return null;
    });

    if (Number.isNaN(diff)) {
      return '';
    }

    const minutes = Math.round(Math.abs(diff / 60));
    const hours = Math.round(Math.abs(minutes / 60));
    const days = Math.round(Math.abs(hours / 24 ));
    const months = Math.round(Math.abs(days / 30.461));
    const years = Math.round(Math.abs(days / 365));

    switch (true) {
      case diff <= 45:
        return 'a few seconds ago';
      case diff <= 90:
        return 'a minute ago';
      case minutes <= 45:
        return minutes + ' minutes ago';
      case minutes <= 90:
        return 'an hour ago';
      case hours <= 22:
        return hours + ' hours ago';
      case hours <= 36:
        return 'a day ago';
      case days <= 25:
        return days + ' days ago';
      case days <= 45:
        return 'a month ago';
      case days <= 345:
        return months + ' months ago';
      case days <= 545:
        return 'a year ago';
      default:
        return years + ' years ago';
    }
  }

  ngOnDestroy(): void {
    this.removeTimer();
  }

  private removeTimer() {
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.timer = null;
    }
  }

  private getSecondsUntilUpdate(seconds: number): number {
    const min = 60;
    const hr = min * 60;
    const day = hr * 24;

    switch (true) {
      case seconds < min:
        return 2;
      case seconds < hr:
        return 30;
      case seconds < day:
        return 300;
      default:
        return 3600;
    }
  }
}
