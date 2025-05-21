function solution(quiz) {
    var answer = [];
    for(let i = 0; i < quiz.length; i++) {
        const splitQuiz = quiz[i].split(' ');
        console.log('splitQuiz', splitQuiz);
        let result = splitQuiz[0];

        for(let j = 1; j < splitQuiz.length; j++) {
            if (j % 2 === 1) { // 홀수일때, 연산자
                console.log(result,splitQuiz[j] );
                if (splitQuiz[j] === '+') {
                    result += Number(splitQuiz[j+1]);
                } else if (splitQuiz[j] === '-') {
                    result -= Number(splitQuiz[j+1]);
                } else {
                 
                    if (result == splitQuiz[j+1]) {
                        answer[i] = 'O';
                    } else {
                        answer[i] = 'X';
                    }
                }
            } 
        }
    }
    return answer;
}

solution(["3 - 4 = -3", "5 + 6 = 11"]);

/**
 * 
 * +가 하나라도 문자열 있으면 문자열로 합치기 때문에 주의하기 
 */