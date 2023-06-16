import { Injectable } from '@angular/core';
import { Compras } from '../Interfaces/Compras';
@Injectable({
  providedIn: 'root',
})
export class ComprasService {
  constructor() {}

  pricePlus(compras: Compras[], compra: Compras) {
    return compras.filter((a) => a.price >= 1000); // para cada elemento do array que for maior que 1000
  }

  priceMinor(compras: Compras[], compra: Compras) {
    return compras.filter((a) => a.price <= 1000); // para cada elemento do array que for menor que 1000
  }

  breakble(compras: Compras[], compra: Compras) {
    return compras.filter((a) => a.breakble == true); // para cada elemento do array que for igual a true
  }

  unbreakble(compras: Compras[], compra: Compras) {
    return compras.filter((a) => a.breakble == false); // para cada elemento do array que for igual a false
  }
}
