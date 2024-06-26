import { RESTDataSource } from "@apollo/datasource-rest";
import { TrackModel, AuthorModel, ModuleModel } from "../models";

export class TrackAPI extends RESTDataSource {
    baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

    getTracksForHome() {
        // make a get req. to the tracks endpoint
        return this.get<TrackModel[]>('tracks');
    }

    getAuthor(authorId: string) {
        return this.get<AuthorModel>(`author/${authorId}`);
    }

    getTrack(trackId: string) {
        return this.get<TrackModel>(`track/${trackId}`);
    }

    getTrackModules(trackId: string) {
        return this.get<ModuleModel[]>(`track/${trackId}/modules`);
    }

    incrementTrackViews(trackId: string) {
        return this.patch(`track/${trackId}/numberOfViews`);
    }
}