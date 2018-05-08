import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthProvider {

  constructor(private angularFireAuth: AngularFireAuth) {
  }

  /**
   * Método empleado para realizar el inicio de sesión en la aplicación.
   * @param email Correo electrónico empleado para el inicio de sesión.
   * @param password Contraseña empleada para el inicio de sesión.
   */
  login(email: string, password: string): Promise<any> {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  /**
   * Método empleado para registrarse en la aplicación.
   * @param email Correo electrónico empleado para el registro.
   * @param password Contraseña empleada para el registro.
   */
  signup(email: string, password: string): Promise<any> {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  /**
   * Método empleado para obtener el estado del usuario en sesión.
   */
  getStatus(): void {
    this.angularFireAuth.authState.subscribe((user) => {
      return user
    });
  }

}
