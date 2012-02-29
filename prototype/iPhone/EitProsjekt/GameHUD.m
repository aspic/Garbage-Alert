//
//  GameHUD.m
//  EitProsjekt
//
//  Created by Christian Lysne on 2/15/12.
//  Copyright HiST 2012. All rights reserved.
//

#import "GameHUD.h"


@implementation GameHUD

-(id) init {
    if ((self = [super init])) {
        
        int padding = 79;
        int base = 35;
        int heightName = 305;
        int heightLabel = 280;
        
        //-------------------------- Navn -----------------------------------------------------//
        CCLabelBMFont *pappL = [CCLabelBMFont labelWithString:@"Papp" fntFile:@"Font-hd.fnt"];
        pappL.position = ccp(base, heightName);
        [self addChild:pappL];
        
        CCLabelBMFont *treL = [CCLabelBMFont labelWithString:@"Tre" fntFile:@"Font-hd.fnt"];
        treL.position = ccp(base + padding, heightName);
        [self addChild:treL];
        
        CCLabelBMFont *plastL = [CCLabelBMFont labelWithString:@"Plast" fntFile:@"Font-hd.fnt"];
        plastL.position = ccp(base + (padding * 2), heightName);
        [self addChild:plastL];
        
        CCLabelBMFont *jernL = [CCLabelBMFont labelWithString:@"Jern" fntFile:@"Font-hd.fnt"];
        jernL.position = ccp(base + (padding * 3), heightName);
        [self addChild:jernL];
        
        CCLabelBMFont *staalL = [CCLabelBMFont labelWithString:@"Staal" fntFile:@"Font-hd.fnt"];
        staalL.position = ccp(base + (padding * 4), heightName);
        [self addChild:staalL];
        
        CCLabelBMFont *titanL = [CCLabelBMFont labelWithString:@"Titan" fntFile:@"Font-hd.fnt"];
        titanL.position = ccp(base + (padding * 5), heightName);
        [self addChild:titanL];
        
        //-------------------------- Verdier -----------------------------------------------------//
        papp = [CCLabelBMFont labelWithString:@"0" fntFile:@"Font-hd.fnt"];
        papp.position = ccp(base, heightLabel);
        [self addChild:papp];
        
        tre = [CCLabelBMFont labelWithString:@"0" fntFile:@"Font-hd.fnt"];
        tre.position = ccp(base + padding, heightLabel);
        [self addChild:tre];
        
        plast = [CCLabelBMFont labelWithString:@"0" fntFile:@"Font-hd.fnt"];
        plast.position = ccp(base + (padding * 2), heightLabel);
        [self addChild:plast];
        
        jern = [CCLabelBMFont labelWithString:@"0" fntFile:@"Font-hd.fnt"];
        jern.position = ccp(base + (padding * 3), heightLabel);
        [self addChild:jern];
        
        staal = [CCLabelBMFont labelWithString:@"0" fntFile:@"Font-hd.fnt"];
        staal.position = ccp(base + (padding * 4), heightLabel);
        [self addChild:staal];
        
        titan = [CCLabelBMFont labelWithString:@"0" fntFile:@"Font-hd.fnt"];
        titan.position = ccp(base + (padding * 5), heightLabel);
        [self addChild:titan];

    }
    return self;
}

- (void) pappEndret:(int)verdi {
    [papp setString:[NSString stringWithFormat:@"%i", verdi]];
}
- (void) treEndret:(int)verdi {
    [tre setString:[NSString stringWithFormat:@"%i", verdi]];
}
- (void) plastEndret:(int)verdi {
    [plast setString:[NSString stringWithFormat:@"%i", verdi]];
}
- (void) jernEndret:(int)verdi {
    [jern setString:[NSString stringWithFormat:@"%i", verdi]];
}
- (void) staalEndret:(int)verdi {
    [staal setString:[NSString stringWithFormat:@"%i", verdi]];
}
- (void) titanEndret:(int)verdi {
    [titan setString:[NSString stringWithFormat:@"%i", verdi]];
}
@end