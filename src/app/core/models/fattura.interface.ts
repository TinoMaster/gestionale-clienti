import { Prodotto } from './prodotto.interface';

export interface Fattura {
  id: number;
  numeroFattura: string;
  importo: number;
  iva: number;
  scadenza: string;
  prodotti: Prodotto[];
  cliente: number;
}
