import {
  LucideIcon,
  Home,
  Play,
  Heart,
  Music,
  Headphones,
  Zap,
  Shield,
  Clock,
  Users,
  Award,
  Globe,
  Video,
  MessageCircle,
  ExternalLink,
  Camera,
  Mail,
  MapPin,
  Send,
  CircleAlert,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Home,
  Play,
  Heart,
  Music,
  Headphones,
  Zap,
  Shield,
  Clock,
  Users,
  Award,
  Globe,
  Video,
  MessageCircle,
  ExternalLink,
  Camera,
  Mail,
  MapPin,
  Send,
  CircleAlert,
};

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
}

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}: IconProps) => {
  const IconComponent = iconMap[name] || iconMap[fallback];

  return <IconComponent size={size} className={className} />;
};

export default Icon;
