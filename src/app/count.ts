export interface Count {
  臺幣: any;
  外幣: string;
  數位: string;
}

export class CountInstance implements Count {
  臺幣: any = null;
  外幣: string = '';
  數位: string = '';
}
