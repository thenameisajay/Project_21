# Welcome to the Number Guessing Game PROJECT_21!

In our Number Guessing Game, you have the chance to test your intuition and guessing skills to find the secret number. Not only is it a fun and exciting challenge, but you also get to compete with other players to see who can achieve the highest score on the Leaderboard.

## How is the Score Calculated?

Your score is calculated based on two factors: the number of attempts you make to guess the correct number and the time you take to crack the code. The quicker you guess with fewer attempts, the higher your score will be!

### Arrows
<ul>
<li> If you enter a number and see the "UP" arrow, it means the entered number is lower than the password. </li>
<li> If you enter a number and see the "DOWN" arrow, it means the entered number is higher than the password. </li>
</ul>

### 1) Number of Tries:
<ul>
<li>If you manage to guess the number in less than 10 tries, you'll be rewarded with a higher score.</li>
<li>If it takes you between 10 and 49 tries, you'll still get a good score, but it will be slightly lower.</li>
<li>For 50 or more tries, the score will be lower than the above cases.</li>
<li> If you do not guess the number correctly at all, your score will be even lower. </li>
</ul>

### 2) Time Taken:
<ul>
<li>The game is exciting, but we also value your time. The quicker you find the correct number, the more points you'll earn.</li>
<li>We measure the time from the start of the day (00:00:00) until you successfully guess the number. The number of seconds elapsed since the start of the day is used to calculate your score.</li>
</ul>

## How the Time Component Affects Your Score:

The scoring formula is designed to balance the importance of both factors - number of tries and time taken. Here's how it works:

<ul>
<li>If you find the number in less than 10 tries, your score will be 1,000,000 points minus the product of the number of seconds since the start of the day and the ratio of 1,000,000 to 86,400 (the total number of seconds in a day).</li>
<li>If your attempts are between 10 and 49, your score will be 90% of the value calculated above.</li>
<li>If it takes you 50 or more tries, your score will be 80% of the value calculated above.</li>
<li>If you do not guess the number correctly at all, your score will be 50% of the value calculated in the first case.</li>
</ul>

Remember, the leaderboard is updated daily, so you have a fresh chance to make it to the top every day!

Best of luck, and may the odds be in your favor!

## Authors 
<ul>
 <li>Furkan Tekinay</li>
 <li>Ajay Pradeep Mahadeven</li>
</ul>

## LICENSE 
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
