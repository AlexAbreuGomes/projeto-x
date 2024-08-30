export type Product = {
    id: number;
    name: string;
    image: string;
    price: number;
    url: string;
}

export type Search = {
    placeholder: string;
    onChangeText: (text: string) => void;
    onPress: () => void;
}
