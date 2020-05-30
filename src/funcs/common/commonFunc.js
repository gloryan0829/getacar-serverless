import AWS from 'aws-sdk';
import { getModelList, getModelOne } from '../../helpers/apiList';

export const getCarBrands = () => {
    const dynamoDB = new AWS.DynamoDB.DocumentClient({
        region: 'localhost',
        endpoint: 'http://localhost:8000',
        accessKeyId: 'DEFAULT_ACCESS_KEY',  // needed if you don't have aws credentials at all in env
        secretAccessKey: 'DEFAULT_SECRET' // needed if you don't have aws credentials at all in env
    })

    return new Promise((resolve, reject) => {
        dynamoDB.scan({
            TableName: 'carBrands',
            ProjectionExpression: "id, brandCode, brandName, brandLogo"
        },(err, data) => {
            if (err) {
                console.log('Scan failed to load data. Error JSON: ', JSON.stringify(err, null, 2));
                resolve(err);
            } else {
                console.log("Scan succeeded. ", data);
                resolve(data.Items);
            }
        });
    })
};

export const fetchVehicleModelList = (brandCode) => {
    return getModelList(brandCode);
}

export const fetchVehicleModel = (carModel) => {
    return getModelOne(carModel);
}

