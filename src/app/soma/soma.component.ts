import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

export interface DialogData {
  pontos: number
}

@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.css']
})
export class SomaComponent implements OnInit {
  x: number
  y: number
  meuInput: number
  valorTotal: number
  pontos = 0

  constructor(
    readonly dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.gerarValor()
  }

  gerarValor() {
    this.x = Math.floor(Math.random() * 100);
    this.y = Math.floor(Math.random() * 100);
    this.valorTotal = this.x + this.y
  }

  minhaFuncao(value: number) {
    if (this.valorTotal == value) {
      this.pontos += 1
      console.log(this.pontos)
      this.gerarValor()
    } else {
      this.openDialog()
    }
    this.meuInput = null

  }

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '250px',
      data: { pontos: this.pontos },
      disableClose: true
    });
  }

}

