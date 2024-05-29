import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxConsoleServiceService } from '../../../ngx-console-service/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly console = inject(NgxConsoleServiceService);
  
  log() {
    this.console.log('log');
  }

  error() {
    this.console.error('error');
  }

  warn() {
    this.console.warn('warn');
  }

  info() {
    this.console.info('info');
  }
}
