function main() 
	{
		var num1;
		var answer;
		var num2;
		
		num1 = prompt('What is the first number to multiply?', 8);
		num2 = prompt('What would you like to see multiplied by '+ num1, 8);
		answer = num1*num2;
		
		document.write('The result of multiplying '+num1+' by '+ num2 +' is <BR>');
		document.write('<BR>');
		document.write(answer);
	}