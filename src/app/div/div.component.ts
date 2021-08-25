import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-div',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.css']
})
export class DivComponent implements OnInit {
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
    this.y = Math.floor(Math.random() * 10);
    this.y = this.y == 0 ? 1 : this.y
    this.valorTotal = Math.floor(this.x / this.y)
  }

  minhaFuncao(value: number) {
    if (this.valorTotal == Math.floor(value)) {
      this.pontos += 1
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
