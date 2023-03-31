class Employees {
    constructor (name, type, salesTarget, salesAchieved, monthlyPay, monthlyBonus) {
        this.name = name; // employees name
        this.type = type; // what contract they're under
        this.salesTarget = salesTarget; // monthly sales target
        this.salesAchieved = salesAchieved; // what sales they brought in that month
        this.monthlyPay = monthlyPay; // total amount of money owed
        this.monthlyBonus = monthlyBonus; // how much of that money owed is a bonus 
        // I've defined these attributes in the master class as these values are present in all 3 employment types. 
    }
}

class Salaried extends Employees { // new sub class which inherits the attribs. from the master class, + a new attribute: salary
    constructor (name, type, salesTarget, salesAchieved, salary, monthlyBonus, monthlyPay) {
        super (name, type, salesTarget, salesAchieved, monthlyPay, monthlyBonus) // tell the program which attribs are inherited
            this.salary = salary; // define the new attribute
    }

    bonusSalaryCalculator () {
        
        if (this.salesAchieved >= this.salesTarget) { // check if they met or exceeded their target
            this.monthlyBonus = this.salary / 10; // if they did, find the value of the 10% bonus, and store it as the monthly bonus   
            this.monthlyPay = this.salary + this.monthlyBonus; // find the value needed to be paid to the employee and store it under the monthly pay attrib. 
        }

        else {
            this.monthlyPay = this.salary; // if they didn't m,eet their target, their monthly is the same as their salary. 
        }
    
    }
}

class Hourly extends Employees { // new sub class for hourly employees
    constructor (name, type, salesTarget, salesAchieved, hourlyRate, hoursLogged, monthlyBonus, monthlyPay) {
        super (name, type, salesTarget, salesAchieved, monthlyPay, monthlyBonus) // tell the program which attribs are inherited
            this.hourlyRate = hourlyRate;
            this.hoursLogged = hoursLogged;
            // add new attribs in relation to the hours worked & hourly rate

    }
    bonusHourlyCalculator () { 
        if (this.salesAchieved >= this.salesTarget) { // check if they met or exceeded their 
            this.monthlyBonus = (this.hourlyRate / 2) * this.hoursLogged; // store the 50% bonus in the monthly bonus attrib.
            this.monthlyPay = (this.hourlyRate * 1.5) * this.hoursLogged; // add together all the money owed and store it in the monthly pay attribute
        }
        
        else {
            this.monthlyPay = this.hourlyRate * this.hoursLogged;  // if they don't meet target, no bonus so just find the monthly pay by multiple hourly rate by hours worked
        }
    }

    
}

class Hybrid extends Employees { // third & final class for hybrid employees
    constructor (name, type, salesTarget, salesAchieved, salary, hourlyRate, hoursLogged, monthlyBonus, monthlyPay) {
        super (name, type, salesTarget, salesAchieved, monthlyBonus, monthlyPay) // tell program which are inherited by master 
            this.salary = salary;
            this.hourlyRate = hourlyRate;
            this.hoursLogged = hoursLogged;
    }

    hybridBonusCalculator () { 
        if (this.salesAchieved >= this.salesTarget) { // check if they met or exceeded their target
            this.monthlyBonus = (this.hourlyRate / 5) * this.hoursLogged; // if they did, find the 20% bonus value 
        }
        

        this.monthlyPay = this.salary + this.monthlyBonus + (this.hourlyRate * this.hoursLogged); // then find the value based on salary + hours worked 
    }

    // hybridHourlyPay () {
    //     this.monthlyPay = (String.fromCharCode(163) + (this.salary + (this.hourlyRate * this.hoursLogged)));
    // }
}

const janeDoe = new Salaried ("Jane Doe", "Salary", 10000, 12000, 2800, 0, 0);
const johnDoe = new Salaried ("John Doe", "Salary",12000, 8000, 3000, 0, 0);

let salariedEmployees = [janeDoe, johnDoe]; // 2 Salary based employees added to an array

for (i=0; i < salariedEmployees.length; i ++) {
    salariedEmployees[i].bonusSalaryCalculator(); // cycle through the array and run the bonus calculator that's stored in the salaried sub class
}

const stuartWeeks = new Hourly ("Stuart Weeks","Hourly", 5000, 6000, 14, 120, 0, 0);
const emmaBates = new Hourly ("Emma Bates", "Hourly", 6000, 5800, 15, 100, 0, 0); 

let hourlyEmployees = [stuartWeeks, emmaBates]; // 2 Hourly workers in an array

for (i=0; i < hourlyEmployees.length; i ++) {
    hourlyEmployees[i].bonusHourlyCalculator(); // again, cycle through the array and run the method in the Hourly sub class 
}

const teddyNorton = new Hybrid ("Teddy Norton", "Hybrid", 12000, 12500, 1400, 8, 140, 0, 0);
const aliceMcgill = new Hybrid ("Alice McGill", "Hybrid", 6000, 5700, 1200, 6, 80, 0, 0);

let hybridEmployees = [teddyNorton, aliceMcgill]; // Hyrid employees array 

for (i=0; i < hybridEmployees.length; i ++) {
    hybridEmployees[i].hybridBonusCalculator(); // cycle through the array, running the method in the Hybrid sub class  
}

// //now, add all the employees together, and display their pay for the month in a table
 let employeeList = [janeDoe, johnDoe, stuartWeeks, emmaBates, teddyNorton, aliceMcgill];
 
 for (i=0; i<employeeList.length; i++) {
     console.log (`${employeeList[i].name} is owed \u00A3${employeeList[i].monthlyPay} this month`);
    }

console.log ("Here's the breakdown:")
console.table (employeeList);