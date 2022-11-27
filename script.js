        //Determinar se é primo ou não
       function primo(p){
        //Nao pode ser inferior a 1
        if(p <= 1) return false;
        //2 e 3 é primo
        if (p <=3) return true;
        // verficar se é divisivel por 2 e 3
        if(p % 2 == 0 || p % 3 ==0) return false;
        // 5 é primo a partir disso a cada +6 é primo
        for(let i=5; i * i <= p; i+=6){
            if (p % i == 0 || p % (i+2) == 0) return false
        }
        return true
       }

       let primos = primo(7)
       console.log(primos)
