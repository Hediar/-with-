function solution(babbling) {
    var answer = 0;
    const check = ["aya", "ye", "woo", "ma"];
    for(let i = 0; i < babbling.length; i++) {
        let checkBabbling = babbling[i];
        for(let j = 0; j < check.length; j++) {
            checkBabbling = checkBabbling.replace(check[j], 1);
            if (checkBabbling === '') break;
        }
        if (checkBabbling.split('').every(ch => ch === '1')){
            answer++;
        }
    }
    return answer;
}

solution(["aya", "yee", "u", "maa", "wyeoo"]);