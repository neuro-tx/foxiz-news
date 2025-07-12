export interface NewsDataProps {
    title: string;
    description: string;
    image: string ;
    url: string;
    source?: string;
    publishedAt: number;
    author?:string;
    cateogory?: string[] | string ;
};