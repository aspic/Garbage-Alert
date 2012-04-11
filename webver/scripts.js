var buildTime = 10;
var yieldAmount = 1;
var tickTime = 15000;
var tickTime = 1000;
var startResources = {
	papp: 10, plast: 0, tre: 0, jern:0, stal: 0, titan: 0};
var buildCost = 5;
var maxEnvLevel = 4;
var cooldown = 40000;

var papp;
var tre;
var plast;
var jern;
var stal;
var titan;

var pappAccRate;
var pappAccRate;
var plastAccRate;
var jernAccRate;
var stalAccRate;
var titanAccRate;

var hasPapp;
var hasTre;
var hasPlast;
var hasJern;
var hasStal;
var hasTitan;

var defenceLevel;
var envLevel;
var attackLevel;

var garbage;
var collectionRate;

// Kostnader for forsvar
var pappMurNewCost = {
	papp: 10, plast:0, tre: 0, jern: 0, stal: 0, titan: 0};
var plastMurNewCost = {
	papp: 15, plast: 10, tre: 0, jern: 0, stal: 0, titan: 0};
var plastMurUpgradeCost = {
	papp: 0, plast: 10, tre: 0, jern: 0, stal: 0, titan: 0};
var treMurNewCost = {
	papp: 20, plast: 0, tre: 10, jern: 0, stal: 0, titan: 0};
var treMurUpgradeCost = {
	papp: 0, plast: 0, tre: 10, jern: 0, stal: 0, titan: 0};
var jernMurNewCost = {
	papp: 10, plast: 0, tre: 10, jern: 10, stal: 0, titan: 0};
var jernMurUpgradeCost = {
	papp: 5, plast: 0, tre: 5, jern: 10, stal: 0, titan: 0};
var stalMurNewCost = {
	papp: 20, plast: 15, tre: 0, jern: 0, stal: 15, titan: 0};
var stalMurUpgradeCost = {
	papp: 10, plast: 15, tre: 0, jern: 0, stal: 15, titan: 0};
var megaMurNewCost = {
	papp: 20, plast: 20, tre: 20, jern: 20, stal: 20, titan: 0};
var megaMurUpgradeCost = {
	papp: 20, plast: 20, tre: 20, jern: 20, stal: 20, titan: 0};


// Kostnader for angrep
var pappAngrepNewCost = {
	papp: 10, plast:0, tre: 0, jern: 0, stal: 0, titan: 0};
var plastAngrepNewCost = {
	papp: 15, plast: 10, tre: 0, jern: 0, stal: 0, titan: 0};
var plastAngrepUpgradeCost = {
	papp: 0, plast: 10, tre: 0, jern: 0, stal: 0, titan: 0};
var treAngrepNewCost = {
	papp: 20, plast: 0, tre: 10, jern: 0, stal: 0, titan: 0};
var treAngrepUpgradeCost = {
	papp: 0, plast: 0, tre: 10, jern: 0, stal: 0, titan: 0};
var jernAngrepNewCost = {
	papp: 10, plast: 0, tre: 10, jern: 10, stal: 0, titan: 0};
var jernAngrepUpgradeCost = {
	papp: 5, plast: 0, tre: 5, jern: 10, stal: 0, titan: 0};
var stalAngrepNewCost = {
	papp: 10, plast: 15, tre: 0, jern: 0, stal: 30, titan: 0};
var stalAngrepUpgradeCost = {
	papp: 0, plast: 15, tre: 0, jern: 0, stal: 30, titan: 0};
var megaAngrepNewCost = {
	papp: 20, plast: 20, tre: 20, jern: 20, stal: 20, titan: 20};
var megaAngrepUpgradeCost = {
	papp: 20, plast: 20, tre: 20, jern: 20, stal: 20, titan: 20};


var upgradeToTreCost = {
	papp: 20, plast: 0, tre: 0, jern: 0, stal: 0, titan: 0};
var upgradeToPlastCost = {
	papp: 20, plast: 0, tre: 0, jern: 0, stal: 0, titan: 0};
var upgradeToStalCost = {
	papp: 20, plast: 0, tre: 0, jern: 0, stal: 0, titan: 0};
var upgradeToJernCost = {
	papp: 20, plast: 0, tre: 0, jern: 0, stal: 0, titan: 0};
var upgradeToTitanCost = {
	papp: 20, plast: 0, tre: 0, jern: 0, stal: 0, titan: 0};


var interval;
var running;

var hasPappMur;
var hasPlastMur;
var hasTreMur;
var hasJernMur;
var hasStalMur;
var hasTitanMur;
var hasMur;

var hasPappAngrep;
var hasPlastAngrep;
var hasTreAngrep;
var hasJernAngrep;
var hasStalAngrep;
var hasTitanAngrep;
var hasAngrep;

