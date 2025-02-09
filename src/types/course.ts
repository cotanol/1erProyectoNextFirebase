export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  instructor: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  image: string;
  category: string;
}

export interface CartItem extends Course {
  quantity: number;
}
