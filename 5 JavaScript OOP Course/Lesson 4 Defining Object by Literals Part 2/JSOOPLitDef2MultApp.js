/* global document, alert, prompt */

/* JSOOP  [ Defining Object with Object literals {Part 2} ] */

function ageCalc() {

    alert("Welcome to [Application 1] Age Calculation Application [by Total Months, Weeks, Days] ...");

    var age = parseInt(prompt("Enter your Age By Years...")),
        months = (age * 12),
        weeks = (months * 4),
        days = (weeks * 30),
        hours = (days * 24),
        minutes = (hours * 60),
        seconds = (minutes * 60);


    var user = {
        ageMonths: months,
        ageWeeks: weeks,
        ageDays: days,
        ageHours: hours,
        ageMins: minutes,
        ageSecs: seconds,

        getAgeByMonths: function() {
            return "Your Age by Months = " + user.ageMonths;
        },

        getAgeByWeeks: function() {
            return "Your Age by Weeks = " + user.ageWeeks;
        },

        getAgeByDays: function() {
            return "Your Age by Days = " + user.ageDays;
        },

        getAgeByHours: function() {
            return "Your Age by Days = " + user.ageHours;
        },

        getAgeByMins: function() {
            return "Your Age by Days = " + user.ageMins;
        },

        getAgeBySecs: function() {
            return "Your Age by Days = " + user.ageSecs;
        },
    };

    var select = prompt("Press 1 to get your Age by Months \n Press 2 to get your Age by Weeks \n Press 3 to get your Age by  Days\n Press 4 to get your Age by Hours\n Press 5 to get your Age by Minutes\n Press 6 to get your Age by Seconds ...");

    if (select == "1") {
        document.getElementById("txtarea1").innerHTML = user.getAgeByMonths();

    } else if (select == "2") {
        document.getElementById("txtarea1").innerHTML = user.getAgeByWeeks();

    } else if (select == "3") {
        document.getElementById("txtarea1").innerHTML = user.getAgeByDays();

    } else if (select == "4") {
        document.getElementById("txtarea1").innerHTML = user.getAgeByHours();

    } else if (select == "5") {
        document.getElementById("txtarea1").innerHTML = user.getAgeByMins();

    } else if (select == "6") {
        document.getElementById("txtarea1").innerHTML = user.getAgeBySecs();

    } else {
        alert("Error Entry!");
    }

}
//====================================================================================

function ConstCalc() {
    alert("Welcome to [Application 2] Constellation Application...");

    var strYear = parseInt(prompt("Enter your birth Year...")),
        strMonth = parseInt(prompt("Enter your birth Month...")) - 1,
        strDay = parseInt(prompt("Enter your birth Day...")),
        userDate = new Date(strYear, strMonth, strDay),
        userYear = userDate.getFullYear(),
        userMonth = userDate.getMonth(),
        userDay = userDate.getDay();


    alert("Your date is : " + userDate);



    var userConst = {
        Capricorn1: new Date(userYear, 1, 22),
        Capricorn2: new Date(userYear, 0, 30),
        setCapricorn: function() {
            return 'Your Constellation is : [Capricorn] ';
        },


        Aquarious1: new Date(userYear, 0, 21),
        Aquarious2: new Date(userYear, 1, 19),
        setAquarious: function() {
            return 'Your Constellation is : [Aquarious] ';
        },


        Pisces1: new Date(userYear, 1, 20),
        Pisces2: new Date(userYear, 2, 20),
        setPisces: function() {
            return 'Your Constellation is : [Pisces] ';
        },


        Aries1: new Date(userYear, 2, 21),
        Aries2: new Date(userYear, 3, 20),
        setAries: function() {
            return 'Your Constellation is : [Aries] ';
        },


        Taurus1: new Date(userYear, 3, 21),
        Taurus2: new Date(userYear, 4, 21),
        setTaurus: function() {
            return 'Your Constellation is : [Taurus] ';
        },


        Gemini1: new Date(userYear, 4, 22),
        Gemini2: new Date(userYear, 5, 21),
        setGemini: function() {
            return 'Your Constellation is : [Gemini] ';
        },


        Cancer1: new Date(userYear, 5, 22),
        Cancer2: new Date(userYear, 6, 22),
        setCancer: function() {
            return 'Your Constellation is : [Cancer] ';
        },


        Leo1: new Date(userYear, 6, 23),
        Leo2: new Date(userYear, 7, 22),
        setLeo: function() {
            return 'Your Constellation is : [Leo] ';
        },


        Virga1: new Date(userYear, 7, 23),
        Virga2: new Date(userYear, 8, 22),
        setVirga: function() {
            return 'Your Constellation is : [Virga] ';
        },


        Libra1: new Date(userYear, 8, 23),
        Libra2: new Date(userYear, 9, 22),
        setLibra: function() {
            return 'Your Constellation is : [Libra] ';
        },

        Scorpion1: new Date(userYear, 9, 23),
        Scorpion2: new Date(userYear, 10, 21),
        setScorpion: function() {
            return 'Your Constellation is : [Scorpion] ';
        },

        Sagittarius1: new Date(userYear, 10, 22),
        Sagittarius2: new Date(userYear, 11, 21),
        setSagittarius: function() {
            return 'Your Constellation is : [Sagittarius] ';
        },

    };

    if (userConst.Capricorn1 <= userDate && userDate <= userConst.Capricorn2) {

        document.getElementById("txtarea2").innerHTML = userConst.setCapricorn();

    } else if (userConst.Aquarious1 <= userDate && userDate <= userConst.Aquarious2) {

        document.getElementById("txtarea2").innerHTML = userConst.setAquarious();


    } else if (userConst.Pisces1 <= userDate && userDate <= userConst.Pisces2) {

        document.getElementById("txtarea2").innerHTML = userConst.setPisces();


    } else if (userConst.Aries1 <= userDate && userDate <= userConst.Aries2) {

        document.getElementById("txtarea2").innerHTML = userConst.setAries();


    } else if (userConst.Taurus1 <= userDate && userDate <= userConst.Taurus2) {

        document.getElementById("txtarea2").innerHTML = userConst.setTaurus();


    } else if (userConst.Gemini1 <= userDate && userDate <= userConst.Gemini2) {

        document.getElementById("txtarea2").innerHTML = userConst.setGemini();


    } else if (userConst.Cancer1 <= userDate && userDate <= userConst.Cancer2) {

        document.getElementById("txtarea2").innerHTML = userConst.setCancer();


    } else if (userConst.Leo1 <= userDate && userDate <= userConst.Leo2) {

        document.getElementById("txtarea2").innerHTML = userConst.setLeo();


    } else if (userConst.Virga1 <= userDate && userDate <= userConst.Virga2) {

        document.getElementById("txtarea2").innerHTML = userConst.setVirga();


    } else if (userConst.Libra1 <= userDate && userDate <= userConst.Libra2) {

        document.getElementById("txtarea2").innerHTML = userConst.setLibra();


    } else if (userConst.Scorpion1 <= userDate && userDate <= userConst.Scorpion2) {

        document.getElementById("txtarea2").innerHTML = userConst.setScorpion();


    } else if (userConst.Sagittarius1 <= userDate && userDate <= userConst.Sagittarius2) {

        document.getElementById("txtarea2").innerHTML = userConst.setSagittarius();


    } else {

        alert("Error Entry!");

    }

}

