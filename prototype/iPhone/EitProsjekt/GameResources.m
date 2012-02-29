//
//  GameResources.m
//  EitProsjekt
//
//  Created by Christian Lysne on 2/29/12.
//  Copyright (c) 2012 HiST. All rights reserved.
//

#import "GameResources.h"

@implementation GameResources


@synthesize papp;
@synthesize tre;
@synthesize plast;
@synthesize jern;
@synthesize staal;
@synthesize titan;

@synthesize pappMurNewCost;
@synthesize pappAttackNewCost;

@synthesize treMurNewCost;
@synthesize treMurUpgradeCost;
@synthesize treAttackNewCost;
@synthesize treAttackUpgradeCost;

@synthesize plastMurNewCost;
@synthesize plastMurUpgradeCost;
@synthesize plastAttackNewCost;
@synthesize plastAttackUpgradeCost;

@synthesize jernMurNewCost;
@synthesize jernMurUpgradeCost;
@synthesize jernAttackNewCost;
@synthesize jernAttackUpgradeCost;

@synthesize staalMurNewCost;
@synthesize staalMurUpgradeCost;
@synthesize staalAttackNewCost;
@synthesize staalAttackUpgradeCost;

@synthesize titanMurNewCost;
@synthesize titanMurUpgradeCost;
@synthesize titanAttackNewCost;
@synthesize titanAttackUpgradeCost;

-(id) init {
    if ((self = [super init])) {
        
        papp = 0;
        tre = 0;
        plast = 0;
        jern = 0;
        staal = 0;
        titan = 0;
        
        pappMurNewCost = 0;
        pappAttackNewCost = 0;
        
        treMurNewCost = 0;
        treMurUpgradeCost = 0;
        treAttackNewCost = 0;
        treAttackUpgradeCost = 0;
        
        plastMurNewCost = 0;
        plastMurUpgradeCost = 0;
        plastAttackNewCost = 0;
        plastAttackUpgradeCost = 0;
        
        jernMurNewCost = 0;
        jernMurUpgradeCost = 0;
        jernAttackNewCost = 0;
        jernAttackUpgradeCost = 0;
        
        staalMurNewCost = 0;
        staalMurUpgradeCost = 0;
        staalAttackNewCost = 0;
        staalAttackUpgradeCost = 0;
        
        titanMurNewCost = 0;
        titanMurUpgradeCost = 0;
        titanAttackNewCost = 0;
        titanAttackUpgradeCost = 0;
        
    }
    return self;
}
@end
