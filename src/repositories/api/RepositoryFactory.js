import { TransportationRepository } from "./TransportationRepository"

const repositories = {
    transportation: TransportationRepository
}
export const RepositoryFactory = {
    get(repoName){
        return repositories[repoName];
    }
}
