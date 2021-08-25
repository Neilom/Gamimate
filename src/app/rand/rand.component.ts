import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-rand',
  templateUrl: './rand.component.html',
  styleUrls: ['./rand.component.css']
})
export class RandComponent implements OnInit {

  x: number
  y: number
  meuInput: number
  valorTotal: number
  pontos = 0
  operadores = ["+", "-", "*", "/"]
  sinal: string

  constructor(
    readonly dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.gerarValor()
  }

  gerarValor() {
    this.x = Math.floor(Math.random() * 100);
    this.y = Math.floor(Math.random() * 100);
    this.sinal = this.operadores[this.getRandomArbitrary(0, 3)]
    console.log(this.sinal)
    switch (this.sinal) {
      case "+":
        this.valorTotal = this.x + this.y
        break;
      case "-":
        this.valorTotal = this.x - this.y
        break;
      case "/":
        this.valorTotal = this.x / this.y
        break;
      case "*":
        this.valorTotal = this.x * this.y
        break;
      default:
        break;
    }
  }

  getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
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
