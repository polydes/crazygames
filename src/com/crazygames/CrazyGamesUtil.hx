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
}