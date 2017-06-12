import testSagas from './testSagas';

export default function* rootSaga(){
    yield[
        testSagas()
    ];
}