////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// A Context-Free grammar for Generative Music Criticism by iroro 
// V0.1 2009.11.06 (Processing, unreleased)
// V0.2 2013.01.15 (Javascript)
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

reviewGrammar = { 

"<start>": "<artist-phrase>. | <artist-phrase>. <interjection>",

///////  
/// "<artist-phrase>": " <artist-descriptive-phrase> | <music-recording-phrase> | <artist-action-phrase>",
"<artist-phrase>": "The <time-adjective> <music-recording-noun> by <artist> is a <retro-syn> <reconstruction-syn> of \
					<genre> <balladry-syn> that <teeters-syn> <genre> <pastiche-syn>",
		
///////  
"<artist-action-phrase>": "\
		\
		1 Few artists are this <adept-syn> at wringing so much <ferocity-syn> from their laptops, yet the \
		<time-adjective> <music-recording-noun> by <artist> <adverb-terminal> blends <structure-description> and <structure-description> | \
		\
		2 <artist> and <static-artist> take on the <label> crew for another <music-recording-noun>, demonstrating <structure-description> and a \
		<creative-syn> <ferocity-syn>, that <verb-phrase-singular> | \
		\
		3 Your mind is about to be blown by the unearthing of a <year> curio from <artist>, offering a truly <bizarre-syn>, \
		but ultimately <adept-syn> selection of privately-pressed tracks that sound somewhere between <genre> and <genre> | \
		\
		4 Your mind is about to be blown by the unearthing of a <year> curio from <artist>, showing off <structure-description>, \
		<while-syn> <adverb-time-terminal> <gerund-song-phrase> | \
		\
		5 The songwriting <ferocity-syn> <exhibited-syn> by <artist> <raises-goosebumps-syn>, showing off <structure-description>, \
		dwarfing the <structure-description> of many better known artists | \
		\
		6 The songwriting <ferocity-syn> <exhibited-syn> by <artist> <wrenches-syn> ideas from <genre>, <genre> and <genre>, \
		crafting sidewinding <derangements-syn> that blend <structure-description> and <structure-description> | \
		\
		7 The ascendant <ferocity-syn> of <artist> is on display again, showing off <structure-description>, \
		<while-syn> <adverb-time-terminal> <gerund-song-phrase> | \
		\
		8 The musical <ferocity-syn> of <artist> invokes states of psychological <panic-syn> that will resonate \
		beyond experimental <genre> circles, into the <daily-lives-syn> of <genre> fans",

///////  
"<artist-descriptive-phrase>": "\
		\
		9 The <creative-syn> <ferocity-syn> <exhibited-syn> by <artist> <artist-description-phrase> | \
		\
		10 The <creative-syn> <ferocity-syn> <exhibited-syn> by <artist> <adverb> elevates <genre> sophistication with <genre-adjective> <genre> <genre-noun> | \
		\
		11 The <creative-syn> <ferocity-syn> <exhibited-syn> by <artist> <adverb> hoists up the profile of screeched-out <genre> vocals and <structure-description> | \
		\
		12 The <creative-syn> <ferocity-syn> <exhibited-syn> by <artist> <join-phrase> <genre> with \
		<structure-description>, <evocative-adjective> of <the-synth-drones-Klaus> | \
		\
		13 The <creative-syn> <ferocity-syn> <exhibited-syn> by <artist> <join-phrase> <structure-description> \
		with <structure-description> | \
		\
		14 The <creative-syn> <ferocity-syn> <exhibited-syn> by <artist> tenuously welds a growing amalgam of \
		contradictions and genre experiments with a veneer of <ferocity-syn>, <ferocity-syn> and Fonzie cool",

///////  		
"<music-recording-phrase>": "\
		\
		15 The <time-adjective> <music-recording-noun> by <artist> <song-description-phrase>. \
		It <rocks-syn>, <adverb-time-terminal> <gerund-song-phrase> | \
		\
		16 The <time-adjective> <music-recording-noun> by <artist> <reverbs-with-phrase> <a-structure-description>. \
		It <song-description-phrase>, yet its essence <song-description-phrase> | \
		\
		17 The <time-adjective> <music-recording-noun> by <artist> <reverbs-with-phrase> <a-structure-description>. \
		It <song-description-phrase>, yet its essence is <evocative-adjective> of <epoch> music enjoyed in <city> | \
		\
		18 The <time-adjective> <music-recording-noun> by <artist> taps into a delicate, \
		<genre-adjective> corner of the musical universe, <while-syn> <adverb-time-terminal> <gerund-song-phrase> | \
		\
		19 The <time-adjective> <music-recording-noun> by <artist> is a masterclass in the dark art of <genre>, \
		showing off <structure-description> <while-syn> <adverb-time-terminal> <gerund-song-phrase>",		

///////  		
"<artist>": 	"`getHotttArtists()`",

"<static-artist>": 	"Madonna | Prince | Bono | Salif Keita | Baaba Maal | Femi Kuti ",

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


"<retro-syn>": "retro | modern | ",

"<balladry-syn>": "balladry | poetry | lyricism | fusion",  

"<genre-noun>": "landscapes | ephemera | futurism | classicism | sensibilities  | sophistication",

"<pastiche-syn>":  "pastiche | sophistication | appropriation | \
					eclecticism | revivalism | futurism | classicism | polystylism | post-structuralism | \
					plagiarism | \
					ephemera | miscellany | miscellanea | style arrangements | \
				   	detritus | flotsam | chaos | simulacrum",

"<teeters-syn>": "teeters on the <edge-syn> of | \
				 dabbles in | fiddles with | flirts with",

"<edge-syn>": 	"edge | brink | fringes", 

"<reconstruction-syn>": "reconstruction | emulsion |  modulation | inflection | \
						rewriting | rescripting | commingling ",


"<panic-syn>": "panic | terror | lust | horror | hysteria | agitation | dread | malaise | discomfort | unease | discontent",

"<experimental-syn>": "experimental | avant-garde | new wave | vanguard",

"<circles-syn>": "circles | milieux | spaces | hangouts",

"<daily-lives-syn>": "daily lives | quotidian | everyday | daily routine | day-to-day",

"<bizarre-syn>": "bizarre | odd | offbeat | curious | peculiar | unusual | extraordinary | brilliant",

"<adept-syn>": "adept | skilled | masterful | deft | dexterous | brilliant",

"<exhibited-syn>": "exhibited | displayed | manifested | shown | demonstrated | expressed",

"<while-syn>": "while | whilst | all the while",

"<derangements-syn>": "derangements | arrangements",

"<creative-syn>":	"sonic | tasteful acoustic | creative | musical | novel musical | fresh melodic | stirring acoustic | visionary sonic | \
					trendy musical | stylish sonic | refined | magnificent musical",
					
"<wrenches-syn>": "wrenches | plucks | wrests | snatches | prys | pulls | borrows",

"<ferocity-syn>": 	"ferocity | courage | charisma | cowardice | nerve | \
					stoutheartedness | endowment | dauntlessness | savagery | genius | \
					furiousness | violence |  wildness | severeness | \
					simplicity | accessibility | straightforwardness | comprehensibility | \
					unpretentiousness | naturalness | clarity | spareness | austerity | \
					effortlessness | affectation | pretentiousness | posturing | \
					mulishness | recalcitrance",

// soul-stirring generosity | thick-skulled excess | transcendant drama

"<plains-syn>": 	"plains | savannahs | steppes | tundras | velds | pastures | vales",

"<electro-acoustic-syn>":  "electro-acoustic | 8-bit | Illbient | Nintendocore | ambient | shoegazey",

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

"<interjection>": 	"This is a crucial release! | Most excellent! |  Utterly astounding! | Somewhat mind-blowing! | \
					Jaw-dropping! | Breathtaking! | This is gripping sh*t! | Frankly intoxicating! | \
					Rousing material! | Electrifying! | Most-definitely heady! | A modern compositional masterpiece! | \
					Miss out at your peril! | Seriously? | Wow! | Bitchin'! | Hearing is believing! | Yikes! | \
					A riveting experience! | Simply a vital release! | Solid. | Happy listening!",

"<music-recording-noun>":	"12” wax | MP3 | home-made cassette | CD | album | 4-track cartridge | \
							live-stream | laserdisc | DVD-R | EP | ogg-vorbis download | maxi-single | Bandcamp release | \
							ambisonic release | white-label | release | Spotify exclusive | Beats Music special | Rdio exclusive\
							17-track compilation | Soundcloud (teaser clip) | promo | youtube video | 7” vinyl | box set | \
							Mixcloud set | Myspace track | unplugged session | Google Hangout | music video | 27-track anthology",

"<time-adjective>":	"latest | most recent | newest | current | currently charting | recently dropped | forthcoming",

"<genre-adjective>": 	"quotidian | commonplace | slippery | fragmented | punctured | wispy | atmospheric | \
						smudged | obscure  | delicate | exquisite | silky and sweet | unsteady | fractured | \
						mangled | indifferent | shattered | otherworldly | disenchanted | sadder and wiser | \
						sophisticated",
						
"<gerund-song-phrase>": 	"marrying <genre> from the <epoch> period with <structure-description> | \
							meandering around a plucked melody that <verb-phrase-singular> |	\
							sounding like <static-artist> in a skank off, after inhaling a canister of nitrous oxide | \
							blurring the boundaries between <structure-description> and <structure-description> | \
							eschewing the familiar palimpsest of credible <genre> <genre-noun> | \
							injecting hints of <genre> patterns into <genre> | \
							letting in shards of light and sumptuous colours painted through snippets of <genre> | \
							propelling ethereal glitching rhythms across <plains-syn> of elaborately fashioned <electro-acoustic-syn> static | \
							wielding Detroit shuffles à la Theo Parrish | \
							brushing its rhythms with a cool sleight of hand that is still utterly breathtaking | \
							eschewing the usual formulaic pitfalls | \
							spinning a collection of understated string and piano elegies | \
							veering off on solo tangents of enchanted ambient abstraction | \
							functioning through the frosted lens of physical Finnish stoicism | \
							revolving about achingly well-formed shuffle patterns | \
							whining and squealing like a farmyard animal in the pangs of labour | \
							ricocheting gunshots off grimy bassline warps | \
							employing classically staggered harmonic progressions | \
							riding rock hard subbass depth charges | \
							creating atmospheric pressure drops sharp enough to give lesser experienced divers the bends | \
							skittering back to post-Autechre beat deconstructions | \
							exhibiting tearjerking, suckerpunching, piano-meets-strings melancholy | \
							dripping with endless reverb and delay manipulation | \
							trawling the depths of vinyl's pockmarked grooves | \
							collapsing beneath the dead-eyed twinkle of the disco ball | \
							melting <genre> accordion and Diwali-riddim claps with woozy <electro-acoustic-syn> static |\
							exhibiting an intensely overbearing darkness, covered by a fuzzy thicket of layered drones",

"<genre>": "Future Samba | Fonk Arabic | Digital Zulu | 2-step garage  | 8-bit | \
 	Acid Jazz | Acid Rock | Afrobeat  | Nigerian Apala  | Arabesque | Avant-garde jazz  | Avant-garde metal  | \
 	Avant-punk | Bachata  | Baile Funk | Balinese Gamelan  | Bambuco  | Baroque  | Miami bass | Booty bass | Batucada  | \
 	Beatboxing  | Bebop  | Bhangra  | Bhangragga | Bhangramuffin | Big Beat | \
 	Bluegrass  | Blues  |  Bitpop  | Bocet | Bohemian Dub | Bolero  | Bomba | \
 	Bombay pop | Bongo  |  Bossa nova |  Breakbeat  | Breakcore  |  Britfunk |  Britpop | Broken-beat  | \
 	Bubblegum pop  |  Bikutsi  | Calypso  |  Canto popular  | \
 	Cantopop  | Capoeira  | Carnatic music | Cello rock | Cha-cha-cha | Chamber music | \
 	Chemical breaks | Chicago house | Chicken scratch | Chillout | Chimurenga | Clicks 'n' Cuts |  \
	Compas meringue  | Country | Cowpunk | Crunk  | Cumbia  |  	Cybergrind | Dancehall | \
 	Darkcore  | Darkwave | Death metal | Delta blues | Deep house | Detroit techno  | Digital hardcore |  \
	Disco | Diva house | Doo wop | Doom metal | Downtempo | Drone  | Drum and bass | \
	Dub | Dub Techno | Dubtronica | Dubstep | E-Grind | Easy listening | Electro | Electroclash | Electropop | Muzak | \
 	Emo | Eurodance | Europop | Experimental noise | Fandango  | Flamenco  | \
 	Folk | Folktronica | Forró  | Free jazz | Freestyle | Fuji | Funk | Funky house | G-funk | Gaikyoku | \
 	Gamelan  | Gangsta rap  | Gavotte | Gharnati | Ghettotech |  Glam punk | Glitch | Gnawa | \
 	Goa | Gospel | Gothic | Gregorian chant | Grime  | Grunge | Habanera  | \
	Transylvanian wedding songs (Hajnali) | Happy hardcore | Hard house | Heavy metal | Hi-NRG | \
 	Highlife | Hiplife | Hip hop | Hip-pop | Hindustani classical music | Honky tonk | Horror punk | \
 	House | Hyphy | Illbient | Indietronica | Indie rock | Industrial  | IDM  | Italo Disco | \
 	J-Pop  | Jazz | Jesus music | Jitterbug | Jive | Nigerian Juju | Jumpstyle | Jungle | Kamba pop | Karaoke | Balinese monkeychant (Kecak) | \
 	Gypsy dance songs (Khelimaski djili) | Krautrock |  Kulning (Swedish folk songs) | \
 	Kveding (Traditional Norwegian songs) | Kwaito | Kwassa kwassa | Latin jazz | Lhamo (Tibetan opera) | Lovers rock | Luhya omutibo | \
	Luk grung (Popular Thai music) | Makossa | Makossa-soukous | Mambo | Mariachi | \
 	Marimba  | Math rock | Mbalax |	Mbaqanga (Township Jive) | Memphis blues | \
 	Mento | Merengue | Mineras | Minimal techno  | Modinha | Motown | Musique concrete | Muzak  | Narodna muzika (Serbian Folk) | \
 	Neo-Psychedelia | Neo Soul | Neue Volksmusik | New Age | New Jack Swing  | \
 	New Orleans blues | New Orleans jazz | US Garage | Nintendocore | Noise music  | Nordic folk | \
 	Nortec (Electronic style from Tijuana) | Nu breaks | Oldies | Olonkho (Yakut epic songs) | Opera  |  \
	Orovela (Eastern Georgian work songs) | P-Funk | Paisley Underground  | \
 	Palm wine sound  | Panchai baja (Nepalese wedding music) | Panchavadyam (Temple music from Kerala) |  Parisian soukous | \
 	Parranda (Afro-Venezuelan form) | Pennywhistle jive | Phleng luk tung | Piedmont blues | \
 	Pisiq (Greenlandic folk song) | Pixiefunk  | Pleng phua cheewit (Thai protest rock) | Poco-poco  | Polka |  \
	Pop rai |  Pornocore | Porro (Colombian big band) | \
 	Progressive house | Protopunk | Psychedelic trance | Psychobilly | Psychosomatic trance | \
 	Psych-pop | Punk funk | Punk rock | Qawwali (Sufi religious music) | Raggamuffin (Ragga) | Ragga-soca | \
 	Ragga-zouk | Ragtime | Rai  | Rap | Rave | Reggae | Reggaeton | Rekilaulu (Finnish rhyming sleigh songs) | \
 	Rhythm & Blues | Rímur (Icelandic epic songs) | Ring Bang (Barbadian Soca) | \
 	Rock | Rock opera | Rockabilly | Rocksteady | Rodeo music | Rokon fada (Hausa court music) | Roots reggae | Rumba |  \
	Yambu (Cuban Rumba) | Guaguanco (Cuban Rumba) | Salsa  | Samba | Saya (Bolivia) | Serialism | Shango | \
 	Shoegaze | Showtunes | Siguiriyas | Ska | Ska punk | Skacore (Third wave) | Skate punk | Skronk |  \
	Kihoalu (Hawaian Slack-key guitar) | Smooth jazz | Soca | Soft rock | Soukous | Soul jazz | Southern Gospel | \
 	Southern rock | Space age pop | Space rock | Speedcore | Speed garage | Spirituals | Stoner metal | Stoner rock | \
 	Surf rock | Swamp blues | Swing | Sygyt (Tuvan Throat Singing)  | Synthpop | Tango  | Tech House | Techno | Teen pop |  \
	Texas blues | Thillana (South India) | Thrashcore | Thrash metal | Tinga | Trance | Tribal house | \
 	Trikitixa (Basque Accordion music) | Trip-hop | Tumba | Turntablism | Two tone | UK garage | \
 	Vaudeville | Verbunkos (Hungarian folk music) | Verismo | Vocal house | Waila (Chicken Scratch)  | \
 	Waltz | Wassoulou | Western swing | Xhosa | Zarzuela (Spanish operetta) | Zeibekiko (Greek Dance 9/8 Rytmus) | \
 	Ziglibithy | Zolo (Hyper Bitchy rhythms) | Zouglou | Zouk  |  Zydeco",

"<a-structure-description>":   "a pure, transcendental rave feeling | \
								a bubbly pop appreciation | \
								a mindblowing dubscape of effects | \
								a persistent undulating pulse of bass | \
								a cacophany of autistic rhythms | \
								a fragrant, effortless warmth | \
								a deluge of piano flecked gems | \
								a veneer of melancholy |  \
								a low key, grotty jakbeat |\
								a growing amalgam of contradictions |  \
								a blistering feast of distortion | \
								a feast of noise-rock virtuosity | \
								a veritable haberdashery of exquisitely vintage musical textures | \
								a Flying Lotus-style bass reduction |  \
								a dense, effulgent piece of faux-romantic orchestral syrup | \
								an indisposable slice of <genre> delectability | \
								a dark, haunted melancholy | \
								an eerily impeccable falsetto | \
								a super platter of UK bass dreadnaughts | \
								an alchemical blend of post-rave <genre> electronics",

"<structure-description>": "adventurous, non-linear constructions | \
							aerated electronic timbres | \
							alien analogue tones | \
							arcing sinewaves | \
							avant-garde chamber instrumentations | \
							assorted disembodied voices | \
							bass frequencies turned to jellied slush | \
							blistering, earlobe gatecrashing breakbeats | \
							beautifully tempered zones of twilight ambient  | \
							breakneck tempos | \
							breathtaking constellations of de-glazed rhythms | \
							acid house effusions turned hardcore breakbeat | \
							cinematic string samples of the Caretaker variety |  \
							cassette tape overdubs | \
							chugging machinations | \
							dense analogue experiments | \
							digitally dissected orchestral figures | \
							devastatingly heavy <genre> mutations | \
							dexterous skanking movements | \
							dancefloor skimming subbass |\
							distorted crescendos | \
							dark careening tones from bright, queasy synthesizers | \
							dense thickets of digitally applied crackle | \
							dramatic percussive interjections | \
							dread techno futurisms | \
							myriad drum-machine pattern-permutations | \
							deep, rustic darkness |  \
							exothermal synthlines | \
							electronic squiggles | \
							expertly manipulated rhythm alchemies  | \
							early handmade experiments | \
							endlessly arpeggiated chords | \
							enigmatic psychedelics |\
							enunciated consonants | \
							European technical execution | \
							fat skronked basslines under <genre-adjective>, minimal percussion | \
							febrile rhythm mechanics | \
							freaky blips |\
							flickering syncopations | \
							flanged, delayed beats | \
							forward thinking, phantasmic dub | \
							foggy northern European drone-scapes |  \
							flickering electronic rhythm sections | \
							floppy fringe harmonies | \
							fuzzy shoegaze psychedelia | \
							gender-bending vocals | \
							gloriously wild natural timbres | \
							grim, crust-laden darkness | \
							glacially paced gothic stoner rock | \
							hazy washes of reverbed harps | \
							hazy synthetic electronical embellishments |  \
							hi-scoring aquakrunk madness | \
							head-pressurised technohouse vibes	| \
							hyper-prismic agitated synthlines | \
							hyper-lean <genre> geometries | \
							hummable melodies |\
							heavy rolling dancehall grinders |  \
							haunted-house analogue tactics |  \
							hazily buoyant, ethereal female vocals | \
							intricately funked syncopations | \
							inimitably raw, psychedelic wow-and-flutter beats | \
							kosmische pulsations |\
							layered embers of sound | \
							layered spaciousness | \
							lush Detroit chords |\
							lysergic trumpet lines panned to infinity  |  \
							modern amorphous psychedelia |	 \
							magnificently evocative, mercilessly deep, tweaked out, post-rave ecstasy | \
							majestic cloud-like structures of droning synth tones | \
							massively modulated vocal treatments |\
							mutant fractal loops | \
							narcotic drag vocals | \
							narcotic keys |  \
							overheated arcade game melodies | \
							oblique hi-end processing | \
							orchestral level pomp & bombast |  \
							paranoid <genre> mutations | \
							post-pop slacker tendencies | \
							pirouetting blips |\
							psychedelic rhythm manipulations |  \
							pure Balearic house bliss | \
							relentless raindance drums |\
							rootsy one-drop dub keys |  \
							rising, haunting strings | \
							roiling bass |\
							reverberant, quivering sustains | \
							rousing mini-orchestral swells | \
							rippling xylophonics | \
							stoned post-punk guitar strokes | \
							shoegazy opiates |\
							spherical bell tones | \
							sticky, wriggly electro influences | \
							soft, smoky sax lines | \
							slinking garage syncopations | \
							slicing guitar stabs  |\
							spare, flinty embers  |\
							supple subbass wobbles | \
							subtly plush synth embellishments | \
							sumptuous Chicago house reductions | \
							semi-organic gristle |\
							sea-sick rhythms | \
							symphonic droning | \
							stringently reduced techno |  \
							sinister Euro-porno soundtracks | \
							somnolent, spectrally sifted chorales |\
							spectrally sifted electronics | \
							spacious Balearic keys |  \
							seriously dextrous rhythm section arrangements | \
							soporific ambiences | \
							slurred articulations |  \
							swaying basslines |\
							sculpted rhythm dynamics |\
							synaesthetic ecstasy |  \
							shuffling, '60s West Coast sounds | \
							spleen-crushing bass | \
							smudged sonic brushstrokes |\
							steely, speaker-destroying dub techno | \
							shuddering, breakbeat-fueled <genre> | \
							Scandinavian machine music | \
							<sexy-syn> dancehall minimalism |\
							tantalising, mercurial motifs |\
							tortured saxophone emissions | \
							textural guitar-scapes | \
							thickets of soupy electronic fog |\
							tranquil, free-floating chorales |\
							utterly sick digital spasms | \
							unfathomably complex textures | \
							uncharacteristically spry tempos | \
							unfathomably deep, utterly sick, dubwise textures | \
							pre-digital era, malaria-infected, vintage radio essences | \
							vocodered 808s, paired with acid belching 303s |\
							wonderfully shambolic tendencies | \
							wispily resonant distortion | \
							whinnying ghoulish cries | \
							wicked ragga-bashment flava |  \
							waves of static",

"<the-synth-drones-Klaus>": 	"the synth drones of Klaus Schulze | \
								 the wind-chilled electronics of Thomas Köner |\
								 the atomised acousmatic embodiments of Bernard Parmegiani |\
								 the pointillist dynamics associated with Arnold Schoenberg |\
								 the oneiric dramaturgy of Robert Ashley |\
								 the disturbingly visceral Klangfarbenmelodie of Hector Berlioz | \
								 the intricately funked syncopations of Autechre or Alva Noto",

"<artist-description-phrase>": 	"<adverb> defies categorisation | \
								demonstrates an innate grasp of the sublime qualities of <genre>  | \
								makes for an uncommonly good performance that <verb-phrase-singular> | \
								compliments credible <genre> <genre-noun> with a mighty doublepack of deadly bass variations that <verb-phrase-singular> | \
								<writhes-syn> <adverb> with overdriven intensity and deeply sinister undercurrents | \
								tries to solve an inherently under-constrained musical problem with <structure-description>|\
								tries to make sense out of a 3D sonic world using <structure-description> that are <adverb> two-dimensional",
								// mournful, desolate lyrics",

"<writhes-syn>":	"writhes | squirms | wriggles | thrashes | flails | tosses and turns",

"<join-phrase>": 	"marries | fuses | blends | marries | merges | mixes | unifies | intermingles | melds | joins",

"<evocative-adjective>":	"evocative | suggestive | reminiscent | \
							<adverb-terminal> evocative | <adverb-terminal> suggestive | <adverb-terminal> reminiscent",
						
"<city>": 	"Berlin | London | Paris | Oslo | Moscow | Dublin | Vienna | Budapest | Prague | Istanbul | Athens | Lisbon | \
			New York | Memphis | Los Angeles | Miami | Austin | San Francisco | Montréal | Vancouver | Seattle | Rio | \
			Buenos Aires | Montevideo | Tokyo | Seoul | Ulan Bator | Manila | Bangkok | Kuala Lumpur | Jakarta | Kabul | \
			Jerusalem | Dakar | Cairo | Kingston | Lagos  | Addis Ababa | Abidjan | Kinshasa | Casablanca | Accra | \
			Dar es Salaam | Bamako | Ouagadougou | Mogadishu | Cotonou | Harare",
			
"<label>": 			"Kompakt | Hyperdub | Tongut  | Soul Jazz | Strictly Rhythm | Defected | \
					  Studio 1 | Nonesuch | Mille-Plateaux  | Force Inc. | Bpitch Control | \
					  Shitkatapult | Warp | The Leaf | Kranky | Thoughtless Music | Unfoundsound",

"<epoch>": 			"British Invasion era | New Wave era | Motown era | Stax/Volt era | \
					MTV era | futurist  | modernist  | postmodernist  | nouveau-realist  |  \
					expressionist  | post-atonal  | atonal  | neo-surrealist  |  \
					twelve-tone serialist | subversive | avant-gardist",

"<year>": 			"1963 | 1984 | 1945 | 1986 | 2003| 1988 | 1982 | 1971 | \
					1983 | 1954 |1995 | 1986 | 1987 | 1967 | 1992 | 1962 | 1965 | \
					1973 | 1994 | 1985 | 1976 | 1999",					

<!--"<adverb>":			"`getSynonyms(<adverb-terminal>, "r");` | <adverb-terminal", -->
"<adverb>":				"<adverb-terminal> | <adverb-terminal>",

"<adverb-terminal>":	"brilliantly | astutely | adeptly | robustly | amazingly | carefully | \
						inadequately | abstractly | absurdly | accidentally  | brightly | breathtakingly",

"<adverb-time-terminal>":	"occasionally | sporadically | infrequently | periodically | \
							irregularly | intermittently | frequently | repeatedly | recurrently",

"<song-description-phrase>":	"<adverb> defies categorisation | \
								slides out a <genre-adjective> groove of immense proportions | \
								\
								chugs along like a malfunctioning mechanical beast | \
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
								has critics and fans alike, queuing up to drape compliments over it's shiny chassis | \
								\
								is a deep & dark tech-house number, whose B-side remix, takes it deeper, adding effect throws, percussion solos and dramatic breakdowns | \
								\
								is a deep & dark blues-house number, whose ragingly infectious vocals are laced with moody blues guitar riffs, layers of percussion, hypnotizing filtered stabs and the obligatory driving bass line | \
								\
								is an incredible, <adverb> mesmerising sound that will tempt, allure, petrify and utterly mind-f**k you in equal measure | \
								\
								is an uneasy listening experience, <adverb> catapulting the listener with irrepressible spirited contrasts | \
								\
								suddenly explodes into an unrelenting, glistening wall of discordance, sounding like a thousand church organs screeching out | \
								\
								has all the claustrophobia of the nastier end of <genre>, though within the unearthly racket, still maintains an uplifting optimism | \
								\
								contains passages of deep melodic beauty. This is unquestionably a journey that is <adverb> rooted in atonal explorations | \
								\
								is a schizophrenic composition, <adverb> and without warning cutting between sparse, low-end tension and thumping organ clusters | \
								\
								is a <sexy-syn> little stomper, yearning to be slowly unravelled, in private, intimate settings after the witching hour | \
								\
								is one of those <epoch> EPs showcasing how versatile <genre> can get | \
								\
								is high grade bass music so intense you can blow-dry your hair right in front of the bass bins | \
								\
								does not initially seem to be doing anything special, but the subtlety and intensity eventually worms its way into your heart",

"<reverbs-with-phrase>":	"reverberates with | feels like | strikes one with | resonates with | resonates beyond | \
							echoes with | gently throbs with | softly palpitates, with | \
							<adverb-terminal> <rocks-syn> with",

"<verb-phrase-singular>":	"floats in & out of your <consciousness-syn> with a wool-lined ease | \
							sits deeply in smoky <genre> style atmospherics  | \
							is nestled in <a-structure-description> | \
							drowns out the sound of jaws hitting the <floor-syn>",

"<verb-phrase-plural>":  	"<plural-subject-song-verb> with <structure-description> and <structure-description> | \
							float in & out of your <consciousness-syn> with a wool-lined ease | \
							sit deep in the smoky <genre> style atmospherics   \
							simply drown out the sound of jaws hitting the <floor-syn>", 

"<consciousness-syn>": "consciousness | mental grasp | awareness | attention | cognizance | loaf | mind | perception ",

"<floor-syn>": "floor | pavement | concrete | ground",

"<sexy-syn>": "sexy | groovy | alluring | sultry | slinky | provocative | tantalizing | nubile | bootylicious | erotic |\
				titillating | racy | naughty | X-rated | pornographic | crude | lewd | raunchy | steamy | horny | slick | red-hot",

"<plural-subject-song-verb>":  "rock | shine | shimmer | chug | drone | sparkle | unnerve | tremble | surprise | startle | sparkle | scintillate",

"<rocks-syn>": "rocks | shines | shimmers | chugs | drones | sparkles | unnerves | \
				trembles | surprises | startles | sparkles | scintillates"

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
					 Shitkatapult | Warp | The Leaf | Kranky | Thoughtless Music | Unfoundsound",
					  
"<year>": 			"1984 | 1997 | 1999 | 2001 | 2003| 2008 | 2009 | 2011 | \
					2013 | 2014 |2014 | 2014 | 2013 | 2014 | 2013 | 2014 | 2014 | \
					2013 | 2014 | 2015 | 2015 | 2014"
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
