////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// A Context-Free grammar for Generative Music Criticism by iroro 
// V0.1 2009.11.06 (Processing, unreleased)
// V0.2 2013.01.15 (Javascript)
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

reviewGrammar = { 

"<start>": "<artist-phrase>. | <artist-phrase>. <interjection>",

///////  
"<artist-phrase>": " <artist-descriptive-phrase> | <music-recording-phrase> | <artist-action-phrase>",
//// "<artist-phrase>": "",	

///////  
"<artist-action-phrase>": "\
		\
		1 Few artists are this <adept-syn> at wringing so much <ferocity-syn> from their laptops, yet the \
		  <time-adjective> <music-recording-noun> by <artist> <join-phrase> <structure-description> and <structure-description> | \
		\
		2 <artist> and <static-artist> take on the <label> crew for another <music-recording-noun>, demonstrating <structure-description> and a \
		  <creative-syn> <ferocity-syn>, <verb-phrase-singular> | \
		\
		3 Your mind is about to be blown by the unearthing of a <year> curio from <artist>, offering a truly <bizarre-syn>, \
		  but ultimately <adept-syn> selection of privately-pressed tracks that sound somewhere between <genre> and <genre> | \
		\
		4 Your mind is about to be blown by the unearthing of a <year> curio from <artist>, showing off <structure-description>, \
		  <gerund-song-phrase> | \
		\
		5 The songwriting <ferocity-syn> <exhibited-syn> by <artist> <raises-goosebumps-syn>, showing off <structure-description>, \
		  dwarfing the <structure-description> of many better known artists | \
		\
		6 The songwriting <ferocity-syn> <exhibited-syn> by <artist> <wrenches-syn> ideas from <genre>, <genre> and <genre>, \
		  crafting sidewinding <derangements-syn> that blend <structure-description> and <structure-description> | \
		\
		7 The ascendant <ferocity-syn> of <artist> is on display again, showing off <structure-description>, \
		  <gerund-song-phrase> | \
		\
		8 The musical <ferocity-syn> of <artist> invokes states of psychological <panic-syn> that will resonate \
		  beyond <experimental-syn> <genre> <circles-syn>, into the <daily-lives-syn> of <fans-syn> of <genre>",

///////  
"<artist-descriptive-phrase>": "\
		\
		9 The <creative-syn> <ferocity-syn> <exhibited-syn> by <artist> <artist-description-phrase> | \
		\
		10 The <creative-syn> <ferocity-syn> <exhibited-syn> by <artist> <elevates-syn> <genre> with <genre-adjective> <genre> <genre-noun> | \
		\
		11 The <creative-syn> <ferocity-syn> <exhibited-syn> by <artist> hoists up the profile \
		   of <structure-description> and screeched-out <genre> vocals | \
		\
		12 The <creative-syn> <ferocity-syn> <exhibited-syn> by <artist> <join-phrase> <genre> with \
		   <structure-description>, <evocative-adjective> of <the-synth-drones-Klaus> | \
		\
		13 The <creative-syn> <ferocity-syn> <exhibited-syn> by <artist> <join-phrase> <structure-description> \
		   with <structure-description> | \
		\
		14 The <creative-syn> <ferocity-syn> <exhibited-syn> by <artist> tenuously welds a growing amalgam of \
		   genre experiments with a veneer of <ferocity-syn>, <ferocity-syn> and Fonzie cool | \
		\
		15 The <bizarre-syn> <panic-syn> evoked by <artist> will <spellbind-syn> <fans-syn> of <genre>, \
		   <roving-syn> from <structure-description> to <structure-description> | \
		\
		16 <Roving-syn> from <structure-description> to <structure-description>, the \
		   <bizarre-syn> <panic-syn> evoked by <artist> will <spellbind-syn> <fans-syn> of <genre> <genre-noun>",

///////  		
"<music-recording-phrase>": "\
		\
		17 The <time-adjective> <music-recording-noun> by <artist> <song-description-phrase> | \
		\
		18 The <time-adjective> <music-recording-noun> by <artist> <raises-goosebumps-syn>, <gerund-song-phrase> | \
		\
		19 The <time-adjective> <music-recording-noun> by <artist> <reverbs-with-phrase> <a-structure-description> | \
		\
		20 The <time-adjective> <music-recording-noun> by <artist> encapsulates the <zeitgeist-syn> of the \
		<genre> scene with pinpoint accuracy |\
		\
		21 The <time-adjective> <music-recording-noun> by <artist> taps into a delicate, \
		   <genre-adjective> corner of the <musical-universe-syn>, <gerund-song-phrase> | \
		\
		22 The <time-adjective> <music-recording-noun> by <artist> is a masterclass in the dark <art-syn> of <genre>, \
		   showing off <structure-description>, <gerund-song-phrase> | \
		\
		23 The <time-adjective> <music-recording-noun> by <artist> is a <retro-syn> <reconstruction-syn> of \
		   <genre> <balladry-syn> <verb-phrase-singular>",		


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
"<artist>":  "`getHotttArtists()`",

///// List of famous, living producers that would able to collaborate
"<static-artist>": 	"Timbaland | J Dilla | William Hung | Dr. Dre | Rick Rubin | RZA | Steve Albini | \
					Baauer | Max Martin | The Smeezingtons | Jeff Bhasker | T-Bone Burnett | The Neptunes",
					
///// Special skanky artists
"<skank-artist>": "Las Ketchup | Ricky Martin | Gloria Estefan |  Céline Dion | Delta Goodrem | \
					Baby Spice | Robbie Williams | Kylie Minogue | Sophie Ellis-Bextor | Gwen Stefani |\
					The Pussycat Dolls | Nelly Furtado",

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

"<raises-goosebumps-syn>": "raises the biggest goosebumps | \
							raises the biggest gooseflesh | \
							induces the biggest frissons | \
							induces the biggest exhilaration | \
							induces the biggest rush | \
							generates the biggest rush | \
							generates the biggest frissons | \
							generates the biggest frissons | \
							coaxes out the biggest gooseflesh | \
							coaxes out the biggest exhilaration | \
							causes the biggest rush | \
							produces the biggest rush | \
							produces the biggest goosebumps | \
							produces the biggest frissons",

"<fans-syn>": "fans | enthusiasts | devotees | lovers | admirers | zealots | connoisseurs |\
			   aficionados | addicts | junkies | fanatics | disciples",


"<spellbind-syn>": "spellbind | bewitch | enthrall | grip | mesmerize | hypnotize | entrance | \
				captivate | stupefy | repulse | repel | bedevil | hex | slay | wow |\
				enchant | beguile | gratify | enslave | hook | subdue",

////IO HAVOC -- TO FIX -- need toUpper or another elegant solution to avoid duplication
"<roving-syn>": "roving | wandering | ranging | drifting | meandering | gallivanting | \
				zigzagging | moving | pivoting | floating", 

"<Roving-syn>": "Roving | Wandering | Ranging | Drifting | Meandering | Gallivanting | \
				Zigzagging | Moving | Pivoting | Floating", 

"<retro-syn>": "retro | modern | ",

"<musical-universe-syn>": "musical universe | collective subconscious",

"<elevates-syn>": "elevates | modulates",

"<essence-syn>": "essence | quintessence | finale | culmination | climax | persona | \
				  apotheosis | zenith | resolution | epilogue  | coda | conclusion | denouement",

"<balladry-syn>": "balladry | poetry | lyricism | fusion",  

"<genre-noun>": "ephemera | futurism | classicism | sophistication | eclecticism | \
				 plagiarism | functionalism | stoicism | modernism | \
				 reductionism | minimalism | syncretism | polystylism | \
				 anti-intellectualism | formalism | expressionism",
					
"<pastiche-syn>":  "pastiche | sophistication | appropriation | <genre-noun> | \
					ephemera | miscellany | miscellanea | style arrangements | \
				   	detritus | flotsam | chaos | simulacrum",

"<teeters-syn>": "teeters on the <edge-syn> of | \
				 dabbles in | fiddles with | flirts with",

"<edge-syn>": 	"edge | brink | fringes", 

"<art-syn>": 	"art | craft", 

"<reconstruction-syn>": "reconstruction | emulsion |  modulation | inflection | \
						rewriting | rescripting | commingling",

"<panic-syn>": "panic | terror | longing | hysteria | dread | malaise | discomfort | unease",

"<experimental-syn>": "experimental | avant-garde | new-wave | vanguard",

"<circles-syn>": "circles | milieux | spaces | settings",

"<daily-lives-syn>": "daily lives | quotidian | everyday | daily routine | day-to-day",

"<bizarre-syn>": "bizarre | curious | peculiar | unusual",

"<adept-syn>": "adept | skilled | masterful | deft | dexterous | brilliant",

"<exhibited-syn>": "exhibited | displayed | manifested | shown | demonstrated | expressed",

"<while-syn>": "while | whilst | all the while",

"<derangements-syn>": "derangements | arrangements",

"<zeitgeist-syn>": "zeitgeist | spirit | current mood | current character | tone | trending course | future",

"<creative-syn>":	"sonic | tasteful acoustic | creative | musical | novel musical | \
					fresh melodic | stirring acoustic | visionary sonic | \
					trendy musical | stylish sonic | refined | magnificent musical",
					
"<wrenches-syn>": "wrenches | plucks | wrests | snatches | prys | pulls | borrows",

"<ferocity-syn>": 	"ferocity | artistry | courage | charisma | cowardice | nerve | \
					stoutheartedness | endowment | dauntlessness | savagery | genius | \
					furiousness | violence |  wildness | severeness | \
					simplicity | accessibility | straightforwardness | \
					unpretentiousness | naturalness | clarity | spareness | austerity | \
					effortlessness | affectation | pretentiousness | posturing | \
					mulishness | recalcitrance | generosity | \
					excess | drama | gutsiness",

"<riffs-syn>": "riffs | noodlings | melodies",

"<writhes-syn>":	"writhes | squirms | wriggles | thrashes | flails | tosses and turns",

"<join-phrase>": 	"marries | fuses | blends | marries | merges | mixes | unifies | intermingles | melds | joins",

"<evocative-adjective>":	"evocative | suggestive | reminiscent",

"<plains-syn>": 	"plains | savannahs | steppes | tundras | velds | pastures | vales",

"<electro-acoustic-syn>":  "electro-acoustic | 8-bit | Illbient | Nintendocore | ambient | shoegazey",

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

"<interjection>": 	"Crucial release! | Most excellent! |  Utterly astounding! | Somewhat mind-blowing! | \
					Jaw-dropping! | Breathtaking! | This is gripping sh*t! | Frankly intoxicating! | F**kin' nuts! | \
					Rousing material! | Electrifying! | Most-definitely heady! | A modern compositional masterpiece! | \
					Miss out at your peril! | Seriously? | Wow! | Bitchin'! | Hearing is believing! | Yikes! | \
					Riveting! | A vital release! | Solid. | Wikkid! | Happy listening! | Hella good! | \
					Don't waste your time. | Phatness! | Bad*ss! | Dope. | Sublime. | Another excellent transmission! |\
					A musical treat. | For connoisseurs only.",

"<music-recording-noun>":	"12” wax | MP3 | cassette | CD | album | 4-track cartridge | \
							live-stream | laserdisc | DVD-R | EP | ogg-vorbis download | maxi-single | Bandcamp release | \
							ambisonic release | white-label | release | Spotify stream | Beats Music special | Rdio exclusive | \
							17-track compilation | Soundcloud clip | promo | Youtube video | 7” vinyl | box set | \
							Mixcloud set | Myspace track | unplugged session | music video | 27-track anthology",

"<time-adjective>":	"latest | recent | newest | current | charting | forthcoming | upcoming | trending",

"<artist-description-phrase>": 	"<adverb> defies categorisation | \
								demonstrates an innate grasp of the sublime qualities of <genre>  | \
								makes for an uncommonly good performance <verb-phrase-singular> | \
								compliments credible <genre> <genre-noun> with a mighty doublepack of deadly bass variations <verb-phrase-singular> | \
								<writhes-syn> <adverb> with overdriven intensity and deeply sinister undercurrents | \
								tries to solve an inherently under-constrained musical problem with <structure-description>|\
								tries to make sense out of a 3D sonic world using inadequate two-dimensional projections",
						
"<gerund-song-phrase>": 	"marrying <genre> with <structure-description> | \
							meandering around a plucked melody <verb-phrase-singular> |	\
							sounding like <skank-artist> in a skank off, after inhaling a canister of nitrous oxide | \
							sounding like Björk jamming with <static-artist> after a relaxing sauna session | \
							blurring the boundaries between <structure-description> and <structure-description> | \
							eschewing the familiar palimpsest of credible <genre> <genre-noun> | \
							injecting hints of <genre> patterns into <genre> | \
							letting in shards of light and sumptuous colours painted through snippets of <genre> | \
							propelling ethereal glitching rhythms across <plains-syn> of elaborately fashioned <electro-acoustic-syn> static | \
							wielding <struct-adj> Detroit shuffles à la Theo Parrish | \
							brushing its rhythms with a breathtaking sleight of hand | \
							spinning a collection of <struct-adj> piano elegies | \
							veering off on solo tangents of enchanted <electro-acoustic-syn> abstraction | \
							functioning through the frosted lens of <Finnish-syn> stoicism | \
							whining and squealing like a farmyard animal in the pangs of labour | \
							ricocheting reverbed-out gunshots off grimy bassline warps | \
							employing <struct-adj>, staggered harmonic progressions | \
							riding rock hard subbass depth charges | \
							creating atmospheric pressure drops sharp enough to give lesser divers the bends | \
							skittering back to <struct-adj>, post-Autechre beat deconstructions | \
							dripping with endless reverb and delay manipulation | \
							trawling the depths of vinyl's pockmarked grooves for <a-structure-description> | \
							before collapsing beneath <a-structure-description> | \
							melting <genre> accordion and Diwali-riddim claps with woozy <electro-acoustic-syn> static |\
							ploughing furrows of unresolved chord changes, stretching out to infinity |\
							exhibiting <a-structure-description> <evocative-adjective> of <the-synth-drones-Klaus>",


"<a-structure-description>":   "\
								an alchemical blend of post-rave <genre> electronics |\
								a blistering feast of two-chord distortion | \
								a bubbly <J-pop> appreciation | \
								a cacophany of autistic rhythms | \
								a haunted melancholic incantation, curling ineffably upwards | \
								a dense, effulgent piece of faux-romantic orchestral syrup | \
								a deluge of piano flecked gems | \
								an ambivalent reverie, rising from elaborated voice-leading constructions |\
								a banquet of Flying Lotus-style bass arpeggiations |  \
								a series of shamanic, trance-state mutterings | \
								a feast of noise-rock virtuosity | \
								a gratuitous, pornographic level of lusciousness |\
								a growing amalgam of motivic contradictions |  \
								a horrifying mess of head-meddling unpleasantness |\
								an overbearingly fuzzy thicket of layered drones |\
								an indisposable slice of <genre> delectability | \
								a low key, grotty Jakbeat |\
								a morally inflamatory, skronking bassline | \
								a multicoloured blast of intoxicating feedback |\
								a mindblowing dubscape of effects | \
								a provacative Steely & Clevie produced riddim |\
								a pure, transcendental rave feeling | \
								a super platter of UK bass installments | \
								a timeless, primal yearning for volume and repetition |\
								a toxic hellstew of glitched-out tapestries |\
								a vaporous spray of submerged analogue delays |\
								an idiosyncratic veneer of melancholy |\
								a veritable haberdashery of vintage musical textures |\
								a wash of tidal rhythms and turbulent crackle |\
								an obscure, Warrior Queen gunman lyric",
				
"<genre-adjective>": 	"quotidian | slippery | fragmented | punctured | wispy | \
						smudged | delicate | silky |  sweet | fractured | \
						mangled | shattered | graceful | disenchanted",


"<atmospherics-syn>": 	"atmospherics | ambiences | tonalities",

"<struct-adj>": "\
				atmospheric |\
				blistering | \
				breathtaking |\
				cinematic |\
				chugging  |\
				charming  |\
				churning |\
				dramatic |\
				eroded | \
				enigmatic |\
				endothermic |\
				exothermic |\
				flickering |\
				fluttering |\
				hyper-prismic |\
				hypnagogic |\
				julienned |\
				lysergic |\
				majestic |\
				narcotic |\
				phantasmic |\
				pirouetting |\
				psychedelic |\
				resplendent |\
				rising |\
				roiling |\
				rousing |\
				rippling |\
				sensual |\
				slinking |\
				shimmering |\
				shuffling |\
				shuddering |\
				somnambulistic |\
				soporific |\
				symphonic |\
				synaesthetic |\
				throbbing |\
				towering |\
				tantalising |\
				undulating |\
				whinnying |\
				\
				austere |\
				adventurous|\
				abstracted |\
				dexterous |\
				febrile | \
				flanged |\
				hazy |\
				lush |\
				mutant |\
				overheated |\
				paranoid|\
				unstable |\
				relentless  |\
				reverberant |\
				sculpted |\
				spherical|\
				sumptuous |\
				sinister |\
				smudged |\
				tortured",

"<structure-description-01>": "\
							<struct-adj>, agitated synthlines |\
  							<struct-adj>, beat psychedelics |\
							<struct-adj>, breakbeat-fueled <genre> | \
							<struct-adj>, plunging fifths |\
							<struct-adj> constellations of de-glazed rhythms |\
							<struct-adj> Caribbean pulses |\
							<struct-adj>, distorted crescendos |\
							<struct-adj>, drag vocals |\
							<struct-adj> dulcimer melodies |\
							<struct-adj>, earlobe-crashing breakbeats |\
							<struct-adj>, forward-thinking <genre> |\
							<struct-adj>, rhythmic collages | \
							<struct-adj>, garage syncopations | \
							<struct-adj> guitar riffs  |\
							<struct-adj>, gristly synths |\
							<struct-adj>, ghoulish cries | \
							<struct-adj>, harmonic machinations | \
							<struct-adj>, haunting strings | \
							<struct-adj>, incandescent lyrics | \
							<struct-adj>, <J-pop> delights |\
							<struct-adj>, kosmische pulsations |\
							<struct-adj>, laminous droning |\
							<struct-adj>, melodic ephemera |\
							<struct-adj>, mercurial motifs |\
							<struct-adj>, mind-quaking ambiences |\
							<struct-adj>, mini-orchestral swells | \
							<struct-adj>, off-beat syncopations | \
							<struct-adj>, percussive interjections |\
  							<struct-adj>, post-garage noodlings |\
							<struct-adj>, post-techno ecstasy |\
							<struct-adj>, powdery effects |\
							<struct-adj>, prismatic strings |  \
							<struct-adj>, monochord accompaniments |\
							<struct-adj>, Rhodes keys |\
							<struct-adj>, rhythm manipulations |\
							<struct-adj>, sawtooth basslines |\
							<struct-adj>, <sexy-syn> blips |\
							<struct-adj>, silvery notes |\
							<struct-adj>, stoic minimalisms |\
							<struct-adj>, throat-tearing howls |\
							<struct-adj>, trumpet lines|\
							<struct-adj>, vocal incantations |\
							<struct-adj>, West Coast '60s sounds | \
							<struct-adj>, xylophonic geometries |\
							<struct-adj>, zombie-like chants | \
							\
							<struct-adj>, <struct-adj> lyrics |\
							<struct-adj> oscillator experimentations |\
							<struct-adj>, non-linear constructions |\
							<struct-adj>, TB-303 residues |\
							<struct-adj>, skanking movements |\
							<struct-adj>, iridescent arrangements |\
							<struct-adj>, rhythm mechanics | \
							<struct-adj>, delayed beats |\
							<struct-adj>, synthetic embellishments |\
							<struct-adj>, Detroit chords |\
							<struct-adj>, fractal loops |\
							<struct-adj>, game-arcade melodies |\
							<struct-adj>, <genre> mutations |\
							<struct-adj>, psilocybic electronics |\
							<struct-adj>, raindance drums |\
							<struct-adj>, quivering sustains |\
							<struct-adj>, amplifier hum |\
							<struct-adj>, bell tones |\
							<struct-adj>, Chicago house reductions |\
							<struct-adj>, Europorno soundtracks |\
							<struct-adj>, sonic brushstrokes |\
							<struct-adj>, saxophone emissions",

"<structure-description-02>": "\
							aerated electronic timbres |\
							alien analogue tones |\
							arcing sinewaves |\
							austere <genre> <genre-noun> |\
							austere <genre> cadences |\
							avant-garde chamber instrumentations |\
							assorted disembodied voices |\
							blissfully uncluttered aesthetics | \
							beautifully tempered zones of twilight ambient  |\
							acid-house breakbeat effusions |\
							coke-white pop histrionics|\
							classical omnidirectional yodeling |\
							cassette tape overdubs |\
							Cambodian folk narratives |\
							dense analogue experiments |\
							digitally dissected orchestral figures |\
							devastatingly heavy <genre> mutations |\
							dark careening tones from bright, queasy synthesizers |\
							dense thickets of digitally applied crackle |\
							deep-set metallic sonorities |\
							detached 90's post-modernism |\
							dread techno futurisms |\
							deep, rustic darkness |\
							expertly manipulated rhythm alchemies  |\
							early handmade experiments |\
							endlessly arpeggiated chords |\
							enunciated warbling consonants |\
							European technical execution |\
							fat skronked basslines under <genre-adjective>, minimal percussion |\
							flourishes of TR-909 hi-hats |\
							freaky sequenced blips |\
							foggy northern European drone-scapes |\
							floppy fringe harmonies |\
							fuzzy shoegaze psychedelia |\
							gender-bending vocals |\
							gentle, forlorn 8-bit bleeps | \
							gloriously wild natural timbres |\
							grim, crust-laden darkness |\
							grey slabs of doomy <atmospherics-syn> |\
							gorgeously fragile electronica |\
							gorgeous, platitudinous nonsense |\
							glacially-paced gothic stoner rock |\
							hazy washes of reverbed harps |\
							hazy, spun out blues |\
							hi-scoring aquakrunk madness |\
							head-pressurised technohouse vibes	|\
							hyper-lean <genre> geometries | \
							hints of free-roaming Krautrock |\
							harmonics-drenched white noise |\
							hummable <genre> melodies |\
							heavy rolling dancehall grinders |\
							haunted-house analogue tactics |\
							hazily buoyant, ethereal female vocals |\
							intricately funked syncopations |\
							inimitably raw, psychedelic wow-and-flutter beats |\
							jellied, slushy bass frequencies |\
							loose strands of treated guitar |\
							lurid hues of neon pink & green |\
							layered embers of sound |\
							layered spaciousness, panned to infinity |\
							malaria-infected, vintage radio essences |\
							modern amorphous psychedelia |\
							magnificently evocative, mercilessly deep, tweaked out, post-rave ecstasy |\
							massively modulated vocal treatments |\
							myriad drum-machine pattern-permutations |\
							oblique hi-end processing |\
							orchestral level pomp & bombast |\
							post-pop slacker tendencies |\
							pure Balearic house bliss |\
							reptilian distress cries |\
							rootsy one-drop dub keys |\
							Saharan blues fetishism |\
							succulent bass treatments |\
							stoned post-punk guitar strokes |\
							shoegazy opiates |\
							sticky, wriggly electro influences |\
							soft, smoky sax lines |\
							spare, flinty embers  |\
							supple subbass wobbles |\
							subtly plush synth embellishments |\
							semi-organic gristle |\
							sea-sick rhythms |\
							shards of ultra-plastic electro-funk |\
							stringently reduced techno |\
							somnolent, spectrally sifted chorales |\
							spectrally sifted electronics |\
							spacious Balearic keys |\
							slurred, bladdered articulations |\
							sculpted rhythm dynamics |\
							spleen-crushing bass |\
							sublime robo-tropical leitmotives |\
							steely, speaker-destroying dub techno |\
							Scandinavian machine music |\
							<sexy-syn> dancehall minimalism |\
							soupy electronic fog |\
							textural guitar-scapes |\
							tranquil, free-floating chorales |\
							testosterone-fuelled, urban mutations | \
							utterly sick digital spasms |\
							undulating, unstable cadences |\
							unfathomably complex textures |\
							uncharacteristically spry tempos |\
							unfathomably deep, utterly sick, dubwise textures |\
							vocodered, acid belching TB-303s |\
							vein-melting, improvised freakery |\
							wonderfully shambolic tendencies |\
							wispily resonant distortion |\
							wicked ragga-bashment flava |\
							waves of <electro-acoustic-syn> static",

"<structure-description>":  "<structure-description-01> | <structure-description-02>",

"<the-synth-drones-Klaus>": 	"\
								 the ambivalent harmonic parallelism of Claude Debussy |\
								 the atomised acousmatic embodiments of Bernard Parmegiani |\
								 the hyper-mediated guitar washes worthy of Keith Fullerton Whitman |\
								 the disturbingly visceral Klangfarbenmelodie of Hector Berlioz | \
								 the hazy botanical film interludes of Boards of Canada |\
								 the intricately funked syncopations of Autechre or Alva Noto |\
								 the isolationist bleeps of Mika Vainio |\
								 the oneiric dramaturgy of Robert Ashley |\
								 the pointillist dynamics associated with Arnold Schoenberg |\
								 the psychedelic ragas of Pandit Pran Nath |\
								 the spiraling acidic basslines of Josh Wink |\
								 the subdued ferric tones of Kevin Drumm | \
								 the synth drones of Klaus Schulze | \
 								 the wind-chilled electronics of Thomas Köner",

"<song-description-phrase>":	"<adverb> defies categorisation | \
								\
								is an asymmetric, geniusly constructed dancefloor killer | \
								\
								is one of the richest spacial dub constructions ever heard | \
								\
								is a frenzied crescendo of panning stabs and a washed out, chugging backbone that doesn't let up | \
								\
								is a sweet-like-tropical blend of <genre>, <genre> and dubstep | \
								\
								is an 20 minute odyssey into stoner heaven | \
								\
								is as foul-smelling as an oily anal leakage | \
								\
								is pieced together from a plethora of unidentified samples, field recordings and found sounds | \
								\
								is a deep tech-house number, laced with effect throws, percussion solos and dramatic breakdowns | \
								\
								is a dark vocal-house number, laced with moody guitar riffs, layers of percussion and hypnotizing filtered stabs | \
								\
								is an incredible, <adverb> mesmerising sound that will tempt, allure, petrify and utterly mind-f**k you in equal measure | \
								\
								is an uneasy listening experience, <adverb> catapulting the listener with irrepressible spirited contrasts | \
								\
								is a schizophrenic composition, <adverb> and without warning cutting between sparse, low-end tension and thumping organ clusters | \
								\
								is a <sexy-syn> little stomper, yearning to be slowly unravelled, in private, intimate settings after the witching hour | \
								\
								is one of those <epoch> EPs showcasing how versatile <genre> can get | \
								\
								is a mundane and shapeless affair of post-<genre> shenaningans | \
								\
								is a faultless four-part harmony, neatly modulated into <structure-description> | \
								\
								is tired, boring and bereft of ideas | \
								\
								is a <sexy-syn> deployment into a knee-jerk consumerist purgatory | \
								\
								is high grade bass music so intense you can blow-dry your hair right in front of the bass bins | \
								\
								slides out a <genre-adjective> groove of immense proportions | \
								\
								chugs along like a malfunctioning mechanical beast | \
								\
								has critics and fans alike, queuing up to drape compliments over its shiny chassis | \
								\
								has all the claustrophobia of the nastier end of <genre> | \
								\
								suddenly explodes into an unrelenting, glistening wall of discordance, sounding like a thousand church organs screeching out | \
								\
								contains passages of deep melodic beauty. This is unquestionably a journey that is rooted in <J-pop> explorations | \
								\
								functions at the intersection of <structure-description> and <genre> <genre-noun> |\
								\
								dissolves into <lamentable-syn> incoherence, suffused with power and mystery | \
								\
								does not seem to be doing anything special, but the subtlety and intensity eventually worms its way into your heart",

"<reverbs-with-phrase>":	"reverberates with | feels like | strikes one with | resonates with | conjures up  | \
							echoes with | gently throbs with | softly palpitates, with | \
							<rocks-syn> <adverb-terminal> with",

"<verb-phrase-singular>":	"that floats in & out of your <consciousness-syn> with a wool-lined ease | \
							that sits deeply in smoky <genre> style <atmospherics-syn>  | \
							nestled in <a-structure-description> | \
							that drowns out the sound of jaws hitting the <floor-syn> | \
							that <teeters-syn> <genre> <pastiche-syn> | \
							that intentionally loiters around <structure-description>",
						
"<city>": 	"Berlin | London | Paris | Oslo | Moscow | Dublin | Vienna | Budapest | Prague | Istanbul | Athens | Lisbon | \
			New York | Memphis | Los Angeles | Miami | Austin | San Francisco | Montréal | Vancouver | Seattle | Rio | \
			Buenos Aires | Montevideo | Tokyo | Seoul | Ulan Bator | Manila | Bangkok | Kuala Lumpur | Jakarta | Kabul | \
			Jerusalem | Dakar | Cairo | Kingston | Lagos  | Addis Ababa | Abidjan | Kinshasa | Casablanca | Accra | \
			Dar es Salaam | Bamako | Ouagadougou | Mogadishu | Cotonou | Harare",
			
/// "<label>": 	"`getLabel()`",
"<label>": 			"Kompakt | Hyperdub | Tongut  | Soul Jazz | Strictly Rhythm | Defected | \
					  Studio 1 | Nonesuch | Mille-Plateaux  | Force Inc. | Bpitch Control | \
					  Shitkatapult | Warp | The Leaf | Kranky | Thoughtless Music | Sub Pop | \
					  Brainfeeder | Ninja Tune | Def Jux | XL | Cheeky Records | Mute | \
					  Wax Trax! | Planet Mu | Rephlex | Merck",

"<epoch>": 			"British Invasion era | New Wave era | Motown era | Stax/Volt era | \
					MTV era | futurist  | modernist  | postmodernist  | nouveau-realist  |  \
					expressionist  | post-atonal  | atonal  | neo-surrealist  |  \
					twelve-tone serialist | subversive | avant-gardist",

"<year>": 			"1963 | 1969 | 1973 | 1975 | 1977 | 1979 | 1982 | 1984 | \
					1985 | 1986 |1987 | 1988 | 1989 | 1990 | 1991 | 1992 | 1993 | \
					1994 | 1995 | 1995 | 1996 | 1997 | 1998 | 1999 | 2000 | 2001 | \
					2002 | 2003 | 2004",					

<!--"<adverb>":			"`getSynonyms(<adverb-terminal>, "r");` | <adverb-terminal", -->
"<adverb>":				"<adverb-terminal> | <adverb-terminal>",

"<adverb-terminal>":	"brilliantly | astutely | adeptly | robustly | amazingly | carefully | \
						inadequately | abstractly | absurdly | accidentally  | brightly | breathtakingly",

"<adverb-time-terminal>":	"occasionally | sporadically | infrequently | periodically | \
							irregularly | intermittently | frequently | repeatedly | recurrently",

"<consciousness-syn>": "consciousness | mental grasp | attention | cognizance | loaf | mind | perception",

"<lamentable-syn>": "lamentable | pleasurable",

"<floor-syn>": "floor | pavement | concrete | ground",

"<sexy-syn>": "sexy | groovy | kinky | alluring | sultry | slinky | provocative | tantalizing | nubile | bootylicious | erotic |\
				titillating | racy | naughty | X-rated | pornographic | crude | lewd | raunchy | steamy | horny | slick",

"<rocks-syn>": "rocks | shines | shimmers | chugs | drones | sparkles | unnerves | \
				trembles | surprises | startles | sparkles | scintillates",
				
"<Finnish-syn>": "Scandinavian | Nordic | Flemish| Teutonic | Slavic | Baltic | Turkic | Basque | Crimean | Uzbek",

"<J-pop>": "J-pop | K-pop | Hokkien-pop | Cantopop | Mandopop | Pinoy-pop | Shibuya-kei",

"<artist-genre>": 	"`getArtistGenre()` | <genre>",
			
"<genre>": "Future Samba | Fonk Arabic | Digital Zulu | \
			Acid-jazz | Acid Rock | Afrobeat  | Nigerian Apala  | \
			Avant-jazz  | Avant-metal | Avant-punk | Bachata  | Baile Funk | \
			Balinese Gamelan  | Miami bass | Booty bass | Batucada  | \
			Bhangragga | Bhangramuffin | Big Beat | Bohemian Dub | \
			Bossa nova |  Breakbeat  | Breakcore  |  Britfunk | Britpop | Broken-beat  | \
			Bubblegum pop  |  Bikutsi  |  Canto popular  | Chiptune |\
			Cantopop  | Capoeira  | Carnatic music | Cello rock | \
			Chemical breaks | Chicago house | Chimurenga | Clicks 'n' Cuts |  \
			Compas meringue  | Cumbia  | Cybergrind | Dancehall | \
			Darkcore  | Darkwave | Delta blues | Deep house | Detroit techno  | Digital hardcore |  \
			Diva house | Doo wop | Downtempo | Drone  | Drum & bass | \
			Dub Techno | Dubtronica | Dubstep | E-Grind | Electroclash | Electropop | \
			Emo | Eurodance | Europop | Flamenco  | \
			Folktronica | Free-jazz | Freestyle | Funky house | \
			Gangsta rap  | Ghettotech |  Glam-punk | Glitch | \
			Gregorian chant | Grime  | Grunge | \
			\
			Transylvanian wedding music | Happy hardcore | Hard house | Hi-NRG | \
			Highlife | Hiplife | Hip-hop | Hip-pop | Hindustani classical | Honky tonk | Horror-punk | \
		    Hyphy | Illbient | Indietronica | Italo Disco | \
			J-Pop  | Jesus-music | Jitterbug | Jive | Nigerian Juju | Jumpstyle | Jungle | Kamba pop | Karaoke | Balinese monkeychant | \
			Gypsy dance music  | Krautrock |  Swedish folk| \
			Kwaito | Kwassa kwassa | Latin-jazz | Tibetan opera | Lovers rock | \
			Makossa | Makossa-soukous | Mariachi | \
			Mbalax | Mbaqanga | Memphis blues | \
			Mento | Minimal techno  | Musique concrete | Serbian Folk | \
			Neo-Psychedelia | Neo Soul | Neue Volksmusik | New Age | New Jack Swing  | \
			New Orleans blues | US Garage | Nintendocore | Noise music  | Nordic folk | \
			Nortec  | Nu breaks | Yakut epic music | P-Funk | \
			Palm wine sound  | Nepalese wedding music | Keralan Panchavadyam | Parisian soukous | \
			Afro-Venezuelan Parranda | Pennywhistle jive | \
			Greenlandic folk | Pixiefunk  | Thai protest rock |  \
			Pornocore | Colombian big band | \
			Protopunk | Psychedelic trance | Psychobilly | Psychosomatic trance | \
			Psych-pop | Punk-funk | Punk-rock | Sufi devotional music | Raggamuffin | \
			Ragga-zouk | Ragtime | Reggaeton | Finnish Rekilaulu | \
			Rhythm & Blues | Icelandic Rímur | Bajan Soca | \
			Rock opera | Rockabilly | Rocksteady | Rodeo music | Hausa Rokon fada| Roots reggae | Rumba |  \
			Cuban Rumba | Cuban Rumba | \
			Ska-punk | Skate-punk | Skronk | \
			Hawaian Kihoalu | Smooth-jazz | Soukous | Soul-jazz | \
			Space age pop | Space rock | Speedcore | Speed garage | Stoner rock | \
			Surf rock | Swamp blues | Tuvan Throat Singing | Synthpop | \
			Texas blues | Thrashcore | Guinean Tinga | Tribal house | \
			Basque Accordion music | Trip-hop | Tumba | Turntablism | Two-tone | UK garage | \
			Vaudeville | Hungarian Verbunkos  | Vocal house | \
			Wassoulou | Spanish operetta | Greek Zeibekiko  | \
			Ziglibithy | Zouglou | Zouk | Zydeco"
			
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

labelYearGrammar = { 

"<start>": "<label>, <year>",
			
"<label>": 			"Kompakt | Hyperdub | Tongut  | Soul Jazz | Strictly Rhythm | Defected | \
					 Studio 1 | Nonesuch | Mille-Plateaux  | Force Inc. | Bpitch Control | \
					 Silent Season | Zero G Sounds | 12k | Hefty Records | Echocord | \
					 Smallfish | Modern Love | Modelisme Records | Styrax Leaves | echospace [detroit] | \
					 Fatsouls Records | Native State Records | Leena Music | Kesh Recordings | \
					 Ghost Sounds | ~scape | Karloff | Cadenza | Background Records | Epsilonlab | \
					 Dispensation Records | Skor Records | Noir Music | Renaissance Infinity Recordings | \
					 Nau | Compost Records | Argon | Dub Police | Not On Label | Adjunct Digital | \
					 Headinghome Recordings | Archipel | Trapez | Orac Recordings | Deep Night Essentials | \
					 Poker Flat Recordings | Spectral Sound | Morris / Audio | Logistic Records | \
					 Revolver Recordings | Thug Records | Component Records | Skunk Records | \
					 Bugged Out! Recordings | High On Rhythm Records | AM:PM | Southern Fried Records |\
					 Twisted America Records | Hand On The Plow | Moonshine Music | Trax Records | \
					 Shitkatapult | Warp | The Leaf | Kranky | Thoughtless Music | Unfoundsound | \
					 Ritornell",
					  
"<year>": 			"1984 | 1997 | 1999 | 2001 | 2003| 2008 | 2009 | 2011 | \
					2013 | 2014 |2014 | 2014 | 2013 | 2014 | 2013 | 2014 | 2014 | \
					2013 | 2014 | 2015 | 2015 | 2014"
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