function initOld()
{
	running = false;
	$('#stopButton').attr('disabled', 'disabled');

	papp = startResources.papp;
	tre = startResources.tre;
	plast = startResources.plast;
	jern = startResources.jern;
	stal = startResources.stal;
	titan = startResources.titan;

	garbage = 1000;
	updateResources();

	hasPapp = true;
	hasTre = false;
	hasPlast = false;
	hasJern = false;
	hasStal = false;
	hasTitan = false;
	updateCapabilities();

	hasPappMur = false;
	hasPlastMur = false;
	hasTreMur = false;
	hasJernMur = false;
	hasStalMur = false;
	hasTitanMur = false;
	hasMur = false;
	updateDefence();

	hasPappAngrep = false;
	hasPlastAngrep = false;
	hasTreAngrep = false;
	hasJernAngrep = false;
	hasStalAngrep = false;
	hasTitanAngrep = false;
	hasAngrep = false;
	$('#fireButton').attr('disabled', 'disabled');
	updateAttack();

	defenceLevel = 0;
	envLevel = 1;
	attackLevel = 0;

	collectionRate = 10;

	updateDefenceCosts();
	updateAttackCosts();
}

function updateResources()
{
	// window.document.getElementById('garbage').innerHTML = garbage;
	// window.document.getElementById('papp').innerHTML = papp;
	// window.document.getElementById('tre').innerHTML = tre;
	// window.document.getElementById('plast').innerHTML = plast;
	// window.document.getElementById('jern').innerHTML = jern;
	// window.document.getElementById('stal').innerHTML = stal;
	// window.document.getElementById('titan').innerHTML = titan;
}

function getResources() {
	garbage -= collectionRate;
	harvestResources();
	// updateResources();
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
	// if(attackLevel < 3 && canAffordAttackUpgrade()) {
	// 	attackLevel += 1;
	// 	window.document.getElementById('attackLevel').innerHTML = attackLevel;
	// }
	$('#attackUpgradeCard').css('visibility', 'visible');
}

function upgradeDefence()
{
	// if(defenceLevel < 3 && canAffordDefenceUpgrade()) {
	// 	defenceLevel += 1;
	// 	window.document.getElementById('defenceLevel').innerHTML = defenceLevel;
	// }
	$('#defenceUpgradeCard').css('visibility', 'visible');
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
				yieldAmount += 1;
				break;
			case 2:
				papp -= 30;
				yieldAmount += 1;
				if(hasPlast){
					plast -= 10;
				}
				else {
					tre -= 10;
				}
				break;
			case 3:
				papp -= 50;
				plast -= 20;
				tre -= 20;
				collectionRate = 20;
				break;
		}
		updateResources();
		envLevel += 1;
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
			case 3:
				if(papp>=50 && plast>=20 && tre>=20)
					{
						return true;
					}
	}
	return false;
}

function cancelButton(){
	$('#upgradechooser').css('visibility', 'hidden');
}

function startSim(){
	if(!running){
		interval = setInterval('getResources()', tickTime);
		$('#startButton').attr('disabled', 'disabled');
		$('#stopButton').removeAttr('disabled');
		document.getElementById('simStatus').innerHTML = "kjører";
		running = true;
	}
}

function addGarbage()
{
	garbage += 100;
}

function stopSim(){
	if(running){
		window.clearInterval(interval);
		$('#stopButton').attr('disabled', 'disabled');
		$('#startButton').removeAttr('disabled');
		document.getElementById('simStatus').innerHTML = "pause";
		running = false;
	}
}

