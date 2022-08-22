import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { PortfolioItemLinkDiv } from './Portfolio.styled';

interface PortfolioItemLinkProps {
  github: string;
  webApp: string;
}
const PortfolioItemLink = ({ github, webApp }: PortfolioItemLinkProps) => {
  return (
    <PortfolioItemLinkDiv>
      {github.length > 0 && (
        <IconButton href={github} target="_blank" rel="noopener noreferrer">
          <GitHubIcon sx={{ color: 'black' }} />
        </IconButton>
      )}
      {webApp.length > 0 && (
        <IconButton href={webApp} target="_blank" rel="noopener noreferrer">
          <LaunchIcon sx={{ color: 'black' }} />
        </IconButton>
      )}
    </PortfolioItemLinkDiv>
  );
};

export default PortfolioItemLink;
