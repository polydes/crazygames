package com.crazygames;

/**
	@see <https://developer.crazygames.com/sdk#HTML5>
**/
@:enum
abstract CrazyEventType(String)
{
	var adStarted = "adStarted";
	var adFinished = "adFinished";
	var adError = "adError";
	var adblockDetectionExecuted = "adblockDetectionExecuted";
}