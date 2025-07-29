let compChoice = 0;
let status = '';
let score = JSON.parse(localStorage.getItem('score')) || {win: 0,loss: 0,tie: 0};
updateScoreboard();

function game(buttonChoice) {
	compChoice = Math.random();
	if (compChoice < 0.34) {
		compChoice = 'rock';
	} else if (compChoice <= 0.67) {
		compChoice = 'paper';
	} else {
		compChoice = 'scissors';
	}

	if (buttonChoice === 'rock') {
		if (buttonChoice === compChoice) {
			status = '🔁 Tie.';
			score.tie++;
			console.log(`Tie! User: ${buttonChoice}, Computer: ${compChoice}`);
		} else if (compChoice === 'scissors') {
			status = '✅ Victory!';
			score.win++;
			console.log(`Victory! User: ${buttonChoice}, Computer: ${compChoice}`);
		} else {
			status = '❌ Loss...';
			score.loss++;
			console.log(`Loss! User: ${buttonChoice}, Computer: ${compChoice}`);
		}
	} else if (buttonChoice === 'paper') {
		if (buttonChoice === compChoice) {
			status = '🔁 Tie.';
			score.tie++;
			console.log(`Tie! User: ${buttonChoice}, Computer: ${compChoice}`);
		} else if (compChoice === 'rock') {
			status = '✅ Victory!';
			score.win++;
			console.log(`Victory! User: ${buttonChoice}, Computer: ${compChoice}`);
		} else {
			status = '❌ Loss...';
			score.loss++;
			console.log(`Loss! User: ${buttonChoice}, Computer: ${compChoice}`);
		}
	} else if (buttonChoice === 'scissors') {
		if (buttonChoice === compChoice) {
			status = '🔁 Tie.';
			score.tie++;
			console.log(`Tie! User: ${buttonChoice}, Computer: ${compChoice}`);
		} else if (compChoice === 'paper') {
			status = '✅ Victory!';
			score.win++;
			console.log(`Victory! User: ${buttonChoice}, Computer: ${compChoice}`);
		} else {
			status = '❌ Loss...';
			score.loss++;
			console.log(`Loss! User: ${buttonChoice}, Computer: ${compChoice}`);
		}
	}
	console.log(`Total stats:\nW: ${score.win}\nL: ${score.loss}\nT: ${score.tie}`);
	document.querySelector('.result')
		.innerHTML = `${status}`;
	document.querySelector('.analysis').innerHTML = `You <span class="big-emoji">${emojiToEmoji(buttonChoice)}${emojiToEmoji(compChoice)}</span> Computer`;

	updateScoreboard();
	localStorage.setItem('score', JSON.stringify(score));
}
function updateScoreboard() {
	document.querySelector('.scoreboard')
		.innerHTML = `Score: ✅${score.win}W ❌${score.loss}L 🔁${score.tie}T`;
}
function emojiToEmoji(emoji) {
	return emoji === 'rock' ? '✊' : emoji === 'paper' ? '✋' : '✌️';
}
function reset() {
	score.win = 0;
	score.loss = 0;
	score.tie = 0;
	updateScoreboard();
	localStorage.setItem('score', JSON.stringify(score));
	console.log('♻️Game reset. All scores set to 0.♻️');
	document.querySelector('.result')
		.innerHTML = `♻️Result: Reset♻️`;
	document.querySelector('.analysis')
		.innerHTML = `♻️All scores have been reset.♻️`;
}