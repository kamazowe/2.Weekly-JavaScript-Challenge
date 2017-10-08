const inValue = document.querySelector('#in');
const outValue = document.querySelector('.out');
const inUnit = document.querySelector('.selectIn');
const outUnit = document.querySelector('.selectOut');


///////////////////// redundancja 3x

inUnit.addEventListener('change', function (e) {
    e.preventDefault();
    run();

}, false);

outUnit.addEventListener('change', function (e) {
    e.preventDefault();
    run();
}, false);


inValue.addEventListener('keyup', function (e) {
    e.preventDefault();
    run();
}, false);

///////////////////////////////


function run() {
    let isNumber = isCorrect(Number(inValue.value));
    if (isNumber) {
        outValue.value = convert(isNumber);
    }
    //////////////////////////////////// ////////////////////////////////

    function isCorrect(x) {


        console.log(`czy to nie liczba: ${Number.isNaN(x)}`);


        if (Number.isNaN(x)) {
            throw new Error('To nie liczba');

        }

        return x;
    }



    ///////////
    function convert(valueIn) {

        // wsp mnozenia
        function coeff(i, o) {

            const arr = new Array(9);
            for (let i = 0; i < 9; i++) {
                arr[i] = new Array(9);
            }
            // wspolczynnik mnozenia w odniesieniu do jednostki wejsciowej 1 metr
            arr[0] = [1, 0.001, 10, 100, 1000, 39.37, 3.281, 1.094, 0.001];
            arr[1] = [1000, 1, 10000, 100000, 1000000, 39370, 3281, 1094, 1];
            arr[2] = [0.1, 0.0001, 1, 10, 100, 3.937, 0.3281, 0.1094, 0.0001];
            arr[3] = [0.01, 0.00001, 0.1, 1, 10, 0.3937, 0.03281, 0.01094, 0.00001];
            arr[4] = [0.001, 0.000001, 0.01, 0.1, 1, 0.03937, 0.003281, 0.001094, 0.000001];
            arr[5] = [0.025, 0.000025, 0.254, 2.54, 25.4, 1, 0.083, 0.028, 0.000025];
            arr[6] = [0.3048, 0.000305, 3.048, 30.48, 304.8, 12, 1, 0.333, 0.000305];
            arr[7] = [0.9144, 0.0009144, 9.144, 91.44, 914.4, 36, 3, 1, 0.000914];
            arr[8] = [1609.344, 1.609344, 16093.44, 160934.4, 1609344, 63360, 5280, 1760, 1];

            return arr[i][o];
        }



        function calc(valueIn) {
            const iUnit = Number(inUnit.value);
            const oUnit = Number(outUnit.value);

            return valueIn * coeff(iUnit, oUnit);
        }
        return calc(valueIn);

    }
    /////////////////////////////////////   ////////////////////////////// 
}
