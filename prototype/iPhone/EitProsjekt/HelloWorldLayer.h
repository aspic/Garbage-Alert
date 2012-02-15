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

@class CCPanZoomController;

// HelloWorldLayer
@interface HelloWorldLayer : CCLayer
{
    CCPanZoomController *controller;
}
@property (nonatomic, assign) CCPanZoomController *controller;

// returns a CCScene that contains the HelloWorldLayer as the only child
+(CCScene *) scene;

@end
