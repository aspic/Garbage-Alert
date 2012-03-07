//
//  GameHUD.h
//  EitProsjekt
//
//  Created by Christian Lysne on 2/15/12.
//  Copyright HiST 2012. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "cocos2d.h"
#import "HelloWorldScene.h"

@interface GameHUD : CCLayer {
    
    CCLabelBMFont *papp;
    CCLabelBMFont *tre;
    CCLabelBMFont *plast;
    CCLabelBMFont *jern;
    CCLabelBMFont *staal;
    CCLabelBMFont *titan;
    
    CCMenuItem *pappMurNewCost;
    CCMenuItem *pappAttackNewCost;
    
    CCMenuItem *treMurNewCost;
    CCMenuItem *treMurUpgradeCost;
    CCMenuItem *treAttackNewCost;
    CCMenuItem *treAttackUpgradeCost;
    
    CCMenuItem *plastMurNewCost;
    CCMenuItem *plastMurUpgradeCost;
    CCMenuItem *plastAttackNewCost;
    CCMenuItem *plastAttackUpgradeCost;
    
    CCMenuItem *jernMurNewCost;
    CCMenuItem *jernMurUpgradeCost;
    CCMenuItem *jernAttackNewCost;
    CCMenuItem *jernAttackUpgradeCost;
    
    CCMenuItem *staalMurNewCost;
    CCMenuItem *staalMurUpgradeCost;
    CCMenuItem *staalAttackNewCost;
    CCMenuItem *staalAttackUpgradeCost;
    
    CCMenuItem *titanMurNewCost;
    CCMenuItem *titanMurUpgradeCost;
    CCMenuItem *titanAttackNewCost;
    CCMenuItem *titanAttackUpgradeCost;
}

- (void) pappEndret:(int)verdi;
- (void) treEndret:(int)verdi;
- (void) plastEndret:(int)verdi;
- (void) jernEndret:(int)verdi;
- (void) staalEndret:(int)verdi;
- (void) titanEndret:(int)verdi;
@end