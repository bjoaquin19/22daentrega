import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonSegment, IonItem, IonSegmentButton, IonButton, IonIcon } from '@ionic/angular/standalone';
import { CodigoqrComponent } from 'src/app/components/codigoqr/codigoqr.component';
import { MiclaseComponent } from 'src/app/components/miclase/miclase.component';
import { ForoComponent } from 'src/app/components/foro/foro.component';
import { MisdatosComponent } from 'src/app/components/misdatos/misdatos.component';
import { addIcons } from 'ionicons';
import { gridOutline, homeOutline, pencilOutline, schoolOutline } from 'ionicons/icons';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonSegmentButton, IonItem, IonSegment, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule
    , CodigoqrComponent, MiclaseComponent
    , ForoComponent, MisdatosComponent
  ]
})
export class InicioPage {

  componente: string = 'codigoqr';
  
  constructor() { 
    addIcons({ homeOutline, schoolOutline, pencilOutline, gridOutline });
  }

  segmentChanged($event: any) {
    this.componente = $event.detail.value;
  }
}
