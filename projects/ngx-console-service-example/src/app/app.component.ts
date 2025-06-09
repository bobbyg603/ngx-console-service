import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxConsoleService } from '../../../ngx-console-service/src/public-api';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly console = inject(NgxConsoleService);
  
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
