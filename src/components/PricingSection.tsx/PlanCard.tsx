import { Plan } from "@/types/plan";
import { Check } from "lucide-react";

interface PlanCardProps {
  plan: Plan;
}

export default function PlanCard({ plan }: PlanCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 ${
        plan.recommended ? "border-2 border-blue-500 relative" : ""
      }`}
    >
      {plan.recommended && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-medium rounded-bl">
          Recommended
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
        <p className="text-gray-600 mb-6">{plan.description}</p>
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">
            ${plan.price}
          </span>
          <span className="text-gray-600">/month</span>
        </div>
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <Check className="w-5 h-5 text-green-500 mr-3" />
              {feature}
            </li>
          ))}
        </ul>
        <button
          className={`w-full py-3 rounded-lg font-medium transition-colors ${
            plan.recommended
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-100 text-gray-900 hover:bg-gray-200"
          }`}
        >
          {plan.buttonText}
        </button>
      </div>
    </div>
  );
}
