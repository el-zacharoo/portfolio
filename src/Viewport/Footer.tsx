import React, { JSX } from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Footer = (): JSX.Element => {
    return (
        <Stack component="footer" sx={{ py: 6 }} alignItems="center" justifyContent="center" spacing={2}>
            <Stack alignItems="center" spacing={2}>
                <Typography align="center" color="grayText" variant="body1">
                    For more info, find me on...
                </Typography >
            </Stack>
            <Stack sx={{ '&:hover': { color: 'grayText' }, }} direction="row" alignItems="center" spacing={1}>
                {social.map((item: Social) =>
                    <Link target="_blank" sx={{ '&:hover': { color: 'text.primary' }, }} color="inherit" href={item.link} key={item.id} >
                        {item.icon}
                    </Link>
                )}
            </Stack>
        </Stack>
    )
}
export default Footer;

type Social = {
    icon: React.ReactNode;
    link: string;
    id: number;
}

const social: Social[] = [
    { icon: <GitHubIcon fontSize="large" />, link: 'https://github.com/el-zacharoo', id: 1 },
    { icon: <LinkedInIcon fontSize="large" />, link: 'https://www.linkedin.com/in/zachary-weston-ab50b41a0/', id: 2 },
]