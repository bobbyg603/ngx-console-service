import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxConsoleService {
  log(message: any, ...optionalParams: any[]) {
    console.log(message, ...optionalParams);
  }

  error(message: any, ...optionalParams: any[]) {
    console.error(message, ...optionalParams);
  }

  warn(message: any, ...optionalParams: any[]) {
    console.warn(message, ...optionalParams);
  }

  info(message: any, ...optionalParams: any[]) {
    console.info(message, ...optionalParams);
  }
}
