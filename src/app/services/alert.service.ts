import { Injectable } from '@angular/core';
import { MdDialog, MdSnackBar } from '@angular/material';

@Injectable()
export class AlertService {

  constructor(private snackBar: MdSnackBar,
              private dialog: MdDialog) {
  }

  showSnack(text: string, code = 1) {
    const duration = code === 0 ? 9000 : 5000;
    this.snackBar.open(text, 'Schließen', {
      duration: duration,
    });
  }

  showDialog(component: any, data: any): Promise<{}> {
    return new Promise((res, rej) => {
      const dialog = this.dialog.open(component, {
        data: data,
        disableClose: true
      });
      dialog.afterClosed().subscribe(result => {
        res();
      });
    });
  }
}
