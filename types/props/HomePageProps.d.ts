import { OriginalRepo } from "../repositories/OriginalRepo";

export interface HomePageProps {
    repos: OriginalRepo[]
    reposAmount:number
    githubStars:number
}