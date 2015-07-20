//This is the clean version

public class ReverseString {
	
	public static void main (String[] arg) {
		
		String string = new String("This is a string!\n");
		StringBuilder newstring = new StringBuilder();
		
		for (int i = string.length()-2; i >= 0; i--) {
			newstring.append(string.charAt(i));	
		}
		
		//output strings
		System.out.print(string);
		System.out.println(newstring.toString());
		
	}
	
}