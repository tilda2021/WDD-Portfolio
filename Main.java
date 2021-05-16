// Week four assignment 1
// CIT-260
// Name: Matilda Orire Coffman
// May 14th, 2021

import java.util.Scanner;
public class Main {

    public static void main(String[] args) {
        // Create a scanner object
        Scanner input = new Scanner(System.in);

        // Tell the user what the program does
        System.out.println("This program converts a hexadecimal digit into a four digit binary number.");

        // Gets the user's input
        System.out.print("Enter a hexadecimal number: ");

        // Save the user's input
        String userInput = input.nextLine().trim();
        System.out.println();

        //convert user input to uppercase
        userInput = userInput.toUpperCase();

        // If the user's input is not a valid hexadecimal digit tell the user and terminate the program.
        if (userInput.length() > 1) {
            System.out.format("%s is not a valid hexadecimal digit.", userInput);
        } else {
            // Convert the user input to char data type and store it in variable named character
            char character = userInput.charAt(0);

            // If the user input is not between 0 and 9 or A and F tell the user and end the program
            if (character < '0' || ( character > '9' && character < 'A') || character > 'F') {

                    System.out.format("%s is not a valid hexadecimal digit.\n", userInput);
                    System.out.println("Goodbye.");
                } else {
                    String binary = "";
                    switch (character) {
                        case '0':
                            binary = "0000";
                            break;
                        case '1':
                            binary = "0001";
                            break;
                        case '2':
                            binary = "0010";
                            break;
                        case '3':
                            binary = "0011";
                            break;
                        case '4':
                            binary = "0100";
                            break;
                        case '5':
                            binary = "0101";
                            break;
                        case '6':
                            binary = "0110";
                            break;
                        case '7':
                            binary = "0111";
                            break;
                        case '8':
                            binary = "1000";
                            break;
                        case '9':
                            binary = "1001";
                            break;
                        case 'A':
                            binary = "1010";
                            break;
                        case 'B':
                            binary = "1011";
                            break;
                        case 'C':
                            binary = "1100";
                            break;
                        case 'D':
                            binary = "1101";
                            break;
                        case 'E':
                            binary = "1110";
                            break;
                        case 'F':
                            binary = "1111";
                            break;
                    }
                    System.out.format("The binary value is %s", binary);

                    System.out.println();

                    // Outputs a goodbye message.
                    System.out.println("Goodbye.");
                }
            }


        }
}

