import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthLibService {

  private userName: string = '';

  public get user(): string {
    return this.userName;
  }

  constructor() { 
    console.log('aaa');
  }

  public login(userName: string, password?: string): void {
    console.log(this.userName)
    this.userName = userName;
  }

}
