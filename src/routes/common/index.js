'use strict';

import { fetchVehicleModel, fetchVehicleModelList, getCarBrands } from '../../funcs/common/commonFunc';
import { FailedResponseHelper, SuccessResponseHelper } from '../../helpers/CommonHelpers';

/**
 * @description 브랜드 리스트
 */
export const getBrandList = async event => {
    const result = await getCarBrands();
    console.log(result);
    return SuccessResponseHelper([...result]);
};

/**
 * @description 자동차 브랜드 별 모델리스트 저장하기
 */
export const getModelList = event => {
    const { brandCode } = event.pathParameters;
    return fetchVehicleModelList(brandCode)
        .then(({ status, statusText, data: { data } }) => status === 200 ? SuccessResponseHelper(data) : SuccessResponseHelper({ }))
        .catch(err => FailedResponseHelper(err))
}

/**
 * @description 자동자 모델 가져 오기
 */
export const getModelOne = event => {
    const { carModel } = event.pathParameters;
    return fetchVehicleModel(carModel)
        .then(({ status, statusText, data }) => status === 200 ? SuccessResponseHelper(data) : SuccessResponseHelper({ }))
        .catch(err => FailedResponseHelper(err))
}
