import React, { JSX } from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { NpmIcon } from "@/Viewport/NpmIcon";

const Footer = (): JSX.Element => {
    return (
        <>
            <Stack
                component="footer"
                alignItems="center"
                justifyContent="center"
                spacing={2}
                sx={{ backgroundColor: "secondary.main", py: 6 }}>
                <Stack alignItems="center" spacing={2}>
                    <Typography align="center" color="white" variant="body1">
                        For more info, find me on...
                    </Typography>
                </Stack>
                <Stack
                    sx={{ "&:hover": { color: "grayText" } }}
                    direction="row"
                    alignItems="center"
                    spacing={1}>
                    {social.map((item: Social) => (
                        <Link
                            target="_blank"
                            sx={{
                                color: "white",
                                "&:hover": { color: "primary.light" },
                            }}
                            href={item.link}
                            key={item.id}>
                            {item.icon}
                        </Link>
                    ))}
                </Stack>
            </Stack>
            <Stack sx={{ backgroundColor: "black", py: 2 }}>
                <Typography align="center" color="white" variant="body1">
                    View the code for this site{" "}
                    <Link
                        sx={{
                            color: "inherit",
                            "&:hover": { color: "primary.light" },
                        }}
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/el-zacharoo/portfolio">
                        here
                    </Link>
                </Typography>
            </Stack>
        </>
    );
};
export default Footer;

type Social = {
    icon: React.ReactNode;
    link: string;
    id: number;
};

const social: Social[] = [
    {
        icon: <GitHubIcon fontSize="large" />,
        link: "https://github.com/el-zacharoo",
        id: 1,
    },
    {
        icon: <LinkedInIcon fontSize="large" />,
        link: "https://www.linkedin.com/in/zachary-weston-ab50b41a0/",
        id: 2,
    },
    {
        icon: <NpmIcon />,
        link: "https://www.npmjs.com/~el-zacharoo",
        id: 3,
    },
];
