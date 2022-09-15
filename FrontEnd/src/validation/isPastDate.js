export default function isPastDate(dateGiven) {

  const isPastDate = (dateGiven) =>//format yyyy-mm-dd
    {
        const current = new Date();
        const today = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
        const myArrayToday = today.split("-");
        const myArrayGiven = dateGiven.split("-");

        if(Number(myArrayToday[0]) > Number(myArrayGiven[0])) 
        {
            return true;
        }
        else if (Number(myArrayToday[0]) < Number(myArrayGiven[0]))
        {
            return false;
        }
        else
        {
            if(Number(myArrayToday[1]) > Number(myArrayGiven[1]))
            {
                return true;
            }
            else if (Number(myArrayToday[1]) < Number(myArrayGiven[1]))
            {
                return false;
            }
            else
            {
                if(Number(myArrayToday[2]) > Number(myArrayGiven[2]))
                {
                    return true;
                }
                else if (Number(myArrayToday[2]) < Number(myArrayGiven[2]))
                {
                    return false;
                }
                else{return false;}
            }

        }
    }
    
  return isPastDate(dateGiven);
  
}