function buyPappMurNew(){
	if(
		pappMurNewCost.papp<=papp &&
		pappMurNewCost.plast<=plast &&
		pappMurNewCost.tre<=tre &&
		pappMurNewCost.jern<=jern &&
		pappMurNewCost.stal<=stal &&
		pappMurNewCost.titan<=titan
	){
		papp -= pappMurNewCost.papp;
		plast -= pappMurNewCost.plast;
		tre -= pappMurNewCost.tre;
		jern -= pappMurNewCost.jern;
		stal -= pappMurNewCost.stal;
		titan -= pappMurNewCost.titan;
		hasPappMur = true;
		hasMur = true;
	}
	closeDefenceCard();
	updateDefence();
	updateResources();
}
function buyPlastMurNew(){
	if(
		plastMurNewCost.papp<=papp &&
		plastMurNewCost.plast<=plast &&
		plastMurNewCost.tre<=tre &&
		plastMurNewCost.jern<=jern &&
		plastMurNewCost.stal<=stal &&
		plastMurNewCost.titan<=titan
	){
		papp -= plastMurNewCost.papp;
		plast -= plastMurNewCost.plast;
		tre -= plastMurNewCost.tre;
		jern -= plastMurNewCost.jern;
		stal -= plastMurNewCost.stal;
		titan -= plastMurNewCost.titan;
		hasPlastMur = true;
		hasMur = true;
	}
	closeDefenceCard();
	updateDefence();
	updateResources();
}
function buyPlastMurUpgrade(){
	console.log(hasMur);
	if(
		plastMurUpgradeCost.papp<=papp &&
		plastMurUpgradeCost.plast<=plast &&
		plastMurUpgradeCost.tre<=tre &&
		plastMurUpgradeCost.jern<=jern &&
		plastMurUpgradeCost.stal<=stal &&
		plastMurUpgradeCost.titan<=titan &&
		hasMur
	){
		console.log("WTF?");
		papp -= plastMurUpgradeCost.papp;
		plast -= plastMurUpgradeCost.plast;
		tre -= plastMurUpgradeCost.tre;
		jern -= plastMurUpgradeCost.jern;
		stal -= plastMurUpgradeCost.stal;
		titan -= plastMurUpgradeCost.titan;
		hasPlastMur = true;
	}
	closeDefenceCard();
	updateDefence();
	updateResources();
}
function buyTreMurNew(){
	if(
		treMurNewCost.papp<=papp &&
		treMurNewCost.plast<=plast &&
		treMurNewCost.tre<=tre &&
		treMurNewCost.jern<=jern &&
		treMurNewCost.stal<=stal &&
		treMurNewCost.titan<=titan
	){
		papp -= treMurNewCost.papp;
		plast -= treMurNewCost.plast;
		tre -= treMurNewCost.tre;
		jern -= treMurNewCost.jern;
		stal -= treMurNewCost.stal;
		titan -= treMurNewCost.titan;
		hasTreMur = true;
		hasMur = true;
	}
	closeDefenceCard();
	updateDefence();
	updateResources();
}
function buyTreMurUpgrade(){
	if(
		treMurUpgradeCost.papp<=papp &&
		treMurUpgradeCost.plast<=plast &&
		treMurUpgradeCost.tre<=tre &&
		treMurUpgradeCost.jern<=jern &&
		treMurUpgradeCost.stal<=stal &&
		treMurUpgradeCost.titan<=titan &&
		hasMur
	){
		papp -= treMurUpgradeCost.papp;
		plast -= treMurUpgradeCost.plast;
		tre -= treMurUpgradeCost.tre;
		jern -= treMurUpgradeCost.jern;
		stal -= treMurUpgradeCost.stal;
		titan -= treMurUpgradeCost.titan;
		hasTreMur = true;
	}
	closeDefenceCard();
	updateDefence();
	updateResources();
}
function buyJernMurNew(){
	if(
		jernMurNewCost.papp<=papp &&
		jernMurNewCost.plast<=plast &&
		jernMurNewCost.tre<=tre &&
		jernMurNewCost.jern<=jern &&
		jernMurNewCost.stal<=stal &&
		jernMurNewCost.titan<=titan
	){
		papp -= jernMurNewCost.papp;
		plast -= jernMurNewCost.plast;
		tre -= jernMurNewCost.tre;
		jern -= jernMurNewCost.jern;
		stal -= jernMurNewCost.stal;
		titan -= jernMurNewCost.titan;
		hasJernMur = true;
		hasMur = true;
	}
	closeDefenceCard();
	updateDefence();
	updateResources();
}
function buyJernMurUpgrade(){
	if(
		jernMurUpgradeCost.papp<=papp &&
		jernMurUpgradeCost.plast<=plast &&
		jernMurUpgradeCost.tre<=tre &&
		jernMurUpgradeCost.jern<=jern &&
		jernMurUpgradeCost.stal<=stal &&
		jernMurUpgradeCost.titan<=titan &&
		hasMur
	){
		papp -= jernMurUpgradeCost.papp;
		plast -= jernMurUpgradeCost.plast;
		tre -= jernMurUpgradeCost.tre;
		jern -= jernMurUpgradeCost.jern;
		stal -= jernMurUpgradeCost.stal;
		titan -= jernMurUpgradeCost.titan;
		hasJernMur = true;
	}
	closeDefenceCard();
	updateDefence();
	updateResources();
}
function buyStalMurNew(){
	if(
		stalMurNewCost.papp<=papp &&
		stalMurNewCost.plast<=plast &&
		stalMurNewCost.tre<=tre &&
		stalMurNewCost.jern<=jern &&
		stalMurNewCost.stal<=stal &&
		stalMurNewCost.titan<=titan 
	){
		papp -= stalMurNewCost.papp;
		plast -= stalMurNewCost.plast;
		tre -= stalMurNewCost.tre;
		jern -= stalMurNewCost.jern;
		stal -= stalMurNewCost.stal;
		titan -= stalMurNewCost.titan;
		hasStalMur = true;
		hasMur = true;
	}
	closeDefenceCard();
	updateDefence();
	updateResources();
}
function buyStalMurUpgrade(){
	if(
		stalMurUpgradeCost.papp<=papp &&
		stalMurUpgradeCost.plast<=plast &&
		stalMurUpgradeCost.tre<=tre &&
		stalMurUpgradeCost.jern<=jern &&
		stalMurUpgradeCost.stal<=stal &&
		stalMurUpgradeCost.titan<=titan &&
		hasMur
	){
		papp -= stalMurUpgradeCost.papp;
		plast -= stalMurUpgradeCost.plast;
		tre -= stalMurUpgradeCost.tre;
		jern -= stalMurUpgradeCost.jern;
		stal -= stalMurUpgradeCost.stal;
		titan -= stalMurUpgradeCost.titan;
		hasStalMur = true;
	}
	closeDefenceCard();
	updateDefence();
	updateResources();
}
function buyMegaMurNew(){
	if(
		megaMurNewCost.papp<=papp &&
		megaMurNewCost.plast<=plast &&
		megaMurNewCost.tre<=tre &&
		megaMurNewCost.jern<=jern &&
		megaMurNewCost.stal<=stal &&
		megaMurNewCost.titan<=titan
	){
		papp -= megaMurNewCost.papp;
		plast -= megaMurNewCost.plast;
		tre -= megaMurNewCost.tre;
		jern -= megaMurNewCost.jern;
		stal -= megaMurNewCost.stal;
		titan -= megaMurNewCost.titan;
		hasTitanMur = true;
		hasMur = true;
	}
	closeDefenceCard();
	updateDefence();
	updateResources();
}
function buyMegaMurUpgrade(){
	if(
		megaMurUpgradeCost.papp<=papp &&
		megaMurUpgradeCost.plast<=plast &&
		megaMurUpgradeCost.tre<=tre &&
		megaMurUpgradeCost.jern<=jern &&
		megaMurUpgradeCost.stal<=stal &&
		megaMurUpgradeCost.titan<=titan &&
		hasMur
	){
		papp -= megaMurUpgradeCost.papp;
		plast -= megaMurUpgradeCost.plast;
		tre -= megaMurUpgradeCost.tre;
		jern -= megaMurUpgradeCost.jern;
		stal -= megaMurUpgradeCost.stal;
		titan -= megaMurUpgradeCost.titan;
		hasTitanMur = true;
	}
	closeDefenceCard();
	updateDefence();
	updateResources();
}


