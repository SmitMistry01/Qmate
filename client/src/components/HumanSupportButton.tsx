import { UserCog } from 'lucide-react';

interface HumanSupportButtonProps {
  onClick: () => void;
  isActive: boolean;
}

export function HumanSupportButton({ onClick, isActive }: HumanSupportButtonProps) {
  const translations = {
    english: isActive ? 'Human Support Active' : 'Request Human Support',
    hindi: isActive ? 'मानव सहायता सक्रिय' : 'मानव सहायता का अनुरोध करें',
    marathi: isActive ? 'मानवी सहाय्य सक्रिय' : 'मानवी सहाय्याची विनंती करा'
  };

  return (
    <button
      onClick={onClick}
      disabled={isActive}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
        isActive
          ? 'bg-green-100 text-green-700 cursor-not-allowed'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      <UserCog size={18} />
      {isActive ? 'Human Support Active' : 'Request Human Support'}
    </button>
  );
}
