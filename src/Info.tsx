import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import { H1, H3, HorizontalDiv } from './Info.styled';
import { Link } from 'react-router-dom';

function Info() {
  return (
    <div className="info">
      <Link to="/">
        <H1>Nelda Arvesu</H1>
      </Link>
      <HorizontalDiv>
        <H3>Melbourne</H3>
        <IconButton
          href="https://github.com/neldad1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon sx={{ color: 'white' }} />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/nelda-arvesu/1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon sx={{ color: 'white' }} />
        </IconButton>
      </HorizontalDiv>
    </div>
  );
}

export default Info;
