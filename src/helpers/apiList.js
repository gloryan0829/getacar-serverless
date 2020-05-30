import apiCall from './apiCall';

export const getModelList = (brandCode) => {
    return apiCall(`https://media.daum.net/proxy/api/mc2/v2/clusters.json?pageSize=100&page=1&sortField=etcInfo.latestReleaseDate&sortValue=desc&service=auto&type=models&filterKey=etcInfo.brand,etcInfo.salesStatus&filterVal=${brandCode},IN__S__N`);
}

export const getModelOne = (modelCode) => {
    return apiCall(`https://auto.daum.net/api/newcar/models/${modelCode}.json`)
}