function generation(year,type)
{
    if(year>0)
    {
        if(type=='m')
        {
            if(year==1)
            {
                console.log("son")
            }
            else if(year==2)
            {
                console.log("grandson")
            }
            else {
                console.log("great grandson")
            }
        }
       else if(type=='f')
        {
            if(year==1)
            {
                console.log("daughter")
            }
            else if(year==2)
            {
                console.log("grand daughter")
            }
            else {
                console.log("great granddaughter")
            }
       }
    }
    else if(year<0)
    {
        if(type=='m')
        {
            if(year==-1)
            {
                console.log("father")
            }
            else if(year==-2)
            {
                console.log("grand father")
            }
            else {
                console.log("great grandfather")
            }
        }
       else if(type=='f')
        {
            if(year==-1)
            {
                console.log("mother")
            }
            else if(year==-2)
            {
                console.log("grand mother")
            }
            else {
                console.log("great grand mother")
            }
       }
    }
    else if(year==0)
    {
        console.log("Me!")
    }
}
let year=0
let type='m'
generation(year,type)
