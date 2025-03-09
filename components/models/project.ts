import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

export type ProjectStack = {
    key: IconName;
    name: string;
    type: IconPrefix;
};
export type ProjectImage = {

    key: string;
    hover: string;
    h: string;
    w: string;
    url: string;
};
export type Project = {
    project: string;
    url: string;
    repo: string;
    descriptionTitle: string;
    description: string;
    imageOptions: { key: string, value: string }[];
    images: ProjectImage[];
    stack: ProjectStack[];
};