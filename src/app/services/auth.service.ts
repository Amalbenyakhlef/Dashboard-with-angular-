import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { mongo} from '../Objects/database.config';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  constructor(private router: Router) {}

  login(email: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      mongo.then(db => {
        db.collection('users').findOne({ email: email, password: password }, (error, result) => {
          if (error) throw error;
          if (result) {
            this.isLoggedIn = true;
            resolve(true);
          } else {
            this.isLoggedIn = false;
            resolve(false);
          }
        });
      });
    });
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['login']);
  }

  get isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
}
