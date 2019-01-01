export interface Payment {
  inn: number;
  bik: number;
  bankAccount: number;
  // nds: 'НДС 18%' | 'НДС 10%' | 'без НДС';
  nds: string;
  sum: number;
  phone?: string;
  email: string;
}
