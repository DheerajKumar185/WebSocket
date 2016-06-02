package com.tech.doks.websocket;

import javax.websocket.server.ServerEndpointConfig.Configurator;

public class CricketServerEndPointConfig extends Configurator {
	 
    private static CricketServerEndPoint cricketServer = new CricketServerEndPoint();
 
    @Override
    public <T> T getEndpointInstance(Class<T> endpointClass) throws InstantiationException {
        return (T)cricketServer;
    }
}