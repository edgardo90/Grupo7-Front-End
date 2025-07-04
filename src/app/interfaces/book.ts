export interface IBook {
    _id: string;
    title: string;
    author: string;
    category: string;
    genre: string;
    description?: string;
    editorial?: string;
    imageURL?: string;
    createdAt: string;
    updatedAt: string;
}
