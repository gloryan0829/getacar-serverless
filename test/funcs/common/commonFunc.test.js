import { fetchVehicleModelList } from '../../../src/funcs/common/commonFunc';

test('제조사 모델 가져 오기 & 데이터 마이닝', done => {
    fetchVehicleModelList(`b2r0002u00zv`)
        .then(result => console.log(result))
        .catch(err => console.log(err))
        .finally(done);
})