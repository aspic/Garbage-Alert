var buildTime = 10;
var yieldAmount = 1;
var yieldTime = 10000;
var startResources = 40;
var buildCost = 5;
var maxEnvLevel = 3;

var papp;
var tre;
var plast;
var jern;
var stal;
var titan;

var hasPapp;
var hasTre;
var hasPlast;
var hasJern;
var hasStal;
var hasTitan;

var defenceLevel;
var envLevel;
var attackLevel;

function init()
{
	papp = startResources;
	papp = 100;
	tre = 100;
	plast = 100;
	jern = 100;
	stal = 100;
	titan = 0;

	hasPapp = true;
	hasTre = false;
	hasPlast = false;
	hasJern = false;
	hasStal = false;
	hasTitan = false;
	updateCapabilities();

	defenceLevel = 0;
	envLevel = 1;
	attackLevel = 0;

	window.document.getElementById('papp').innerHTML = papp;
	setInterval('getResources()', yieldTime);
}

function updateResources()
{
	window.document.getElementById('papp').innerHTML = papp;
	window.document.getElementById('tre').innerHTML = tre;
	window.document.getElementById('plast').innerHTML = plast;
	window.document.getElementById('jern').innerHTML = jern;
	window.document.getElementById('stal').innerHTML = stal;
	window.document.getElementById('titan').innerHTML = titan;
}

function harvestResources(){
	if(hasPapp){
		papp += yieldAmount;
		cwrite('get papp');
	}
	if(hasTre){
		tre += yieldAmount;
		cwrite('get tre');
	}
	if(hasPlast){
		plast += yieldAmount;
		cwrite('get plast');
	}
	if(hasJern){
		jern += yieldAmount;
		cwrite('get jern');
	}
	if(hasStal){
		stal += yieldAmount;
		cwrite('get stål');
	}
	if(hasTitan){
		titan += yieldAmount;
		cwrite('get titan');
	}
}

function getResources() {
	harvestResources();
	updateResources();
}

function upgradeEnv()
{	
	updateUpgradeChooser();
	$('#upgradechooser').css('visibility', 'visible');
}

function updateUpgradeChooser(){
	if(!hasTre && canAffordTreUpgrade())
	{
		$('#upgradeToTreButton').removeAttr('disabled');
	}
	else{
		$('#upgradeToTreButton').attr('disabled', 'disabled');
	}

	if(!hasPlast && canAffordPlastUpgrade())
	{
		$('#upgradeToPlastButton').removeAttr('disabled');
	}
	else{
		$('#upgradeToPlastButton').attr('disabled', 'disabled');
	}

	if(!hasStal && (hasPlast && canAffordStalUpgrade()))
	{
		$('#upgradeToStalButton').removeAttr('disabled');
	}
	else{
		$('#upgradeToStalButton').attr('disabled', 'disabled');
	}

	if(!hasJern && (hasTre && canAffordJernUpgrade()))
	{
		$('#upgradeToJernButton').removeAttr('disabled');
	}
	else{
		$('#upgradeToJernButton').attr('disabled', 'disabled');
	}

	if(!hasTitan && (hasStal && hasJern && canAffordTitanUpgrade()))
	{
		$('#upgradeToTitanButton').removeAttr('disabled');
	}
	else{
		$('#upgradeToTitanButton').attr('disabled', 'disabled');
	}
}

function canAffordTreUpgrade() {
	if(papp>=20){
		return true;
	}
	else{
		return false;
	}
}

function canAffordPlastUpgrade() {
	if(papp>=5){
		return true;
	}
	return false;
}

function canAffordStalUpgrade() {
	if(papp>=10 && plast >= 40) {
		return true;
	}
	return false;
}

function canAffordJernUpgrade() {
	if(papp>=10 && tre>=25) {
		return true;
	}
	return false;
}

