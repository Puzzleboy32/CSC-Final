function checkCreds()
{
    var Name = document.getElementById("Name").value;
    var Zipcode = document.getElementById("Zipcode").value;

    if (Name.length >0)
    {
       
        if (Zipcode >9999 && Zipcode< 99999)
        {
            location.replace("String.html");
        }
        else
        {
            alert("invalid ZipCode #")
        }
    }
    else
    {
        alert("not valid name length");
    }

}