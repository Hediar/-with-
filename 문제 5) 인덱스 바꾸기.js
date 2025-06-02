function solution(my_string, num1, num2) {
    var answer = '';
    const splitString = my_string.split('');
    const num1String = splitString[num1];
    const num2String =splitString[num2];
    for(let i = 0; i < splitString.length; i++) {
        if(i === num1) {
            splitString[i] = num2String;
        }
        else if (i === num2) {
            splitString[i] = num1String;
        }
    }
    answer = splitString.join("");
    return answer;
}

solution("I love you",3, 6);

/** 버전2
 function solution(my_string, num1, num2) {
    const splitString = my_string.split('');
    [splitString[num1], splitString[num2]] = [splitString[num2], splitString[num1]];
    return splitString.join('');
}
 */