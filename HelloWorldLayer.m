//
//  HelloWorldLayer.m
//  EitProsjekt
//
//  Created by Christian Lysne on 2/15/12.
//  Copyright HiST 2012. All rights reserved.
//


// Import the interfaces
#import "HelloWorldLayer.h"

// HelloWorldLayer implementation
@implementation HelloWorldLayer
@synthesize controller;

+(CCScene *) scene
{
	// 'scene' is an autorelease object.
	CCScene *scene = [CCScene node];
	
	// 'layer' is an autorelease object.
	HelloWorldLayer *layer = [HelloWorldLayer node];
	
	// add layer as a child to scene
	[scene addChild: layer];
	
	// return the scene
	return scene;
}

// on "init" you need to initialize your instance
-(id) init
{
	// always call "super" init
	// Apple recommends to re-assign "self" with the "super" return value
	if( (self=[super init])) {
        
        self.isTouchEnabled = true;
		
		// background
        CCTMXTiledMap *tilemap = [CCTMXTiledMap tiledMapWithTMXFile:@"Test4Player.tmx"];
		
		// Load the background layer
		//CCTMXLayer *background1 = [tilemap layerNamed:@"Tile Layer 1"];
        
        //[tilemap.grid.texture setAliasTexParameters];
        
		// Add the tilemap to this layer
		[self addChild:tilemap z:1];
        
        self.anchorPoint = ccp(0,0);
        
        CGRect boundingRect = CGRectMake(0, 0, tilemap.contentSize.width, tilemap.contentSize.height);
        
        
        // the pan/zoom controller
        controller = [[CCPanZoomController controllerWithNode:self] retain];
        controller.boundingRect = boundingRect;
        
        [controller enableWithTouchPriority:0 swallowsTouches:YES];
	}
	return self;
}

// on "dealloc" you need to release all your retained objects
- (void) dealloc
{
	// in case you have something to dealloc, do it in this method
	// in this particular example nothing needs to be released.
	// cocos2d will automatically release all the children (Label)
	
	// don't forget to call "super dealloc"
    
    [controller release];
	[super dealloc];
}
@end
