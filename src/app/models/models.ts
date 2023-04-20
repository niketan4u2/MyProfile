export interface Education {
    institute : string;
    course : string;
    duration : string
    score : string
}

export interface WorkExperence{
    role: string;
    company: string;
    duration : string;
    description : string[];
}

export interface Skill{
    name:string;
    level: string;
    rating: number;
}

export interface project{
    title:string;
    technology: string;
    description:string[];
    
}