//====================================================================================

function GradeCalc() {
    alert("Welcome to [Application 3] Grade Calculation Application...");

    var userGrade = parseInt(prompt("Enter your Grade by numbers..."));


    alert("your Score = " + userGrade);


    var userStrG = {
        Fail: "Fail! [F]",
        setFail: function() {
            return 'Your Grade is ' + userStrG.Fail;
        },


        Pass: "Pass! [D]",
        setPass: function() {
            return 'Your Grade is ' + userStrG.Pass;
        },


        Good: "Good! [C]",
        setGood: function() {
            return 'Your Grade is ' + userStrG.Good;
        },


        GoodPlus: "Good Plus [C+] !",
        setGoodPlus: function() {
            return 'Your Grade is ' + userStrG.GoodPlus;
        },


        VGood: "Very Good Plus [B] !",
        setVGood: function() {
            return 'Your Grade is ' + userStrG.VGood;
        },


        VGoodPlus: "Very Good Plus [B+] !",
        setVGoodPlus: function() {
            return 'Your Grade is ' + userStrG.VGoodPlus;
        },

        Excellent: "Excellent [A] !",
        setExcellent: function() {
            return 'Your Grade is ' + userStrG.Excellent;
        },

        ExcellentPlus: "Excellent Plus [A+] !",
        setPlusExcellent: function() {
            return 'Your Grade is ' + userStrG.ExcellentPlus;
        },

    };


    if (userGrade == "") {

        alert("Empty Entry !");

    } else {

        if (userGrade == isNaN) {
            alert("The Entry is Not A number !");

        } else {

            if (100 >= userGrade && userGrade >= 95) {
                document.getElementById("txtarea3").innerHTML = userStrG.setPlusExcellent();
                alert(userStrG.setPlusExcellent());

            } else if (95 > userGrade && userGrade >= 90) {
                document.getElementById("txtarea3").innerHTML = userStrG.setExcellent();
                alert(userStrG.setExcellent());

            } else if (90 > userGrade && userGrade > 80) {
                document.getElementById("txtarea3").innerHTML = userStrG.setGoodPlus();
                alert(userStrG.setGoodPlus());

            } else if (80 > userGrade && userGrade >= 75) {
                document.getElementById("txtarea3").innerHTML = userStrG.setGood();
                alert(userStrG.setGood());

            } else if (75 > userGrade && userGrade >= 50) {
                document.getElementById("txtarea3").innerHTML = userStrG.setPass();
                alert(userStrG.setPass());

            } else if (userGrade < 50) {
                document.getElementById("txtarea3").innerHTML = userStrG.setFail();
                alert(userStrG.setFail());

            } else {
                alert("Error Entry!");
            }
        }

    }

}
// ============================================================================================================

function Display1() {
    document.getElementById('txtarea1').textContent =  ageCalc +  '\n' + '='.repeat(30);
}

function Display2() {
    document.getElementById('txtarea2').textContent =  ConstCalc  + '\n' + '='.repeat(30);
}

function Display3() {
    document.getElementById('txtarea3').textContent =  GradeCalc + '\n' + '='.repeat(30) ;
}




