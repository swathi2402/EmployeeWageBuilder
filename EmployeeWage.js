//UC 1
{
    const IS_ABSENT = 0
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if ( empCheck == IS_ABSENT) {
        console.log("UC1 - Employee is Absent");
        return;
    } else {
        console.log("UC1 - Employee is Present");
    }
}

//UC 2
{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;

    let employeeHours = 0;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    switch(empCheck){
        case IS_PART_TIME: 
                employeeHours = PART_TIME_HOURS;
                break;
        case IS_FULL_TIME:
                employeeHours = FULL_TIME_HOURS;
                break;
        default: 
                employeeHours = 0
    }
    let employeeWage = employeeHours * WAGE_PER_HOUR;
    console.log("UC2- Employee Wage: " + employeeWage);
}

{   
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    const NUM_OF_WORING_DAYS = 20;
    const MAX_HOURS_IN_MONTH = 160;


    function getWorkingHours(empCheck){
        switch(empCheck){
            case IS_PART_TIME:
                return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
            default:
                return 0;
        }
    }
    
    let totalEmployeeHours = 0;
    let totalWorkingDays = 0;
    while(totalEmployeeHours <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmployeeHours += getWorkingHours(empCheck);
    }
    let employeeWage = totalEmployeeHours * WAGE_PER_HOUR;
    console.log("Total Days: " + totalWorkingDays + " Total Hours: " + totalEmployeeHours + " Employee Wage: " + employeeWage);
}