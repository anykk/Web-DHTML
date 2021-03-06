export interface Payment {
  inn: number;
  bik: number;
  account: number;
  nds: 'НДС 18%' | 'НДС 10%' | 'без НДС';
  sum: number;
  phone?: string;
  email: string;
}
