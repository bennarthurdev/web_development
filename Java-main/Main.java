public class Main{
	public static void main(String[] args) {
		//Declaring variables
		int result , num1 , num2; //comma-separated list

		/*
		*String - stores text, such as "Hello". String values are surrounded by double quotes
		*int - stores integers (whole numbers), without decimals, such as 123 or -123
		*float - stores floating point numbers, with decimals, such as 19.99 or -19.99
		*char - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes
		*boolean - stores values with two states: true or false
		 */
		
		//To create a variable, you must specify the type and assign it a value
		String myText = "A description for anything";
		System.out.println(myText);

		//Describing a sum with variables
		num1 = 2; //value assigned "hard-code"
	    num2 = num1 * 2; //4
		num1 = num2; //4 copy
		//For numeric values, the + character works as a mathematical operator (notice that we use int (integer) variables here
		result = num2+num1; 

		//To use a constant <unchangeable and read-only>
		final int CONSTRESULT = result; 

		//You can also use the + character to add a variable to another variable
		String str = "The sum between num1 and num2 is equal to:";
		String description = str  + CONSTRESULT;
		System.out.println(description); //8

	}
} 