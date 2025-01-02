
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  name: string;
}

const SkillCard = ({ icon: Icon, name }: SkillCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer group">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="p-4 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      </div>
    </div>
  );
};

export default SkillCard;