//
//  AppDelegate.h
//  EitProsjekt
//
//  Created by Christian Lysne on 2/15/12.
//  Copyright HiST 2012. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "HelloWorldScene.h"

@class RootViewController;

@interface AppDelegate : NSObject <UIApplicationDelegate> {
	UIWindow			*window;
	RootViewController	*viewController;
    HelloWorldScene     *game;
}

@property (nonatomic, retain) UIWindow *window;
@property (nonatomic, assign) HelloWorldScene *game;
@end
