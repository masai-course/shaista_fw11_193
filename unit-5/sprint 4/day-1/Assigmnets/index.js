const sum = (n) =>{
   
    return  (n*(n+1))/2;
}
const sub = (a,b) =>{
    return a-b;
}
const time =(duration)=>{
    var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    hours = (hours > 1) ?  hours + " hours" : hours + " hour";
    minutes = (minutes > 1) ? minutes + " minutes" : minutes + " minute";
    seconds = (seconds > 1) ?  seconds+ " seconds" : seconds +" second";
  return `${hours} ${minutes} ${seconds}`
}

const  validatePassword=(pro) =>{
        //console.log(pro.length);
    if (pro.length < 8) {
        return ("Your password must be at least 8 characters"); 
    }
    if (pro.search(/[a-z]/i) < 0) {
        return ("Your password must contain at least one small letter.");
    }
    if (pro.search(/[0-9]/) < 0) {
        return ("Your password must contain at least one digit."); 
    }
     if (pro.search(/[A-Z]/) < 0) {
        return ("Your password must contain at least one capital letter."); 
    }
   
    return ("correct password");
}

const tax=(amount)=>{
    if(amount<=250000){
        return "No tax";
    }else if(amount >250000 && amount<=500000){
        return (10/100)*amount;
    }else if(amount >500000&&amount<=1000000){
        return (20/100)*amount;
    }else if(amount>1000000){
        return (30/100)*amount;
    }
}
 const taxsav=(amount)=>{
   if(amount<=500000){
        return (50/100)*amount;
    }if(amount>500000 &&amount<=1000000){
        return (30/100)*amount;
    }else if(amount>1000000){
        return (10/100)*amount;
    }
}
function TestSudoku(arr){
let N = 9;
let orgarr = arr;
if (solveSuduko(orgarr, 0, 0))
{
    let resultarr = [];
    for(let i = 0; i < orgarr.length; i++)
    {
        resultarr.push(orgarr[i]);
    }
    console.log(resultarr)
    return resultarr;
}
else
{
console.log("-1");
}

function solveSuduko(grid, row, col)
{
	if (row == N - 1 && col == N)
    {
		return true;
    }
	if (col == N)
	{
		row++;
		col = 0;
	}
	if (grid[row][col] != 0)
    {
		return solveSuduko(grid, row, col + 1);
    }
	for(let num = 1; num < 10; num++)
	{
		if (isSafe(grid, row, col, num))
		{
			grid[row][col] = num;
			if (solveSuduko(grid, row, col + 1))
				return true;
		}
		grid[row][col] = 0;
	}
	return false;
}


function isSafe(grid, row, col, num)
{
	for(let x = 0; x <= 8; x++)
    {
		if (grid[row][x] == num)
        {
        	return false;
        }
    }
	for(let x = 0; x <= 8; x++)
    {
		if (grid[x][col] == num)
			return false;
    }
	let startRow = row - row % 3,
		startCol = col - col % 3;
		
	for(let i = 0; i < 3; i++)
    {
		for(let j = 0; j < 3; j++)
			if (grid[i + startRow][j + startCol] == num)
				return false;
    }
	return true;
}
}
module.exports ={sum,sub,time,validatePassword,tax,taxsav,TestSudoku};

