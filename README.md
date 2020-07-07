## Traveling Knight:
The goal of this exercise is to track the movement of a knight given a chess board of n size
___

**The following is a spec checklist for our desired functionality:**

- [ ] Given the following parameters return all possible movements of our knight within the constraints of the board
    1. **x** - the starting x coordinate of the chess board
    2. **y** - the starting y coordinate of the chess board
    3. **n** - The size of the chess board
- [ ] Our knight cannot go out of the bounds of the board (**size n**)
- [ ] If our starting coordinate is outside of the board (**size n**) return an empty structure
- [ ] If our starting coordinates are within the constraints of the board, return an ordered structrure containing all of the possible movements **in the order** they are moved to
- [ ] The knight **should not** visit the same coordinate twice
- [ ] Log all returned parameters to the console in a neat and formatted fashion

**A few things to keep in mind during this exercise:**
1. A knight cannot move outside of our board (**size n**)
2. A knight moves in **"L"** shaped motions - 1 vertical space and 2 horizontal spaces or 2 vertical spaces and 1 horizontal space
3. The data structures used during this exercise are totally up to you! Feel free to use dictionsaries, maps, list, objects, arrays at your own will, as long as the specs of the output are maintained
4. Bonus points are given for clever decisions regarding performance optimization, fast failing, and code documentation
5. For this exercise JavaScript is preferred, but if you can make a good case on why another language might be better you are free to do so :)
