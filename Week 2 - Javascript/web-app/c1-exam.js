/**
 * This worksheet adapts the final question of Exam 1 of Computing 1 2020/21.
 * Here you should complete each of the functions as they are specified.
 * Of course, this time, the code is in Javascript.
 *
 * Original Python Code and Exam, Becky Stewart @TheLeadingZero.
 */
const Exam = Object.create(null);

// Lists

// Write a function that returns a list containing every third item in
// the original list starting with the first item.
//    for example:
//      an input list of [1,2,3,4,5,6,7,8]
//      returns [1,4,7]
Exam.every_third = function (input_list) {
    //Function returns every third item in the list provided 
    return input_list.filter((ignore,n)=> n%3===0);
};

// Strings

// Write a function that concatenates two sentences passed as inputs.
// The returned string is the first word from the first sentence,
// then the first word from the second sentence, alternating back forth.
// If the sentences are not the same number of words, a "ValueError" is thrown.
//    for example:
//       the input sentences "the cow jumped over the moon" and
//                            "jack and jill went up the"
//       returns "the jack cow and jumped jill over went the up moon the"
Exam.merge_sentences = function (sentence_one_words,sentence_two_words) {
    var final_sentence=[];
    var sentence_one= sentence_one.split(" ");
    var sentence_two= sentence_two.split(" ");
    if  (sentence_one.length !== sentence_two.length) {
        throw "ValueError"; 
    } else {
        for (i = 0; i<(sentence_one.length)+1; i++) {
            final_sentence.push(sentence_one[i]);  
            final_sentence.push(sentence_two[i]);
        return final_sentence.join(" ");
};

// Write a function that returns the number of lowercase letters in
// input string.
//     for example:
//          the input "sPonGe bOb"
//          returns 6

Exam.lowercase_count = function (input_string) {
    return input_string
      .split("") // convert into array
      .filter((char) => char.match(/[a-z]/)) // filter out all lowercase chars
      .length; // take
};


// Objects

// Write a function that returns the longest a key in the input object
// whose keys are all strings.
Exam.longest_key = function (long_key) {
    var longest_word='' ; //creating a variable with letter length of 0 to compare word length
    for (var key in long_key) { //iterating through all the words in the keys 
        if (long_key[key].length > longest_word.length) {
            let longest_word = long_key[key];//comparing the length of every word and storing it as the longest
        }
        else {
            continue;
        }
    }
    return longest_word;
};

// Write a function that returns the largest value that is an even value in the
// input dictionary whose values are all whole numbers.
Exam.value_greatest_even = function (value_dict) {
    var start_value=0;
    for (var value in value_dict); {
        if ((value_dict[value] % 2 == 0) and value_dict[value]>start_value); {
            start_value= value_dict[value]; 
        } 
        else {
            continue;
        }
        return start_value;
    }
};

// Arguments

// Write a function with two input arguments "username" and "location".
// The function should return text "Hello, {name}, how is {location}?".
//
// The username argument should not be set to a default,
// but the location argument should default to "London".
Exam.greeting = function (username, location='London') {
    return 'Hello, ' + username + ", how is " + location + '?'; 
};


// Write a function three input arguments,
// the first one, x, is required and the second two are
// the following keywords with default values:
//     scalar with a default of 1
//     offset with a default of 0
// The function returns the calculation x * scalar + offset for the input x
// if the output value of the calculation is positive, otherwise it returns 0.
Exam.floor_line = function (x, scalar=1, offset=0) {
    answer = x*scalar+offset; //maths calculation desired
    if answer>0 { //determine whether the calculation answer is positive
        return answer;
    }
    else  {
        return 0; //f the answer is negative, 0 is returned 
    }
};

        export default Object.freeze(Exam)}



        // function amountOfLowercaseLetters(inputString) {
        //     let count = 0;
          
        //     // loop over every char
        //     for (const char of inputString) {
        //       // check if it is lowercase
        //       if (char.match(/[a-z]/)) {
        //         // if yes, increase count
        //         count += 1;
        //       }
        //     }
          
        //     return count;
        //   }
