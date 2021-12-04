function print(){

    let resortDocument = {
        "name": "Teton Pass",
        "Senior (65+)": "$45",
        "Adult (18-64)": "$50",
        "Youth (7-17)": "$45",
        "Child (0-6)": "FREE" 
    }
    let resortDocument1 = {
        "name": "Lookout Pass Ski Area",
        "Super Senior (80+)": "FREE",
        "Senior (62-79)": "$47",
        "Adult (18-61)": "$59",
        "Youth (7-17)": "$47",
        "Child (0-6)": "FREE" 
    }
    let resortDocument2 = {
        "name": "Bear Paw Ski Bowl",
        "Senior (80+)": "FREE",
        "Adult (18-79)": "$25",
        "Youth (9-17)": "$20",
        "Child (0-8)": "FREE" 
    }
    let resortDocument3 = {
        "name": "Blacktail Mountain",
        "Senior (70+)": "$26",
        "Adult (18-69)": "$50",
        "Teen (13-17)": "$35",
        "Child (8-12)": "$25",
    }
    let resortDocument4 = {
        "name": "Turner Mountain",
        "Senior (62+)": "$35",
        "Adult (19-64)": "$42",
        "Tenn (13-18)": "$30",
        "Child (7-12)": "$25" 
    }
    let resortDocument5 = {
        "name": "Discovery Ski Resort",
        "Senior (65+)": "$52",
        "Adult (19-64)": "$59",
        "Child (6-12)": "$30" 
    }
    let resortDocument6 = {
        "name": "Red Lodge Ski Resort",
        "Super Senior (70+)": "$25",
        "Senior (65-69)": "$49",
        "Adult (19-64)": "$65",
        "Teen (13-18)": "$48",
        "Child (6-12)": "$25" 
    }
    let resortDocument7 = {
        "name": "Big Sky Ski Resort",
        "Senior (70+)": "$100-$145",
        "Adult (15-69)": "$161-$225",
        "Child (7-14)": "$105-$145" 
    }
    let resortDocument8 = {
        "name": "Bridger Bowl Ski Resort",
        "Super Senior (80+)": "FREE",
        "Senior (70-79)": "$39",
        "Adult (19-69)": "$69",
        "Child (7-12)": "$28" 
    }
    let resortDocument9 = {
        "name": "Maverik Ski Resort",
        "Senior (65+)": '$40',
        "Adult (13-64)": '$45',
        "Child (5-12)": '$30'
    }
    let resortDocument10 = {
        "name": "Montana Snow Bowl",
        "Senior (60+)": '$57',
        "Adult (18-59)": '$60',
        "Student (13-22 w/ school ID)": '$57',
        "Child (6-12)": '$27'
    }
    let resortDocument11 = {
        "name": "Great Divide Ski Resort",
        "Senior (70+)": '$26',
        "Adult (18-69)": '$56',
        "Teen (12-17)": '$44',
        "Child (6-11)": '$26'
    }
    let resortDocument12 = {
        "name": "Showdown Ski Resort",
        "Senior (70+)": '$40',
        "Adult (18-69)": '$50',
        "Teen (11-17)": '$40',
        "Child (6-10)": '$25'
    }
    let resortDocument13 = {
        "name": "Lost Trail Ski Resort",
        "Super Senior (70+)": '$24',
        "Senior (60-69)": '$45',
        "Adult (13-59)": '$53',
        "Child (6-12)": '$43'
    }
    let resortDocument14 = {
        "name": "Whitefish Ski Resort",
        "Super Senior (70+)": '$29',
        "Senior (65-69)": '$76',
        "Adult (19-64)": '$89',
        "Teen (13-18)": '$76',
        "Child (7-12)": '$45'
    }
    let resorts = [resortDocument, resortDocument1, resortDocument2, resortDocument3, 
        resortDocument4, resortDocument5, resortDocument6, resortDocument7, 
        resortDocument8, resortDocument9, resortDocument10, resortDocument11, 
        resortDocument12, resortDocument13, resortDocument14];


    var input = document.getElementById('resortInput').value

    let current_resort = {};
    for(i in resorts){
        if (input == resorts[i]["name"]){
            current_resort = resorts[i];
        }   
    }
    document.getElementById("ticketTable").innerHTML = "";
    let table = document.querySelector("table");
    let data = (current_resort);
    if(table){
        generateTable(table, data);
    }
    
}

  function generateTable(table, data) {
      console.log(data);
    for (key in data) {
        console.log(key + " " + data[key]);
        let row = table.insertRow();
        let cell = row.insertCell();
        let text = document.createTextNode(key);
        cell.appendChild(text);
        cell = row.insertCell();
        text = document.createTextNode(data[key]);
        cell.appendChild(text);
    }
  }
  