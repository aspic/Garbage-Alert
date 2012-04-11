function upgradeToPlastic() 
{
	papp -= 5;
	resources.getResourceIcon('plastic').isAvailable = true;
	updateCapabilities();
	updateResources();
	$('#upgradechooser').css('visibility', 'hidden');
}

function upgradeToWood()
{
	papp -= upgradeToTreCost.papp;
	resources.getResourceIcon('wood').isAvailable = true;
	updateResources();
	updateCapabilities();
	$('#upgradechooser').css('visibility', 'hidden');
}

function upgradeToIron() 
{
	papp -= 10;
	tre -= 25;
	resources.getResourceIcon('iron').isAvailable = true;
	updateCapabilities();
	updateResources();
	$('#upgradechooser').css('visibility', 'hidden');
}

function upgradeToSteel()
{
	papp -= 10;
	plast -= 40;
	resources.getResourceIcon('steel').isAvailable = true;
	updateResources();
	updateCapabilities();
	$('#upgradechooser').css('visibility', 'hidden');
}

function upgradeToTitanium()
{
	papp -= 50;
	tre -= 50;
	plast -= 50;
	stal -= 50;
	jern -= 50;
	resources.getResourceIcon('titanium').isAvailable = true;
	updateResources();
	updateCapabilities();
	$('#upgradechooser').css('visibility', 'hidden');
}