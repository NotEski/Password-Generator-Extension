var wordList1 = Array("angry", "aromatic", "big", "bitter", "bland", "blue", "brave", "bright", "brown", "bumpy", "buttery", "calm", "caring", "cheerful", "clean", "clear", "cloudy", "clumsy", "creative", "cute", "dark", "dizzy", "fast", "fishy", "flowery", "fresh", "friendly", "fruity", "funny ", "giant", "glad", "gloomy", "gold", "good", "gooey", "green", "grumpy", "happy", "heavy", "helpful", "honest", "huge", "icy", "jade", "jolly", "joyful", "kind", "large", "lazy", "lime", "little", "lively", "loud", "loyal", "lucky", "massive", "mega", "merry", "misty", "moody", "murky", "nervous", "nice", "noisy", "nutty", "odorous", "open", "orange", "pink", "piquant", "proud", "purple", "quiet", "raspy", "red", "rosy", "sad", "salty", "savory", "scary", "scented", "sharp", "shy", "silent", "silly", "slimy", "slow", "small", "smart", "sour", "spicy", "stinky", "strong", "super", "sweet", "tangy", "tasty", "thin", "tiny", "toasty", "ultra", "vast", "vibrant", "violet", "vivid", "wild", "wise", "witty", "worried", "yellow", "yummy");
var wordList2 = Array("alarm", "autumn", "baboon", "band", "bat", "bee", "bin", "bird", "block", "bottle", "box", "brick", "brush", "buffalo", "butter", "button", "car", "case", "cat", "clip", "clock", "coin", "comb", "coral", "cube", "diary", "dog", "door", "drink", "drum", "fall", "feast", "file", "flag", "fox", "glasses", "gum", "hand", "heart", "horse", "house", "ice", "ink", "keys", "look", "match", "memory", "mirror", "monster", "news", "night", "notebook", "onion", "orange", "ox", "panda", "panther", "park", "pear", "pencil", "phone", "photo", "plank", "puppy", "purse", "ray", "rock", "sky", "spring", "stamp", "steel", "stick", "summer", "test", "tiger", "tissue", "watch", "water", "winter");
var symbolList = Array("!", "@", "#", "$", "%", "&");


document.getElementById("generateButton").addEventListener("click", passwordBox);

function generator() {
	var word1 = wordList1[Math.floor(Math.random() * wordList1.length)];
	word1 = word1[0].toUpperCase() + word1.substring(1);
	var word2 = wordList2[Math.floor(Math.random() * wordList1.length)];
	word2 = word2[0].toUpperCase() + word2.substring(1);
	var number = Math.floor(Math.random() * 89) + 10;
	var symbol = symbolList[Math.floor(Math.random() * symbolList.length)];

	var password = word1 + word2 + number + symbol;

	return password;
}

function passwordBox() {
	document.getElementById("passwordLabel").innerHTML = generator();
}