function buyPappAngrepNew(){
	if(
		pappAngrepNewCost.papp<=papp &&
		pappAngrepNewCost.plast<=plast &&
		pappAngrepNewCost.tre<=tre &&
		pappAngrepNewCost.jern<=jern &&
		pappAngrepNewCost.stal<=stal &&
		pappAngrepNewCost.titan<=titan
	){
		papp -= pappAngrepNewCost.papp;
		plast -= pappAngrepNewCost.plast;
		tre -= pappAngrepNewCost.tre;
		jern -= pappAngrepNewCost.jern;
		stal -= pappAngrepNewCost.stal;
		titan -= pappAngrepNewCost.titan;
		hasAngrep = true;
		hasPappAngrep = true;
	}
	closeAttackCard();
	updateAttack();
	updateResources();
}
function buyPlastAngrepNew(){
	if(
		plastAngrepNewCost.papp<=papp &&
		plastAngrepNewCost.plast<=plast &&
		plastAngrepNewCost.tre<=tre &&
		plastAngrepNewCost.jern<=jern &&
		plastAngrepNewCost.stal<=stal &&
		plastAngrepNewCost.titan<=titan 
	){
		papp -= plastAngrepNewCost.papp;
		plast -= plastAngrepNewCost.plast;
		tre -= plastAngrepNewCost.tre;
		jern -= plastAngrepNewCost.jern;
		stal -= plastAngrepNewCost.stal;
		titan -= plastAngrepNewCost.titan;
		hasAngrep = true;
		hasPlastAngrep = true;
	}
	closeAttackCard();
	updateAttack();
	updateResources();
}
function buyPlastAngrepUpgrade(){
	if(
		plastAngrepUpgradeCost.papp<=papp &&
		plastAngrepUpgradeCost.plast<=plast &&
		plastAngrepUpgradeCost.tre<=tre &&
		plastAngrepUpgradeCost.jern<=jern &&
		plastAngrepUpgradeCost.stal<=stal &&
		plastAngrepUpgradeCost.titan<=titan &&
		hasAngrep
	){
		papp -= plastAngrepUpgradeCost.papp;
		plast -= plastAngrepUpgradeCost.plast;
		tre -= plastAngrepUpgradeCost.tre;
		jern -= plastAngrepUpgradeCost.jern;
		stal -= plastAngrepUpgradeCost.stal;
		titan -= plastAngrepUpgradeCost.titan;
		hasPlastAngrep = true;
	}
	closeAttackCard();
	updateAttack();
	updateResources();
}
function buyTreAngrepNew(){
	if(
		treAngrepNewCost.papp<=papp &&
		treAngrepNewCost.plast<=plast &&
		treAngrepNewCost.tre<=tre &&
		treAngrepNewCost.jern<=jern &&
		treAngrepNewCost.stal<=stal &&
		treAngrepNewCost.titan<=titan
	){
		papp -= treAngrepNewCost.papp;
		plast -= treAngrepNewCost.plast;
		tre -= treAngrepNewCost.tre;
		jern -= treAngrepNewCost.jern;
		stal -= treAngrepNewCost.stal;
		titan -= treAngrepNewCost.titan;
		hasAngrep = true;
		hasTreAngrep = true;
	}
	closeAttackCard();
	updateAttack();
	updateResources();
}
function buyTreAngrepUpgrade(){
	if(
		treAngrepUpgradeCost.papp<=papp &&
		treAngrepUpgradeCost.plast<=plast &&
		treAngrepUpgradeCost.tre<=tre &&
		treAngrepUpgradeCost.jern<=jern &&
		treAngrepUpgradeCost.stal<=stal &&
		treAngrepUpgradeCost.titan<=titan &&
		hasAngrep
	){
		papp -= treAngrepUpgradeCost.papp;
		plast -= treAngrepUpgradeCost.plast;
		tre -= treAngrepUpgradeCost.tre;
		jern -= treAngrepUpgradeCost.jern;
		stal -= treAngrepUpgradeCost.stal;
		titan -= treAngrepUpgradeCost.titan;
		hasTreAngrep = true;
	}
	closeAttackCard();
	updateAttack();
	updateResources();
}
function buyJernAngrepNew(){
	if(
		jernAngrepNewCost.papp<=papp &&
		jernAngrepNewCost.plast<=plast &&
		jernAngrepNewCost.tre<=tre &&
		jernAngrepNewCost.jern<=jern &&
		jernAngrepNewCost.stal<=stal &&
		jernAngrepNewCost.titan<=titan
	){
		papp -= jernAngrepNewCost.papp;
		plast -= jernAngrepNewCost.plast;
		tre -= jernAngrepNewCost.tre;
		jern -= jernAngrepNewCost.jern;
		stal -= jernAngrepNewCost.stal;
		titan -= jernAngrepNewCost.titan;
		hasAngrep = true;
		hasJernAngrep = true;
	}
	closeAttackCard();
	updateAttack();
	updateResources();
}
function buyJernAngrepUpgrade(){
	if(
		jernAngrepUpgradeCost.papp<=papp &&
		jernAngrepUpgradeCost.plast<=plast &&
		jernAngrepUpgradeCost.tre<=tre &&
		jernAngrepUpgradeCost.jern<=jern &&
		jernAngrepUpgradeCost.stal<=stal &&
		jernAngrepUpgradeCost.titan<=titan &&
		hasAngrep
	){
		papp -= jernAngrepUpgradeCost.papp;
		plast -= jernAngrepUpgradeCost.plast;
		tre -= jernAngrepUpgradeCost.tre;
		jern -= jernAngrepUpgradeCost.jern;
		stal -= jernAngrepUpgradeCost.stal;
		titan -= jernAngrepUpgradeCost.titan;
		hasJernAngrep = true;
	}
	closeAttackCard();
	updateAttack();
	updateResources();
}
function buyStalAngrepNew(){
	if(
		stalAngrepNewCost.papp<=papp &&
		stalAngrepNewCost.plast<=plast &&
		stalAngrepNewCost.tre<=tre &&
		stalAngrepNewCost.jern<=jern &&
		stalAngrepNewCost.stal<=stal &&
		stalAngrepNewCost.titan<=titan
	){
		papp -= stalAngrepNewCost.papp;
		plast -= stalAngrepNewCost.plast;
		tre -= stalAngrepNewCost.tre;
		jern -= stalAngrepNewCost.jern;
		stal -= stalAngrepNewCost.stal;
		titan -= stalAngrepNewCost.titan;
		hasAngrep = true;
		hasStalAngrep = true;
	}
	closeAttackCard();
	updateAttack();
	updateResources();
}
function buyStalAngrepUpgrade(){
	if(
		stalAngrepUpgradeCost.papp<=papp &&
		stalAngrepUpgradeCost.plast<=plast &&
		stalAngrepUpgradeCost.tre<=tre &&
		stalAngrepUpgradeCost.jern<=jern &&
		stalAngrepUpgradeCost.stal<=stal &&
		stalAngrepUpgradeCost.titan<=titan &&
		hasAngrep
	){
		papp -= stalAngrepUpgradeCost.papp;
		plast -= stalAngrepUpgradeCost.plast;
		tre -= stalAngrepUpgradeCost.tre;
		jern -= stalAngrepUpgradeCost.jern;
		stal -= stalAngrepUpgradeCost.stal;
		titan -= stalAngrepUpgradeCost.titan;
		hasStalAngrep = true;
	}
	closeAttackCard();
	updateAttack();
	updateResources();
}
function buyMegaAngrepNew(){
	if(
		megaAngrepNewCost.papp<=papp &&
		megaAngrepNewCost.plast<=plast &&
		megaAngrepNewCost.tre<=tre &&
		megaAngrepNewCost.jern<=jern &&
		megaAngrepNewCost.stal<=stal &&
		megaAngrepNewCost.titan<=titan
	){
		papp -= megaAngrepNewCost.papp;
		plast -= megaAngrepNewCost.plast;
		tre -= megaAngrepNewCost.tre;
		jern -= megaAngrepNewCost.jern;
		stal -= megaAngrepNewCost.stal;
		titan -= megaAngrepNewCost.titan;
		hasAngrep = true;
		hasTitanAngrep = true;
	}
	closeAttackCard();
	updateAttack();
	updateResources();
}
function buyMegaAngrepUpgrade(){
	if(
		megaAngrepUpgradeCost.papp<=papp &&
		megaAngrepUpgradeCost.plast<=plast &&
		megaAngrepUpgradeCost.tre<=tre &&
		megaAngrepUpgradeCost.jern<=jern &&
		megaAngrepUpgradeCost.stal<=stal &&
		megaAngrepUpgradeCost.titan<=titan &&
		hasAngrep
	){
		papp -= megaAngrepUpgradeCost.papp;
		plast -= megaAngrepUpgradeCost.plast;
		tre -= megaAngrepUpgradeCost.tre;
		jern -= megaAngrepUpgradeCost.jern;
		stal -= megaAngrepUpgradeCost.stal;
		titan -= megaAngrepUpgradeCost.titan;
		hasTitanAngrep = true;
	}
	closeAttackCard();
	updateAttack();
	updateResources();
}

