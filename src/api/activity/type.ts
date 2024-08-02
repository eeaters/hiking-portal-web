export interface Region {
    name: string;
    children: Region[];
}

export interface Activity{
    companyName: string;
    sourceProvince: string;
    sourceCity: string;
    sourceDistrict: string;
    destProvince: string;
    destCity: string;
    destDistrict: string;
    destAddress: string;
    activityName: string;
    activityDescription: string;
    cover: string;
    activityStartTime: Date;
    duration: number;
}