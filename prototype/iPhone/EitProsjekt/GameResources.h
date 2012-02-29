//
//  GameResources.h
//  EitProsjekt
//
//  Created by Christian Lysne on 2/29/12.
//  Copyright (c) 2012 HiST. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface GameResources : NSObject {
    int papp;
    int tre;
    int plast;
    int jern;
    int staal;
    int titan;
    
    int pappMurNewCost;
    int pappAttackNewCost;
    
    int treMurNewCost;
    int treMurUpgradeCost;
    int treAttackNewCost;
    int treAttackUpgradeCost;
    
    int plastMurNewCost;
    int plastMurUpgradeCost;
    int plastAttackNewCost;
    int plastAttackUpgradeCost;
    
    int jernMurNewCost;
    int jernMurUpgradeCost;
    int jernAttackNewCost;
    int jernAttackUpgradeCost;
    
    int staalMurNewCost;
    int staalMurUpgradeCost;
    int staalAttackNewCost;
    int staalAttackUpgradeCost;
    
    int titanMurNewCost;
    int titanMurUpgradeCost;
    int titanAttackNewCost;
    int titanAttackUpgradeCost;
}

@property(nonatomic, assign) int papp;
@property(nonatomic, assign) int tre;
@property(nonatomic, assign) int plast;
@property(nonatomic, assign) int jern;
@property(nonatomic, assign) int staal;
@property(nonatomic, assign) int titan;

@property(nonatomic, assign) int pappMurNewCost;
@property(nonatomic, assign) int pappAttackNewCost;

@property(nonatomic, assign) int treMurNewCost;
@property(nonatomic, assign) int treMurUpgradeCost;
@property(nonatomic, assign) int treAttackNewCost;
@property(nonatomic, assign) int treAttackUpgradeCost;

@property(nonatomic, assign) int plastMurNewCost;
@property(nonatomic, assign) int plastMurUpgradeCost;
@property(nonatomic, assign) int plastAttackNewCost;
@property(nonatomic, assign) int plastAttackUpgradeCost;

@property(nonatomic, assign) int jernMurNewCost;
@property(nonatomic, assign) int jernMurUpgradeCost;
@property(nonatomic, assign) int jernAttackNewCost;
@property(nonatomic, assign) int jernAttackUpgradeCost;

@property(nonatomic, assign) int staalMurNewCost;
@property(nonatomic, assign) int staalMurUpgradeCost;
@property(nonatomic, assign) int staalAttackNewCost;
@property(nonatomic, assign) int staalAttackUpgradeCost;

@property(nonatomic, assign) int titanMurNewCost;
@property(nonatomic, assign) int titanMurUpgradeCost;
@property(nonatomic, assign) int titanAttackNewCost;
@property(nonatomic, assign) int titanAttackUpgradeCost;
@end