function updateAttack()
{
	if(hasAngrep)
	{
		$('#fireButton').removeAttr('disabled');
	}
	if(hasTitanAngrep)
	{
		$('#attackLevel').text('mega');
		return;
	}
	if(hasStalAngrep)
	{
		$('#attackLevel').text('stål');
		return;
	}
	if(hasJernAngrep)
	{
		$('#attackLevel').text('jern');
		return;
	}
	if(hasPlastAngrep)
	{
		$('#attackLevel').text('plast');
		return;
	}
	if(hasTreAngrep)
	{
		$('#attackLevel').text('tre');
		return;
	}
	if(hasPappAngrep)
	{
		$('#attackLevel').text('papp');
		return;
	}
	$('#attackLevel').text('0');
}
function updateDefence()
{
	if(hasTitanMur)
	{
		$('#defenceLevel').text('mega');
		return;
	}
	if(hasStalMur)
	{
		$('#defenceLevel').text('stål');
		return;
	}
	if(hasJernMur)
	{
		$('#defenceLevel').text('jern');
		return;
	}
	if(hasPlastMur)
	{
		$('#defenceLevel').text('plast');
		return;
	}
	if(hasTreMur)
	{
		$('#defenceLevel').text('tre');
		return;
	}
	if(hasPappMur)
	{
		$('#defenceLevel').text('papp');
		return;
	}
	$('#defenceLevel').text('0');
}

