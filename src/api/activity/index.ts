import request from "@/util/request.ts";
import {Activity, Region} from "@/api/activity/type.ts";

enum API{
    REGION = "portal/activity/region",

    ACTIVITY_LIST = "portal/activity/all?cityName=",
}

export const region_list = () => request.get<any, Region>(API.REGION );

export const activity_list = (cityName: string)=> request.get<any,Activity[]>(API.ACTIVITY_LIST + cityName);