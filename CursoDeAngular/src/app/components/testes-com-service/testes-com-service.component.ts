import { Component } from '@angular/core';
import { Compras } from 'src/app/Interfaces/Compras';
import { ComprasService } from 'src/app/Services/compras.service';
@Component({
  selector: 'app-testes-com-service',
  templateUrl: './testes-com-service.component.html',
  styleUrls: ['./testes-com-service.component.css'],
})
export class TestesComServiceComponent {
  constructor(private comprasService: ComprasService) {}

  compras: Compras[] = [
    {
      name: 'Tv Samsung',
      desc: 'Tv Samsung de 50 polegadas',
      price: 2500,
      breakble: true,
    },
    {
      name: 'Remote Control Car',
      desc: 'A racing car of remote control',
      price: 100,
      breakble: true,
    },
    {
      name: 'Slime',
      desc: 'A slime green',
      price: 10,
      breakble: false,
    },
    {
      name: 'plastic cup',
      desc: 'Packaging of Twenty plastic cups',
      price: 20,
      breakble: false,
    },
    {
      name: 'Motorola G5',
      desc: 'Cellphone Motorola G5 65G of memory',
      price: 2250,
      breakble: true,
    },
  ];

  compra: Compras = {
    name: '',
    desc: '',
    price: 0,
    breakble: false,
  };

  filtrar(compra: Compras) {
    let preco = <HTMLSelectElement>document.getElementById('price');
    let queb = <HTMLSelectElement>document.getElementById('breakble');

    if (preco.options[preco.selectedIndex].value == '1') {
      this.compras = this.comprasService.pricePlus(this.compras, compra);
    } else if (preco.options[preco.selectedIndex].value == '2') {
      this.compras = this.comprasService.priceMinor(this.compras, compra);
      console.log('Ola2');
    }

    if (queb.options[queb.selectedIndex].value == '1') {
      this.compras = this.comprasService.breakble(this.compras, compra);
    } else if (queb.options[queb.selectedIndex].value == '2') {
      this.compras = this.comprasService.unbreakble(this.compras, compra);
    }
  }
}
