import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonGrid,IonItem, IonCol, IonRow, IonInput, IonCard, IonLabel, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/services/auth.service';
import { NavigationExtras, Router } from '@angular/router';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.page.html',
  styleUrls: ['./correo.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, IonItem, IonHeader, IonGrid, IonCol, IonRow, IonTitle, IonCard,
     IonLabel,IonToolbar, IonInput, CommonModule, FormsModule]
})
export class CorreoPage {

  email: string;

  constructor(private router: Router, private databaseservice: DataBaseService) {
    this.email = '';
  }

  recuperarContrasena() {
    // Lógica para recuperar la contraseña}
    this.databaseservice.buscarUsuarioPorCorreo(this.email).then((usuario) => {
      if (usuario) {
        const navigationExtras: NavigationExtras = {
          state: {
            usuario: usuario,
          }
        }
        this.router.navigate(['/pregunta'], navigationExtras);
      } else {
        this.router.navigate(['/incorrecto']);
      }
    });
  }

  iniciarSesion() {
    // Navega a la página de inicio de sesión
    this.router.navigate(['/login']);
  }

  

}
