import React, { useState, JSX } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { NavLinks, IHeader } from "@/types";
import { fetchContent } from "@/views/Content/api";

const Header = (): JSX.Element => {
    const res = useQuery(["menu", "assembly", "site-root", 1], fetchContent);
    const content = res.data?.items[0] as IHeader;
    const menuItems = content?.fields.blocks.filter(
        (item) => item.fields.pageSlug !== "home"
    );

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = (): void => {
        setAnchorEl(null);
    };

    const handleNavigate = (path: string): void => {
        setAnchorEl(null);
        if (!path) {
            return;
        }
        if (path === "home") {
            navigate("/", { state: { data: path } });
        }
        navigate(`/${path}`, { state: { data: path } });
    };

    return (
        <>
            <AppBar color="primary" position="static" elevation={0}>
                {menuItems && (
                    <Toolbar>
                        <Box sx={{ flexGrow: 1 }}>
                            <Link
                                onClick={() =>
                                    navigate("/", { state: { data: "home" } })
                                }
                                component="button"
                                sx={{ cursor: "pointer" }}
                                underline="none"
                                color="inherit">
                                Zachary Weston
                            </Link>
                        </Box>
                        <Box sx={{ display: { xs: "none", md: "flex" } }}>
                            {menuItems.map((item, index) => (
                                <NavButton
                                    key={index}
                                    item={item}
                                    onClick={() =>
                                        handleNavigate(item.fields.pageSlug)
                                    }
                                />
                            ))}
                        </Box>
                        <Box sx={{ display: { xs: "flex", md: "none" } }}>
                            <IconButton onClick={handleClick} color="inherit">
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}>
                                {menuItems.map((item, index) => (
                                    <NavButton
                                        key={index}
                                        item={item}
                                        onClick={() =>
                                            handleNavigate(item.fields.pageSlug)
                                        }
                                    />
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                )}
            </AppBar>
        </>
    );
};

export default Header;

type NavButtonProps = {
    item: NavLinks;
    onClick: () => void;
};

// switches between href links and internal links
const NavButton = ({
    item,
    onClick,
}: NavButtonProps): JSX.Element | undefined => {
    const imgUrl = item.fields.media.fields.file?.url ?? {};

    if (item.fields.pageSlug) {
        return (
            <Button sx={{ mx: 1 }} color="inherit" onClick={() => onClick()}>
                {item.fields.name}
            </Button>
        );
    }
    if (imgUrl) {
        return (
            <Button
                sx={{ mx: 1 }}
                color="inherit"
                target="_blank"
                href={imgUrl as string}>
                {item.fields.name}
            </Button>
        );
    }
};
