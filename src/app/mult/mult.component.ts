import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-mult',
  templateUrl: './mult.component.html',
  styleUrls: ['./mult.component.css']
})
export class MultComponent implements OnInit {
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
    this.valorTotal = this.x * this.y
  }

  minhaFuncao(value: number) {
    if (this.valorTotal == value) {
      this.pontos += 1
      this.gerarValor()
    } else {
      this.openDialog()
    }
  }

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '250px',
      data: { pontos: this.pontos },
      disableClose: true
    });
  }

}
