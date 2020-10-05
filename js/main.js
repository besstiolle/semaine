(function(){  

    const isNddPair = (window.location.hostname == "www.semainepaire.fr" || window.location.hostname == "localhost" )
    const isNddImpair = (window.location.hostname == "www.semaineimpaire.fr")

    let getWeekNumber = (d) => {
        // Copy date so don't modify original
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        // Set to nearest Thursday: current date + 4 - current day number
        // Make Sunday's day number 7
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
        // Get first day of year
        var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
        // Calculate full weeks to nearest Thursday
        var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
        // Return array of year and week number
        return weekNo;
    }
    
    let init = () => {

        let isPaire = ((getWeekNumber(new Date())%2) == 0);
        let question = "";
        let answer = "";
        let other = "";
        let css = "";


        if(!isNddPair && !isNddImpair){
            question = `Oups, wrong door....`;
        } else {
            if(isNddPair){
                question = `Is it a semaine paire ?`
                if(isPaire){
                    answer= `Yes`
                    css=`Y`
                    other=`So you can venir à l'agence if your semaine is paire, else : non, don't come à l'agence.`
                } else {
                    answer= `No`
                    css=`N`
                    other=`So if your semaine is paire you can stay at your maison and come à l'agence the semaine prochaine.`
                }
            } else {
                question = `Is it a semaine impaire ?`
                if(!isPaire){
                    answer= `Yes`
                    css=`Y`
                    other=`So you can venir à l'agence if your semaine is impaire, else : non, don't come à l'agence.`
                } else {
                    answer= `No`
                    css=`N`
                    other=`So if your semaine is impaire you can stay at your maison and come à l'agence the semaine prochaine.`
                }
            }
            
            
        }


        document.getElementById('Q').innerHTML = question;
        document.getElementById('A').innerHTML = answer;
        document.getElementById('X').innerHTML = other;
        
        document.getElementById('A').classList.add(css);

    } 

    init();

})(window);