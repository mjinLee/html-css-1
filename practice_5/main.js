//환율정보 들고오기
let currencyRatio={
    USD:{
        KRW:1304.57,
        USD:1,
        VND:23363.00,
        unit:"달러"
    },
    KRW:{
        KRW:1,
        USD:0.00077,
        VND:17.91,
        unit:"원"
    },
    VND:{
        KRW:0.056,
        USD:0.000043,
        VND:1,
        unit:"동"
    }
}

//console.log(currencyRatio.USD.unit);
//console.log(currencyRatio["VND"]["unit"]);
//console.log(currencyRatio["KRW"].unit);

// html : 화면 UI 아이템을 다 가지고 있음
// javascript : html요소를 가져다 동작하게 만들어줌

// click event
// a : <a></a>태그
/* html요소를 javascript로 들고올 수 있게 해주는 게
  -> document.querySelectorAll
  document라는 객쳬는 html 파일에 태그들을 들고올 수 있는
  유용한 기능들을 제공해줌
  All : ("조건")에 부합하는 건 모두 들고옴
        (다른 선택자들은 만족하는 것 하나만 선택해줌) */

let fromCurrency = 'USD'
document
    .querySelectorAll("#from-currency-list a")
    .forEach((menu)=>menu.addEventListener("click",function(){
        // 1.버튼 가져와서
        document.getElementById("from-button")
        // 2.버튼에 있는 값을 바꿈 (this: 내가 선택한 것)
            .textContent = this.textContent;
        // 3.선택된 currency값을 변수에 저장
        fromCurrency = this.textContent;
        //console.log("fromCurrency는 ",fromCurrency);
        convert();
    })
);

let toCurrency = 'USD'
document.querySelectorAll("#to-currency-list a")
    .forEach(menu=>menu.addEventListener("click",function(){
        document.getElementById("to-button").textContent = this.textContent;
        toCurrency = this.textContent;
        //console.log("toCurrency는 ",toCurrency);
        convert();
    }));

// 1.키를 입력하는 순간
// -> index.html : onkeyup="convert()"
function convert(){
    //console.log("key up event issue");

    // 2.환전이 되어->돈 * 환율 = 환전금액
    // 돈: input창에 있는 값을 들고온다(.value)
    let amount = document.getElementById("from-input").value
    //console.log("돈은 ",amount);
    // 환율(currencyRatio변수) : 내가 가지고 있는 돈, 바꾸고자 하는 돈 필요
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency]
    //console.log("환전결과 ",convertedAmount);

    // 3.환전된 값이 보임
    document.getElementById("to-input").value = convertedAmount;
}

// 1.드랍다운리스트에 값이 바뀔때 마다
// 2.환전을 다시한다 ->각 document에 convert();