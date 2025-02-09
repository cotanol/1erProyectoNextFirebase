export interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  buttonText: string;
  recommended?: boolean;
}
