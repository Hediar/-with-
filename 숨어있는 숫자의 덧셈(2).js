function solution(my_string) {
    var answer = 0;
    const splitStringList = my_string.split('');
    let num = '';
    for(let i = 0; i < splitStringList.length; i++) {
        if (!isNaN(splitStringList[i])) {
            num += String(splitStringList[i]);
        } else {
            answer += Number(num);
            num = '';
        }
    }
    return answer;
}

solution("aAb1c2d34");