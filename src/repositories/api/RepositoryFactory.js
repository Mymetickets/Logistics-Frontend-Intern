import { TransportationRepository } from "./TransportationRepository"
import {AuthenticationRepository} from "./AuthRepository"

const repositories = {
    transportation: TransportationRepository,
    authentication: AuthenticationRepository
}
export const RepositoryFactory = {
    get(repoName){
        return repositories[repoName];
    }
}
