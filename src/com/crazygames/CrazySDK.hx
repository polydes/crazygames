package com.crazygames;

/**
	@see <https://developer.crazygames.com/sdk#HTML5>
**/
@:native("CrazySDK")
extern class CrazySDK
{
	static inline function getInstance():CrazySDK
    {
        return cast untyped __js__("window.CrazyGames.CrazySDK.getInstance()");
    }
    
    function init():Void;
    
    function addEventListener(type:CrazyEventType, fn:Void->Void):Void;
    
    function removeEventListener(type:CrazyEventType, fn:Void->Void):Void;
    
    function requestAd(type:CrazyAdType = CrazyAdType.midgame):Void;
    
    /*
     * Invite link
     * 
     * This feature lets you share the Crazygames version of your game
     * to the players and invite them to join a multiplayer game.
     * You can call inviteLink with a map of parameters that correspond
     * to your game or game room.
     */
    function inviteLink(parameters:js.lib.Object):String;
    
    /*
     * Happy time
     *
     * You can call the happytime() function on player achievements,
     * it will possibly adapt the website to celebrate!
	 *
	 * Use this feature sparingly, the celebration should remain a special moment.
	 */
    function happytime():Void;
    
    function gameplayStart():Void;
    
    function gameplayStop():Void;
    
    function adblockDetectionExecuted():Void;
    
    var hasAdblock(default,null):Bool;
}