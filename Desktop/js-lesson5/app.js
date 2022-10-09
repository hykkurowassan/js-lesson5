for (let i = 1; i < 51; i++) {
    console.log(i);
    if (i % 10 === 0) {
        console.log('今'+ i + '回ループしました。')
    }
    if (i % 4 === 0) {
        console.log('4で割れる数です。' + i)
    } else if (i === 50) {
        alert( i + '回カウント終わりました');
    }
}
