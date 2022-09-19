const password: number[] = []
for(let i: number = 0; i < 7; i++ ){
    password.push((Math.random()*10 ) )
}
password.forEach(number => console.log(number));

