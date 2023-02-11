export class Detail {
    name?: string;
    routerLink?: string;
    image?: string;
}

export class Product {
    name?: string;
    routerLink?: string;
    title?: string;
    subTitle?: string;
    description?: string;
    image?: string;
    details?: Detail[];
}

export class Products {
    name?: string;
    img?: string;
    hoverImg?: string;
    routerLink?: string;
    headerImage?: string;
    headerBackground?: string;
    headerColor?: string;
    headerText?: string;
    bodyHeader?: string;
    contentBackground?: string;
    contentHeader?: string;
    contentText?: string;
    secondContentHeader?: string;
    secondContentText?: string;
    detailBackground?: string;
    products?: Product[];
}
