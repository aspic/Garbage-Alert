//
//  HelloWorldLayer.h
//  EitProsjekt
//
//  Created by Christian Lysne on 2/15/12.
//  Copyright HiST 2012. All rights reserved.
//


// When you import this file, you import all the cocos2d classes
#import "cocos2d.h"
#import "CCPanZoomController.h"
#import "GameHUD.h"
#import "GameResources.h"

@class CCPanZoomController;
@class GameHUD;

// HelloWorldLayer
@interface HelloWorldLayer : CCLayer
{
    CCPanZoomController *controller;
}
@property (nonatomic, assign) CCPanZoomController *controller;
@end

@interface HelloWorldScene : CCScene {
	HelloWorldLayer *layer;
    GameHUD *hud;
    GameResources *resources;
}

@property (nonatomic, retain) HelloWorldLayer *layer;
@property (nonatomic, retain) GameHUD *hud;
@property (nonatomic, assign) GameResources *resources;

// returns a Scene that contains the HelloWorld as the only child
+(id) scene;
+(HelloWorldScene*) get;
@end