import { Icon } from './LanguageIcon.styled';

interface LanguageIconProps {
  src: string;
  title: string;
}

function LanguageIcon({ src, title }: LanguageIconProps) {
  return <Icon src={src} alt={title} />;
}

export default LanguageIcon;