function canAffordTitanUpgrade() {
	if(papp>=50 && plast>=50 && tre>=50 && stal>=50 && jern>=50) {
		return true;
	}
	return false;
}

function upgradeAttack()
{	
	if(attackLevel < 3 && canAffordAttackUpgrade()) {
		attackLevel += 1;
		window.document.getElementById('attackLevel').innerHTML = attackLevel;
	}
}

function upgradeDefence()
{
	if(defenceLevel < 3 && canAffordDefenceUpgrade()) {
		defenceLevel += 1;
		window.document.getElementById('defenceLevel').innerHTML = defenceLevel;
	}
}

function canAffordEnvUpgrade()
{
	return true;
	// switch(envLevel)
	// {
	// 	case 0:
	// 		if(papp >= 5){
	// 			$('#upgradechooser').css('visibility', 'visible');
	// 			$('#envButton').prop('value', 'Oppgrader til plast');
	// 			return true;
	// 		}
	// 		cwrite('cannot afford upgrade');
	// 		return false;	
	// 	case 1:
	// 		if((papp >= 30) && ((plast >=10) || (tre>=10) )){
	// 			return true;
	// 		}
	// 		cwrite('cannot afford upgrade');
	// 		return false;
	// 	case 2:
	// 		return false;
	// 		break;
	// }
	// return true;
}

function canAffordDefenceUpgrade()
{
	return true;
}

function canAffordAttackUpgrade() 
{
	return true;
}

function updateCapabilities()
{
	if(hasPapp){
		$('#hasPapp').removeClass('false');
	}
	if(hasTre){
		$('#hasTre').removeClass('false');
	}
	if(hasPlast){
		$('#hasPlast').removeClass('false');
	}
	if(hasJern){
		$('#hasJern').removeClass('false');
	}
	if(hasStal){
		$('#hasStal').removeClass('false');
	}
	if(hasTitan){
		$('#hasTitan').removeClass('false');
	}
}


function cwrite(output)
{
	$('#console').append('<p>' + output + '</p>');
}

function upgradeEnvThroughput(){
	if(envLevel < maxEnvLevel && canAffordEnvThroughputUpgrade()){
		switch(envLevel){
			case 1:
				papp -= 5;
				break;
			case 2:
				papp -= 30;
				if(hasPlast){
					plast -= 10;
				}
				else {
					tre -= 10;
				}
				break;
		}
		updateResources();
		envLevel += 1;
		yieldAmount += 1;
		window.document.getElementById('envLevel').innerHTML = envLevel;

	}
}

function canAffordEnvThroughputUpgrade()
{
	switch(envLevel){
			case 1:
				if(papp >= 5)
				return true;
			case 2:
				if(papp<30) return false;
				if((plast >= 10) || (tre>=10)) return true;
	}
	return false;
}

function upgradeToPlastButton() 
{
	papp -= 5;
	hasPlast = true;
	updateCapabilities();
	updateResources();
	$('#upgradechooser').css('visibility', 'hidden');
}

function upgradeToTreButton()
{
	papp -= 5;
	hasTre = true;
	updateResources();
	updateCapabilities();
	$('#upgradechooser').css('visibility', 'hidden');
}

function upgradeToJernButton() 
{
	papp -= 10;
	tre -= 25;
	hasJern = true;
	updateCapabilities();
	updateResources();
	$('#upgradechooser').css('visibility', 'hidden');
}

function upgradeToStalButton()
{
	papp -= 10;
	plast -= 40;
	hasStal = true;
	updateResources();
	updateCapabilities();
	$('#upgradechooser').css('visibility', 'hidden');
}

function upgradeToTitanButton()
{
	papp -= 50;
	tre -= 50;
	plast -= 50;
	stal -= 50;
	jern -= 50;
	hasTitan = true;
	updateResources();
	updateCapabilities();
	$('#upgradechooser').css('visibility', 'hidden');
}

function cancelButton(){
	$('#upgradechooser').css('visibility', 'hidden');
}