function updateDefenceCosts(){
	$('#pappMurNewCost .pappCost').text(pappMurNewCost.papp);
	$('#pappMurNewCost .plastCost').text(pappMurNewCost.plast);
	$('#pappMurNewCost .treCost').text(pappMurNewCost.tre);
	$('#pappMurNewCost .jernCost').text(pappMurNewCost.jern);
	$('#pappMurNewCost .stalCost').text(pappMurNewCost.stal);
	$('#pappMurNewCost .titanCost').text(pappMurNewCost.titan);

	$('#plastMurNewCost .pappCost').text(plastMurNewCost.papp);
	$('#plastMurNewCost .plastCost').text(plastMurNewCost.plast);
	$('#plastMurNewCost .treCost').text(plastMurNewCost.tre);
	$('#plastMurNewCost .jernCost').text(plastMurNewCost.jern);
	$('#plastMurNewCost .stalCost').text(plastMurNewCost.stal);
	$('#plastMurNewCost .titanCost').text(plastMurNewCost.titan);

	$('#plastMurUpgradeCost .pappCost').text(plastMurUpgradeCost.papp);
	$('#plastMurUpgradeCost .plastCost').text(plastMurUpgradeCost.plast);
	$('#plastMurUpgradeCost .treCost').text(plastMurUpgradeCost.tre);
	$('#plastMurUpgradeCost .jernCost').text(plastMurUpgradeCost.jern);
	$('#plastMurUpgradeCost .stalCost').text(plastMurUpgradeCost.stal);
	$('#plastMurUpgradeCost .titanCost').text(plastMurUpgradeCost.titan);

	$('#treMurNewCost .pappCost').text(treMurNewCost.papp);
	$('#treMurNewCost .plastCost').text(treMurNewCost.plast);
	$('#treMurNewCost .treCost').text(treMurNewCost.tre);
	$('#treMurNewCost .jernCost').text(treMurNewCost.jern);
	$('#treMurNewCost .stalCost').text(treMurNewCost.stal);
	$('#treMurNewCost .titanCost').text(treMurNewCost.titan);

	$('#treMurUpgradeCost .pappCost').text(treMurUpgradeCost.papp);
	$('#treMurUpgradeCost .plastCost').text(treMurUpgradeCost.plast);
	$('#treMurUpgradeCost .treCost').text(treMurUpgradeCost.tre);
	$('#treMurUpgradeCost .jernCost').text(treMurUpgradeCost.jern);
	$('#treMurUpgradeCost .stalCost').text(treMurUpgradeCost.stal);
	$('#treMurUpgradeCost .titanCost').text(treMurUpgradeCost.titan);

	$('#jernMurNewCost .pappCost').text(jernMurNewCost.papp);
	$('#jernMurNewCost .plastCost').text(jernMurNewCost.plast);
	$('#jernMurNewCost .treCost').text(jernMurNewCost.tre);
	$('#jernMurNewCost .jernCost').text(jernMurNewCost.jern);
	$('#jernMurNewCost .stalCost').text(jernMurNewCost.stal);
	$('#jernMurNewCost .titanCost').text(jernMurNewCost.titan);

	$('#jernMurUpgradeCost .pappCost').text(jernMurUpgradeCost.papp);
	$('#jernMurUpgradeCost .plastCost').text(jernMurUpgradeCost.plast);
	$('#jernMurUpgradeCost .treCost').text(jernMurUpgradeCost.tre);
	$('#jernMurUpgradeCost .jernCost').text(jernMurUpgradeCost.jern);
	$('#jernMurUpgradeCost .stalCost').text(jernMurUpgradeCost.stal);
	$('#jernMurUpgradeCost .titanCost').text(jernMurUpgradeCost.titan);

	$('#stalMurNewCost .pappCost').text(stalMurNewCost.papp);
	$('#stalMurNewCost .plastCost').text(stalMurNewCost.plast);
	$('#stalMurNewCost .treCost').text(stalMurNewCost.tre);
	$('#stalMurNewCost .jernCost').text(stalMurNewCost.jern);
	$('#stalMurNewCost .stalCost').text(stalMurNewCost.stal);
	$('#stalMurNewCost .titanCost').text(stalMurNewCost.titan);

	$('#stalMurUpgradeCost .pappCost').text(stalMurUpgradeCost.papp);
	$('#stalMurUpgradeCost .plastCost').text(stalMurUpgradeCost.plast);
	$('#stalMurUpgradeCost .treCost').text(stalMurUpgradeCost.tre);
	$('#stalMurUpgradeCost .jernCost').text(stalMurUpgradeCost.jern);
	$('#stalMurUpgradeCost .stalCost').text(stalMurUpgradeCost.stal);
	$('#stalMurUpgradeCost .titanCost').text(stalMurUpgradeCost.titan);

	$('#megaMurNewCost .pappCost').text(megaMurNewCost.papp);
	$('#megaMurNewCost .plastCost').text(megaMurNewCost.plast);
	$('#megaMurNewCost .treCost').text(megaMurNewCost.tre);
	$('#megaMurNewCost .jernCost').text(megaMurNewCost.jern);
	$('#megaMurNewCost .stalCost').text(megaMurNewCost.stal);
	$('#megaMurNewCost .titanCost').text(megaMurNewCost.titan);

	$('#megaMurUpgradeCost .pappCost').text(megaMurUpgradeCost.papp);
	$('#megaMurUpgradeCost .plastCost').text(megaMurUpgradeCost.plast);
	$('#megaMurUpgradeCost .treCost').text(megaMurUpgradeCost.tre);
	$('#megaMurUpgradeCost .jernCost').text(megaMurUpgradeCost.jern);
	$('#megaMurUpgradeCost .stalCost').text(megaMurUpgradeCost.stal);
	$('#megaMurUpgradeCost .titanCost').text(megaMurUpgradeCost.titan);
}
function updateAttackCosts(){
	$('#pappAngrepNewCost .pappCost').text(pappAngrepNewCost.papp);
	$('#pappAngrepNewCost .plastCost').text(pappAngrepNewCost.plast);
	$('#pappAngrepNewCost .treCost').text(pappAngrepNewCost.tre);
	$('#pappAngrepNewCost .jernCost').text(pappAngrepNewCost.jern);
	$('#pappAngrepNewCost .stalCost').text(pappAngrepNewCost.stal);
	$('#pappAngrepNewCost .titanCost').text(pappAngrepNewCost.titan);

	$('#plastAngrepNewCost .pappCost').text(plastAngrepNewCost.papp);
	$('#plastAngrepNewCost .plastCost').text(plastAngrepNewCost.plast);
	$('#plastAngrepNewCost .treCost').text(plastAngrepNewCost.tre);
	$('#plastAngrepNewCost .jernCost').text(plastAngrepNewCost.jern);
	$('#plastAngrepNewCost .stalCost').text(plastAngrepNewCost.stal);
	$('#plastAngrepNewCost .titanCost').text(plastAngrepNewCost.titan);

	$('#plastAngrepUpgradeCost .pappCost').text(plastAngrepUpgradeCost.papp);
	$('#plastAngrepUpgradeCost .plastCost').text(plastAngrepUpgradeCost.plast);
	$('#plastAngrepUpgradeCost .treCost').text(plastAngrepUpgradeCost.tre);
	$('#plastAngrepUpgradeCost .jernCost').text(plastAngrepUpgradeCost.jern);
	$('#plastAngrepUpgradeCost .stalCost').text(plastAngrepUpgradeCost.stal);
	$('#plastAngrepUpgradeCost .titanCost').text(plastAngrepUpgradeCost.titan);

	$('#treAngrepNewCost .pappCost').text(treAngrepNewCost.papp);
	$('#treAngrepNewCost .plastCost').text(treAngrepNewCost.plast);
	$('#treAngrepNewCost .treCost').text(treAngrepNewCost.tre);
	$('#treAngrepNewCost .jernCost').text(treAngrepNewCost.jern);
	$('#treAngrepNewCost .stalCost').text(treAngrepNewCost.stal);
	$('#treAngrepNewCost .titanCost').text(treAngrepNewCost.titan);

	$('#treAngrepUpgradeCost .pappCost').text(treAngrepUpgradeCost.papp);
	$('#treAngrepUpgradeCost .plastCost').text(treAngrepUpgradeCost.plast);
	$('#treAngrepUpgradeCost .treCost').text(treAngrepUpgradeCost.tre);
	$('#treAngrepUpgradeCost .jernCost').text(treAngrepUpgradeCost.jern);
	$('#treAngrepUpgradeCost .stalCost').text(treAngrepUpgradeCost.stal);
	$('#treAngrepUpgradeCost .titanCost').text(treAngrepUpgradeCost.titan);

	$('#jernAngrepNewCost .pappCost').text(jernAngrepNewCost.papp);
	$('#jernAngrepNewCost .plastCost').text(jernAngrepNewCost.plast);
	$('#jernAngrepNewCost .treCost').text(jernAngrepNewCost.tre);
	$('#jernAngrepNewCost .jernCost').text(jernAngrepNewCost.jern);
	$('#jernAngrepNewCost .stalCost').text(jernAngrepNewCost.stal);
	$('#jernAngrepNewCost .titanCost').text(jernAngrepNewCost.titan);

	$('#jernAngrepUpgradeCost .pappCost').text(jernAngrepUpgradeCost.papp);
	$('#jernAngrepUpgradeCost .plastCost').text(jernAngrepUpgradeCost.plast);
	$('#jernAngrepUpgradeCost .treCost').text(jernAngrepUpgradeCost.tre);
	$('#jernAngrepUpgradeCost .jernCost').text(jernAngrepUpgradeCost.jern);
	$('#jernAngrepUpgradeCost .stalCost').text(jernAngrepUpgradeCost.stal);
	$('#jernAngrepUpgradeCost .titanCost').text(jernAngrepUpgradeCost.titan);

	$('#stalAngrepNewCost .pappCost').text(stalAngrepNewCost.papp);
	$('#stalAngrepNewCost .plastCost').text(stalAngrepNewCost.plast);
	$('#stalAngrepNewCost .treCost').text(stalAngrepNewCost.tre);
	$('#stalAngrepNewCost .jernCost').text(stalAngrepNewCost.jern);
	$('#stalAngrepNewCost .stalCost').text(stalAngrepNewCost.stal);
	$('#stalAngrepNewCost .titanCost').text(stalAngrepNewCost.titan);

	$('#stalAngrepUpgradeCost .pappCost').text(stalAngrepUpgradeCost.papp);
	$('#stalAngrepUpgradeCost .plastCost').text(stalAngrepUpgradeCost.plast);
	$('#stalAngrepUpgradeCost .treCost').text(stalAngrepUpgradeCost.tre);
	$('#stalAngrepUpgradeCost .jernCost').text(stalAngrepUpgradeCost.jern);
	$('#stalAngrepUpgradeCost .stalCost').text(stalAngrepUpgradeCost.stal);
	$('#stalAngrepUpgradeCost .titanCost').text(stalAngrepUpgradeCost.titan);

	$('#megaAngrepNewCost .pappCost').text(megaAngrepNewCost.papp);
	$('#megaAngrepNewCost .plastCost').text(megaAngrepNewCost.plast);
	$('#megaAngrepNewCost .treCost').text(megaAngrepNewCost.tre);
	$('#megaAngrepNewCost .jernCost').text(megaAngrepNewCost.jern);
	$('#megaAngrepNewCost .stalCost').text(megaAngrepNewCost.stal);
	$('#megaAngrepNewCost .titanCost').text(megaAngrepNewCost.titan);

	$('#megaAngrepUpgradeCost .pappCost').text(megaAngrepUpgradeCost.papp);
	$('#megaAngrepUpgradeCost .plastCost').text(megaAngrepUpgradeCost.plast);
	$('#megaAngrepUpgradeCost .treCost').text(megaAngrepUpgradeCost.tre);
	$('#megaAngrepUpgradeCost .jernCost').text(megaAngrepUpgradeCost.jern);
	$('#megaAngrepUpgradeCost .stalCost').text(megaAngrepUpgradeCost.stal);
	$('#megaAngrepUpgradeCost .titanCost').text(megaAngrepUpgradeCost.titan);
}

function closeDefenceCard(){
	$('#defenceUpgradeCard').css('visibility', 'hidden');
}

function closeAttackCard(){
	$('#attackUpgradeCard').css('visibility', 'hidden');
}

function destroyMur(){
	hasPappMur = false;
	hasPlastMur = false;
	hasTreMur = false;
	hasJernMur = false;
	hasStalMur = false;
	hasTitanMur = false;
	hasMur = false;

	updateDefence();
}

function destroyAngrep()
{
	hasPappAngrep = false;
	hasPlastAngrep = false;
	hasTreAngrep = false;
	hasJernAngrep = false;
	hasStalAngrep = false;
	hasTitanAngrep = false;
	hasAngrep = false;
	updateAttack();
	$('#fireButton').attr('disabled', 'disabled');
}

var counter = 0;

function fire()
{
	if(hasAngrep)
	{
		garbage-=10;
		counter +=1;
		
		setTimeout("cooldown()", cooldown);
		if(counter==3)
		{
			destroyAngrep();
		}
		else
		{
			$('#fireButton').attr('disabled', 'disabled');
		}
	}
}

function cooldown()
{
	$('#fireButton').removeAttr('disabled');
}