import { Fattura } from './fattura.interface';

export interface Cliente {
  id: number;
  nome: string;
  cognome: string;
  email: string;
  fatture: Fattura[];
}
