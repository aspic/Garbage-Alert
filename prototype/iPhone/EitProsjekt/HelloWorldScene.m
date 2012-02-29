//
//  HelloWorldLayer.m
//  EitProsjekt
//
//  Created by Christian Lysne on 2/15/12.
//  Copyright HiST 2012. All rights reserved.
//


// Import the interfaces
#import "HelloWorldScene.h"
#import "AppDelegate.h"

@implementation HelloWorldScene
@synthesize layer;
@synthesize hud;
@synthesize resources;

+(id) scene
{
	// 'scene' is an autorelease object.
	HelloWorldScene *scene = [[HelloWorldScene alloc] init];
	
	// 'layer' is an autorelease object.
	HelloWorldLayer *gamelayer = [HelloWorldLayer node];
    scene.layer = gamelayer;
	// add layer as a child to scene
    [scene addChild:scene.layer z:1];
    
    scene.resources = [[GameResources alloc] init];
    
    GameHUD *gamehud = [GameHUD node];
    
    scene.hud = gamehud;
    [scene addChild:scene.hud z:2];
    
    [scene schedule:@selector(updateResources:) interval:1.0];
    
	// return the scene
	return scene;
}

-(void) updateResources:(ccTime) dt {
    
    resources.papp += 1;
    [self.hud pappEndret:resources.papp];
    
    resources.tre += 2;
    [self.hud treEndret:resources.tre];
    
    resources.plast += 3;
    [self.hud plastEndret:resources.plast];
    
    resources.jern += 4;
    [self.hud jernEndret:resources.jern];
    
    resources.staal += 5;
    [self.hud staalEndret:resources.staal];
    
    resources.titan += 6;
    [self.hud titanEndret:resources.titan];
}


+(HelloWorldScene*) get {
    AppDelegate *delegate = [[UIApplication sharedApplication] delegate];
    return delegate.game;
}

- (void)dealloc {
    self.layer = nil;
    [super dealloc];
}

@end



// HelloWorldLayer implementation
@implementation HelloWorldLayer
@synthesize controller;

// on "init" you need to initialize your instance
-(id) init
{
	// always call "super" init
	// Apple recommends to re-assign "self" with the "super" return value
	if( (self=[super init])) {
        
        self.isTouchEnabled = true;
		
		// background
        CCTMXTiledMap *tilemap = [CCTMXTiledMap tiledMapWithTMXFile:@"Test4Player.tmx"];
        
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
