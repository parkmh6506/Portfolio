randomnum1 = Math.floor(Math.random() * 22 + 1)

var cardimage1src = "app_image/card" + randomnum1 + ".jpg"

var cardimage1 = document.querySelectorAll("img")[12];

cardimage1.setAttribute("src",cardimage1src);

if(randomnum1 == 1){
    document.querySelector("h3").innerHTML = "THE FOOL(광대)";
    document.querySelector("h2").innerHTML = "미래는 불확실하고, 한 치 앞도 어떻게 될 지 모르겠지만, 그래도 어떻게든 될 거라고 보는 낙관적인 태도를 취하고 있습니다. 반대로 아무것도 결정하지 않은 등 부정적으로 작용합니다. 불안해하거나 제멋대로이거나 게으른, 불성실한 태도를 취했다고 할 수 있습니다.변덕이나 무책임한 모습은 주위에서 보기에 신용을 깎아내릴 수 있는 원인이 되어 버립니다.";
}
else if(randomnum1 == 2){
    document.querySelector("h3").innerHTML = "THE MAGICIAN(마술사)";
    document.querySelector("h2").innerHTML = "자발적으로 생각하고 행동을 취할 수 있습니다. 그것은 꿈을 이루는 것이나 사람에게 인정받게 되는 것입니다. 반대로 정체성과 목적 의식이 뚜렷하지 않습니다. 아직 진정한 자신이 성숙되지 않은지도 모릅니다. 사람의 의견에 휩쓸리기 쉽기 때문에 사기 당할 위험성도 높아지고 있으니 조심하세요.";
}
else if(randomnum1 == 3){
    document.querySelector("h3").innerHTML = "THE HIGH PRIESTESS(여사제)";
    document.querySelector("h2").innerHTML = "지적인 문제와 마주하는 성실한 태도를 나타냅니다. 근면한 자세가 당신에게 도움이 될 것입니다. 반대로 성실함이 지나쳐버리는 것을 나타냅니다. 결벽이거나 완벽주의이거나 당신을 살기 어렵게 만들 가능성이 있습니다. ";
}
else if(randomnum1 == 4){
    document.querySelector("h3").innerHTML = "THE EMPRESS(여제)";
    document.querySelector("h2").innerHTML = "모든 것을 받아들이는 포용력과 대가를 요구하지 않고 주는 사랑이 번영을 제공합니다. 물질적인 보상이나 성공뿐만 아니라 사랑과 여유와 같은 형태가 없는 것까지도 얻을 수 있을 것입니다. 반대로 다소 풍요로움이 과도한 상태입니다. 주어진 것 또는 가지고 있는 것에 대한 고마움을 잊고 오만하고 게으른 생각을 하고 있습니다.";
}
else if(randomnum1 == 5){
    document.querySelector("h3").innerHTML = "THE EMPEROR(황제)";
    document.querySelector("h2").innerHTML = "건설적인 노력을 통해 지역 사회를 안정시키는 데 성공하고 있는 상태. 확실한 실력과 경험, 자신감과 인품을 인정받아 사람들로부터 신뢰를 얻을 수 있을 것입니다. 반대로 노력과 인품을 바탕으로 하지 않는 권위가 사람들을 억누르는 감이 있습니다. 사람과의 관계를 유지하려고 해도 실제 역부족인 것이 밝혀지면서 신뢰 관계가 무너지는 것입니다.";
}
else if(randomnum1 == 6){
    document.querySelector("h3").innerHTML = "THE HIEROPHANT(교황)";
    document.querySelector("h2").innerHTML = "조직을 정리하고 질서를 유지한다는 것을 나타냅니다. 사회의 규칙을 제대로 지키고 평화로운 상태를 유지하는 것을 보여줍니다. 반대로 사회의 룰을 지키지 못하거나 약용하고 있는 상태를 나타냅니다. 사람을 속이려고 하고, 또한 자신만 좋은 생각을 하려고 하는 행위는 언젠가 간파되어 버립니다.";
}
else if(randomnum1 == 7){
    document.querySelector("h3").innerHTML = "THE LOVERS(연인)";
    document.querySelector("h2").innerHTML = "사람과 사람과의 깊은 관계와 그 편안함을 나타내는 카드입니다. 좋은 관계의 일체감을 맛볼 수 있는 편안한 환경에 있을 수 있다는 것을 의미합니다. 반대로 지금이 좋으면 좋다라고 생각하여 찰나의 쾌락에 빠져있는 상태입니다. 변덕에 따른 선택을 해버려 손대서는 안되는 일에 손을 대 버릴 가능성도 있습니다.";
}
else if(randomnum1 == 8){
    document.querySelector("h3").innerHTML = "THE CHARIOT(전차)";
    document.querySelector("h2").innerHTML = "뭔가를 얻기 위한 강한 의지로 가득 차 있는 상태. 공격적이고 의욕적이고, 신속하게 상황을 전개해 나갈 것입니다. 반대로 넘쳐나는 힘이 폭주를 시작하는 것을 암시합니다. 무턱대고 실행하여 방향성을 잃고 전망하지 못한 채 섣불리 시작하는 등 너무 초조한 것 또한 나쁜 영향을 줄 것입니다.";
}
else if(randomnum1 == 9){
    document.querySelector("h3").innerHTML = "STRENGHT(힘)";
    document.querySelector("h2").innerHTML = "사랑과 정성, 배려, 인내와 같은 영성의 힘이 어려움을 극복할 수 있도록 힘이 될 것입니다. 사람과의 협력과 유대의 깊이도 나타냅니다. 반대로 문제에 잘 대처할 수 없다는 암시. 곧 포기해버리거나 소극적이 되거나 상대에게 지나치게 아첨하는 것입니다. 안간힘을 쓰지 않고도 폭력적인 힘에 사로잡혀 버립니다.";
}
else if(randomnum1 == 10){
    document.querySelector("h3").innerHTML = "THE HERMIT(은둔자)";
    document.querySelector("h2").innerHTML = "조용한 상태에서 마음을 진정하면서 자신의 내면을 다시 보는 기회를 나타냅니다. 사람에 의존하지 않고 신념을 가지고 일을 직면하면서 금욕적인 마음으로 길을 개척하게 할 것입니다. 반대로 현실에서 눈을 돌리고, 완고하게 마음을 닫아 버리는 것을 나타냅니다. 자신의 과거의 영광에 매달려 하거나 현실 도피를 하는 것입니다.";
}
else if(randomnum1 == 11){
    document.querySelector("h3").innerHTML = "WHEEL OF FORTURN(운명의 고리)";
    document.querySelector("h2").innerHTML = "기회가 도래하며 일이 척척 진행될 예감입니다. 반대로 피할 수 없는 운명의 흐름을 나타냅니다. 불운하게도 당하거나 당황스럽게 전개될 것으로 예상됩니다.";
}
else if(randomnum1 == 12){
    document.querySelector("h3").innerHTML = "JUSTICE(정의)";
    document.querySelector("h2").innerHTML = "감정에 휘둘리지 않고 원인과 결과를 객관적으로 바라보고 공정한 판단을 내릴 냉정함을 나타냅니다. 반대로 마음의 균형이 잡히지 않은 불공정한 상태. 도덕에 반하는 행동을 하고 있는지에 대한 경고일지도 모릅니다.";
}
else if(randomnum1 == 13){
    document.querySelector("h3").innerHTML = "THE HANGED MAN(매달린 남자)";
    document.querySelector("h2").innerHTML = "어찌할 도리가 없는 상황이기에 생각이 선명해지고 냉정과 깨달음을 얻을 수 있는 것을 의미합니다. 반대로 현실을 인정할 수 없어 몸부림치고 있는 상태입니다. 타개책을 찾지 못하고 좀처럼 어려운 상황에서 벗어나지를 못합니다.";
}
else if(randomnum1 == 14){
    document.querySelector("h3").innerHTML = "DEATH(사신)";
    document.querySelector("h2").innerHTML = "무언가의 끝으로 인해 새로운 시작의 씨앗을 나타냅니다. 반대로 죽음을 받아들일 수 없는, 즉 과거의 것들에 미련과 후회가 있고 노력하고 있습니다. 깨끗하게 포기할 수 없다면 과감하게 다시 도전하는 방향으로 전환해 나가는 것이 좋습니다.";
}
else if(randomnum1 == 15){
    document.querySelector("h3").innerHTML = "TEMPERANCE(절제)";
    document.querySelector("h2").innerHTML = "사람과 사람과의 관계에서 균형 감각을 나타냅니다. 건전하고 안정적인 정신, 균형 잡힌 대응, 양호한 건강 상태를 의미합니다. 반대로 절제를 실패하고 균형이 무너져 버리는 상태를 의미합니다. 이기적인 자세로 주변과의 부조화를 나타냅니다.";
}
else if(randomnum1 == 16){
    document.querySelector("h3").innerHTML = "THE DEVIL(악마)";
    document.querySelector("h2").innerHTML = "욕망, 배신, 타락, 나쁜 습관을 나타냅니다. 하지만 악마의 유혹에 이기려고 노력하고 있는 상태입니다. 그러한 자세가 있으면, 자신의 욕망과 싸우면서 점차 컨트롤할 수 있게 될 것입니다.";
}
else if(randomnum1 == 17){
    document.querySelector("h3").innerHTML = "THE TOWER(탑)";
    document.querySelector("h2").innerHTML = "예상치 못한 문제나 갑자기 일어나는 사건에 충격을 암시. 당연히 혼란이 있으며, 잃을 것도 크겠지만, 인생에 변화가 많은 해이므로 새로운 길로 전진하는 계기입니다.";
}
else if(randomnum1 == 18){
    document.querySelector("h3").innerHTML = "THE STAR(별)";
    document.querySelector("h2").innerHTML = "이상과 목표를 향해 올바른 길을 걸을 수 있습니다. 운명의 사람을 만나거나 재능이 생길 가능성도 있을 것입니다. 반대로 별이 땅에 떨어져 희망이 보이지 않게 되어 버립니다. 실망과 환멸, 조금 모자라고 불미스러운 결과 등을 나타냅니다.";
}
else if(randomnum1 == 19){
    document.querySelector("h3").innerHTML = "THE MOON(달)";
    document.querySelector("h2").innerHTML = "안개와 어둠 속에 있는 것 같은 불안한 상황에서 벗어나고 있는 상태. 조금씩 현실이 보인다고 할 수 있습니다. 고민이나 불안은 점차 벗어날 수 있을 것입니다. 반대로 막연한 불안을 의미하여 지금은 섣불리 움직이지 않는 것이 좋습니다.";
}
else if(randomnum1 == 20){
    document.querySelector("h3").innerHTML = "THE SUN(태양)";
    document.querySelector("h2").innerHTML = "열정과 밝은 마음, 그에 따라 얻어지는 성과를 의미합니다. 자신의 열정이 향하는 대로 노력하면 성공은 자연스럽게 따라오는 것입니다. 반대로 태양이 가라앉아 버리고 생각하는 힘을 발휘할 수 없습니다. 나쁜 상태까지는 가지 않지만 부진과 그늘이 나옵니다.";
}
else if(randomnum1 == 21){
    document.querySelector("h3").innerHTML = "JUDGEMENT(심판)";
    document.querySelector("h2").innerHTML = "헤어진 사람, 포기한 꿈, 계속 생각해왔던 아이디어 등의 아쉬움과 안타까움이 사라지고 다시 부활의 기회를 주는 것입니다. 반대로 아쉬움과 안타까움이 그대로 끝나버리는 예감, 아무리 기다려도 기회가 오지 않는 상황입니다. 현실적인 것부터 시작합시다.";
}
else if(randomnum1 == 22){
    document.querySelector("h3").innerHTML = "THE WORLD(세계)";
    document.querySelector("h2").innerHTML = "목표에 도달한 기쁨과 성취감을 맛볼 것입니다. 긴 시간을 들여왔고 그 결과로 당신은 충분히 만족하는 것입니다. 반대로 매사에 일단 완성은 보이지만 어딘가 납득이 가지 않아 고개를 갸웃거리는 상태입니다. 그 결과를 수긍하고 포기할 것인지, 더 높은 수준을 목표로 다시 시작할 것인지는 당신에게 달려 있습니다.";
}

window.onload = function() {
    var btn = document.getElementById('app_btn');

    btn.onclick = function() {
        window.location.reload();
        btn.onclick = null;
    }
}