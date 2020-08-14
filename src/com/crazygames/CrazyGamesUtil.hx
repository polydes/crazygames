package com.crazygames;

class CrazyGamesUtil
{
	public static function mapAsObject(map:Map<String, Dynamic>):Dynamic
    {
		var object:Dynamic = {};
		
        for(key in map.keys())
        {
        	Reflect.setField(object, key, map.get(key));
        }
    
    	return object;
    }

    public static function queryUrlParameter(field:String):String
    {
        var url = js.Browser.window.location.href;
        var queryPattern = new EReg("[?&]" + field + "=([^&#]*)", "i");
        if(queryPattern.match(url))
        {
            return queryPattern.matched(1);
        }
        return null;
    }
}