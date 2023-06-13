import React from "react";

import { Asset, EntrySkeletonType } from "contentful";

export type SectionTypes = {
    contentEntry: EntrySkeletonType<{
        ctaLabel?: string;
        ctaSlug?: string;
        body: string;
        image: Asset;
        headline: string;
        sectionType: string;
        textDirection: string;
    }>
};

export type HerobannerProps = {
    contentEntry: EntrySkeletonType<{
        headline: string;
        body: string;
    }>
};

export type ContentBlockType = EntrySkeletonType<{
    blocks: Array<{
        [key: string]: string | HerobannerProps | SectionTypes
    }>
}> | undefined;

export type IHeader = EntrySkeletonType<{
    blocks: Array<NavLinks>
}> | undefined;

export type NavLinks = EntrySkeletonType<{
    name: string;
    pageSlug: string;
    media: Asset;
}>;


export type AllEntries = Record<string, React.FC<HerobannerProps & SectionTypes>>; 