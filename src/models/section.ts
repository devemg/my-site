export interface Action {
    buttonText?: string;
    href?: string;
}

export interface Section {
    subtitle?: string;
    title?: string;
    description?: string;
    action?: Action;
}