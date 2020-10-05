(function(){  

    const isNddPair = (window.location.hostname == "semainepaire.fr" || window.location.hostname == "localhost" )
    const isNddImpair = (window.location.hostname == "semainepaire.fr")

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
        if(!isNddPair && !isNddImpair){
            return;
        }

        let isPaire = ((getWeekNumber(new Date())%2) == 0);
        let title = "";
        let sub = "";

        if(isNddPair){
            if(isPaire){
                title= `Yes, it's a semaine paire`
                sub=`So you can venir à l'agence<br/>if your semaine is paire<br/>else : non, don't come à l'agence.`
            } else {
                title= `No, it's a semaine impaire`
                sub=`So if your semaine is paire<br/>you can stay at your maison<br/>and come à l'agence the semaine prochaine.`
            }
        } else {
            if(!isPaire){
                title= `Yes, it's a semaine impaire`
                sub=`So you can venir à l'agence<br/>if your semaine is impaire<br/>else : non, don't come à l'agence.`
            } else {
                title= `No, it's a semaine paire`
                sub=`So if your semaine is impaire<br/>you can stay at your maison<br/>and come à l'agence the semaine prochaine.`
            }
        }

        document.getElementById('title').innerHTML = title;
        document.getElementById('subtitle').innerHTML = sub;

    } 

    init();

})(window);