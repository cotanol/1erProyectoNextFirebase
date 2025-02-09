import { Plan } from "@/types/plan";

export const plans: Plan[] = [
  {
    id: "personal",
    name: "Personal",
    description: "Perfect for individual learners",
    price: 39.99,
    features: [
      "Access to 5,000+ courses",
      "Learn at your own pace",
      "Certificate of completion",
      "Mobile access",
      "24/7 support",
    ],
    buttonText: "Start Free Trial",
  },
  {
    id: "pro",
    name: "Professional",
    description: "Ideal for small teams",
    price: 89.99,
    features: [
      "Everything in Personal",
      "Team progress tracking",
      "Advanced analytics",
      "Priority support",
      "Team collaboration tools",
    ],
    buttonText: "Try Pro Plan",
    recommended: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For organizations",
    price: 199.99,
    features: [
      "Everything in Professional",
      "Custom learning paths",
      "API access",
      "Dedicated account manager",
      "Custom reporting",
      "SSO integration",
    ],
    buttonText: "Contact Sales",
  },
];
