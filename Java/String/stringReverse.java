import java.util.*;
import java.lang.*;

class ReverseString {
	
	public static void main (String args[]) {

		String string = "whatever";
		System.out.println("this is a string:");
		System.out.println(string);
		string = reverseTheString1(string);
	 	System.out.println(string);
	}
	
	public static String reverseTheString1(String thisString) {

		int i, length = thisString.length();		
		System.out.println("added length " + length);

		StringBuilder newstring = new StringBuilder(length);
		System.out.println("we have a string builder");

		for (i=(length-1); i>=0; i--) {
			newstring.append(thisString.charAt(i));
			System.out.println("for loop "+i);
		}

		System.out.println("ready to return");
		return newstring.toString();
	}

}
