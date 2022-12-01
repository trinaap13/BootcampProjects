# For a list of words, print out each word on a separate line, but in all uppercase. How can you change a word to uppercase? Ask Python for help on what you can do with strings!

# Turn that into a function, print_upper_words. Test it out. (Don’t forget to add a docstring to your function!)

# Change that function so that it only prints words that start with the letter ‘e’ (either upper or lowercase).

# Make your function more general: you should be able to pass in a set of letters, and it only prints words that start with one of those letters.


def print_upper_words(words):
    """
    From a given list of words, this function will print out each word
    on a separate line, all capitalized
    """
    for word in words:
        print(word.upper())


def print_upper_words_enhanced(words, letters):
    """
    From a given list of words, this function will print out each word
    on a separate line, all capitalized
    """

    for word in words:
        for letter in letters:
            if word.startswith(letter):
                print(word.upper())
