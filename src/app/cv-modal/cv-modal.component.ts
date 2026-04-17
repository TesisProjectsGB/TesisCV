import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cv-modal',
  templateUrl: './cv-modal.component.html',
  styleUrls: ['./cv-modal.component.scss']
})
export class CvModalComponent {
  tipo: string = '';
  formato: string = '';

  constructor( public dialogRef: MatDialogRef<CvModalComponent>,@Inject(MAT_DIALOG_DATA) public data: { tipo: string , formato: string}) {
    if (data?.tipo) {
      this.tipo = data.tipo;
    }

    if(data?.formato){
      this.formato = data.formato;
    }
   }

  onClose(): void {
    this.dialogRef.close();
  }

}
