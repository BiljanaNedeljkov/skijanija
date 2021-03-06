export class Track {
    _id: number;
    mountain_id: number;
    name: string;
    length_km: number;
    rating: number;
    color: string;

    constructor(obj?:any){
        this._id = obj && obj._id || null;
        this.mountain_id = obj && obj.mountain_id || null;
        this.length_km = obj && obj.length_km || null;
        this.rating = obj && obj.rating || null;
        this.name = obj && obj.name || null;
        this.color = obj && obj.color || null;
    }

}