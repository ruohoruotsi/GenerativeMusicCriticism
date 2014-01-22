////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// A Context-Free grammar for Generative Music Criticism by iroro 
// V0.1 2009.11.06 (Processing, unreleased)
// V0.2 2013.01.15 (Javascript)
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

reviewGrammar = { 

"<start>": "<artist-phrase>. | <artist-phrase>. <interjection>",

"<artist-phrase>": "The forthcoming <music-recording-noun> by <artist> taps into a delicate, \
<genre-adjective> corner of the musical universe, all while <adverb-time-terminal> <gerund-song-phrase> | \
\
The <artist-descriptive-noun> <artist-verb-past-tense> by <artist> <artist-description-phrase> | \
\
The <artist-descriptive-noun> <artist-verb-past-tense> by <artist> <join-phrase> <genre> with \
<structure-description>, <evocative-adjective> of <time> music played in <city> | \
\
The <artist-descriptive-noun> <artist-verb-past-tense> by <artist> <join-phrase> <structure-description> \
with <structure-description> <evocative-adjective> of <time> era sounds| \
\
The <time-adjective> <music-recording-noun> by <artist> is <adverb> <genre-adjective>. \
It <singular-subject-song-verb>, while <adverb-time-terminal> <gerund-song-phrase> | \
\
The <time-adjective> <music-recording-noun> by <artist> <verb-phrase> <adverb> <genre-adjective>. \
It <song-description-phrase>, yet its essence <song-description-phrase> | \
\
The <time-adjective> <music-recording-noun> by <artist> <verb-phrase> <adverb> <genre-adjective>. \
It <song-description-phrase>, yet its essence is <evocative-adjective> of <time> music played in <city> | \
\
The ascendent talent of <artist> is on display again this year, showing off <structure-description>, all while channelling \
<adverb> <genre-adjective> grooves, <adverb-time-terminal> <gerund-song-phrase> | \
\
Not many artists are this adept at wringing emotion from their laptops, yet the introductory track by \
<artist> provides an instantly breathtaking blend of <structure-description> and <structure-description> | \
\
<artist> and <artist> take on the <label> crew for another strictly limited vinyl pressing, a pair of sick twelve inches that <verb-phrase-plural>",

"<artist>": 	"`getHotttArtists()`",

"<artist-descriptive-noun>": "<music-adjective-terminal> <artist-descriptive-noun-terminal>",

"<artist-verb-past-tense>": "exhibited | displayed | manifested | shown | demonstrated | expressed ",

"<interjection>": 	"This is a crucial release! | Most excellent! |  Utterly astounding! | Somewhat mind-blowing! | \
					Jaw-dropping! | Breathtaking! | This is gripping sh*t! | Frankly intoxicating! | \
					Rousing material! | Electrifying! | Most-definitely heady!! | A modern masterpiece of composition! | \
					Miss out at your peril! | Seriously? | Wow! ",

"<music-recording-noun>":	"12” wax | MP3 | home-made cassette | CD | album | 4-track cartridge | \
							betamax| laserdisc | DVD-R | EP | ogg-vorbis download | maxi-single | Bandcamp release | \
							ambisonic release | limited edition | remastered EP | white-label | unofficial release | \
							back-to-mine compilation | Soundcloud (teaser clip) | promo | youtube video | 7” vinyl | box set | \
							Mixcloud set | (new) myspace track | unplugged session | live webcast | music video",

"<time-adjective>":	"latest | most recent | newest | current | currently charting | recently dropped",

"<genre-adjective>": 	"quotidian | commonplace | slippery | fragmented | punctured | wispy | atmospheric | \
						smudged | obscure  | delicate | exquisite | silky and sweet | unsteady | fractured | \
						mangled | indifferent | shattered | otherworldly | disenchanted | sadder and wiser | \
						sophisticated",

"<adverb-terminal>": 	"brilliantly | astutely | adeptly | robustly | amazingly | carefully | inadequately | \
						abstractly | absurdly | accidentally  | brightly",

"<gerund-song-phrase>": 	"marrying <genre> from the <time> period with <structure-description> | \
							meandering around a plucked melody that <verb-phrase-singular> |	\
							sounding like <artist> in a skank off, after inhaling a canister of nitrous oxide | \
							blurring the boundaries between <structure-description> and <structure-description> | \
							eschewing the familiar palimpsest of credible <genre> <genre-noun> | \
							injecting hints of <genre> patterns into <genre> | \
							letting in shards of light painted through snippets of <genre> and <genre> re-painted in sparkling, sumptuous colours | \
							propelling ethereal glitching rhythms across plains of elaborately fashioned electroacoustic static | \
							wielding Detroit shuffles à la Theo Parrish | \
							brushing its rhythms with a cool sleight of hand that's still utterly breathtaking | \
							eschewing the usual formulaic pitfalls | \
							spinning a collection of understated string and piano elegies | \
							veering off on solo tangents of enchanted ambient abstraction | \
							functioning mainly through the frosted lens of physical Finnish stoicism | \
							revolving about achingly well-formed shuffle patterns | \
							whining and squealing like a farmyard animal in the pangs of labour | \
							ricocheting gunshots off grimy bassline warps | \
							employing classically staggered harmonic progressions | \
							riding rock hard subbass depth charges | \
							creating atmospheric pressures sharp enough to give lesser experienced divers the bends | \
							skittering post-Autechre beat deconstructions | \
							exhibiting tearjerking, suckerpunching, piano-meets-strings melancholy | \
							dripping with endless reverb and delay manipulation | \
							exhibiting an intensely overbearing darkness, covered by a fuzzy thicket of layered drones",

"<genre-noun>": "landscapes | ephemera | futurism | classicism | sensibilities",

"<all-genre>": "Future Samba | Fonk Arabic | Digital Zulu | 2-step garage  | 8-bit | A-cappella  | \
 	Acid Jazz | Acid Rock | Afrobeat  | Nigerian Apala  | Arabesque | Avant-garde jazz  | Avant-garde metal  | \
 	Avant-punk | Bachata  | Baião  | Baile Funk  | Baisha xiyue  | Bajourou  | Bakou  | Bal-musette  | Balakadri  | \
	Balinese Gamelan  | Ballet  | Bamboo band  | Bambuco  | Baroque  | Miami bass | Booty bass | Batucada  | \
 	Beatboxing  | Bebop  | Beiguan  | Bel canto  | Bhangra  | Bhangragga | Bhangramuffin | Big Beat | \
 	Bluegrass  | Blues  |  Bitpop  | Bocet | Bohemian Dub  | Boi  | Bolero  | Bomba | \
 	Bombay pop | Bongo  |  Bossa nova |  	Breakbeat  | Breakcore  |  	Britfunk |  Britpop | Broken beat  | \
 	Bubblegum pop  |  Bikutsi |  	Bulerias | Bunraku  |  Calentanos | Calypso  |  Canto popular  | \
 	Cantopop  | Capoeira | Carceleras | Carnatic music | Cello rock | Cha-cha-cha | Chamber music | Champeta  | \
 	Chemical breaks | Chicago house | Chicken scratch | Chillout | Chimurenga | Classical | Clicks 'n' Cuts |  \
	Compas meringue | Cothoza mfana | Country | Cowpunk | Crunk  | Cueca | Cumbia  |  	Cybergrind | Dancehall | \
 	Darkcore  | Darkwave | Death metal | Delta blues | Deep house | Detroit techno | Dhamar  | Digital hardcore |  \
	Disco | Diva house | Djambadon | Dodompa  | Dongjing  | Doo wop | Doom metal | Downtempo | Drone  | Drum and bass | \
	Dub | Dub Techno | Dubtronica | Dubstep | E-Grind | Easy listening | Electro | Electroclash | Electropop | Muzak | \
 	Emo | Eurodance | Europop | Experimental noise | Fandango  | Filk | Fjatpangarri | Flamenco  | \
 	Folk | Folktronica | Forró  | Free jazz | Freestyle | Fuji | Funk | Funky house | G-funk | Gaikyoku | \
 	Gamelan  | Gangsta rap  | Gavotte | Gharnati | Ghettotech |  Glam punk | Glitch | Gnawa | \
 	Goa | Gospel | Gothic | Gregorian chant | Grime  | Grunge | Guajira | Gwo ka  | Gyu ke | Habanera  | \
	Haiducesti | Hungarian-Transylvanian wedding songs (Hajnali) | Happy hardcore | Hard house | Heavy metal | Hi-NRG | \
 	Highlife | Hiplife | Hip hop | Hip pop | Hindustani classical music | Honky tonk | Horror punk | \
 	House | Hula | Humppa | Hunguhungu | Hyphy | Illbient | Indietronica | Indie rock | Industrial  | IDM  | \
 	Iscathamiya | Isolationist | Italo Disco | J-Pop  | Jaipongan  | Jamana kura | Jarana | Jawaiian | \
 	Jazz | Jesus music | Jitterbug | Jive | Joropo | Jota | Juju | Jumpstyle | Jungle | Junkanoo | \
 	Jtek | Kamba pop | Karaoke | Kargyraa | Katajjaq  | Balinese monkeychant (Kecak) | \
 	Hungarian Gypsy dance songs (Khelimaski djili) | Komagaku | Kpanlogo | Krautrock |  Kulning (Swedish folk songs) | \
 	Kveding (Traditional Norwegian songs) | Kwaito | Kwassa kwassa | Kwela | Laremuna wadauman | Latin jazz  | \
 	Letkajenkka | Lhamo (Tibetan opera) | Lovers rock | Luhya omutibo | \
	Luk grung (Popular Thai music from the early 20th century) | Lullaby | Maglaal (tuuli) | \
 	Makossa | Makossa-soukous | Mambo | Manding swing | Mangulina | Manikay | Marabi | Mariachi | \
 	Marimba | Marrabenta | Maskanda  | Math rock | Mbalax |	Mbaqanga (Township Jive) | Mbumba | Mejorana | Memphis blues | \
 	Mento | Merengue | Milongas | Mineras | Minimal techno | Mirolóyia | Modinha | \
 	Motown | Musique concrete | Mutuashi | Muwashshah | Muzak  | Narodna muzika (Serbian Folk Music) | \
 	Neo-Psychedelia | Neo Soul (Nu Soul) | Neue Volksmusik | New Age | New Jack Swing  | \
 	New Orleans blues | New Orleans jazz | New York House (i.e. US Garage) | Nintendocore | Noise music  | Nordic folk music | \
 	Nortec (Electronic style from Tijuana) | Nu breaks | Oldies | Olonkho (Yakut epic songs) | Opera  |  \
	Orovela (Eastern Georgian work songs) | Ozwodna | P-Funk | Paisley Underground  | \
 	Palm wine sound  | Panchai baja (Nepalese wedding music) | Panchavadyam (Temple music from Kerala) |  Parisian soukous | \
 	Parranda (Afro-Venezuelan form) | Pennywhistle jive | Peroveta anedia | Phleng luk tung | Piedmont blues | \
 	Pisiq (Greenlandic folk song) | Pixiefunk  | Pleng phua cheewit (Thai protest rock) | Poco-poco  | Polka |  \
	Pop rai |  Pornocore | Porro (Colombian big band) | Post-grunge | Post-industrial | Post-Traumatic-Stress-Core | \
 	Power electronics | Progressive house | Protopunk | Psychedelic trance (Psy-trance) | Psychobilly | Psychosomatic trance | \
 	Psych-pop | Punk funk | Punk rock | Qawwali (Sufi religious music) | Raggamuffin (Ragga) | Ragga-soca | \
 	Ragga-zouk | Ragtime | Rai  | Rap | Rave | Reggae | Reggaeton | Rekilaulu (Finnish rhyming sleigh songs) | \
 	Rhapsody | Rhythm & Blues | Rímur (Icelandic heroic epic songs) | Ring Bang (Barbadian Soca) | Riot grrrl | \
 	Rock | Rock opera | Rockabilly | Rocksteady | Rodeo music | Rokon fada | Rondeaux | Roots reggae | Rumba |  \
	Yambu (Cuban Rumba) | Guaguanco (Cuban Rumba) | Salsa  | Samba  | Sato kagura | Saya (Bolivia) | Serialism | Shango | \
 	Shoegaze | Showtunes | Siguiriyas | Ska | Ska punk | Skacore (Third wave of Ska) | Skate punk | Skronk |  \
	Kihoalu (Hawaian Slack-key guitar) | Smooth jazz | Soca | Soft rock | Soukous | Soul jazz | Southern Gospel | \
 	Southern rock | Space age pop | Space rock | Speedcore | Speed garage | Spirituals | Stoner metal | Stoner rock | \
 	Surf rock | Swamp blues | Swing | Sygyt (Tuvan Throat Singing)  | Synthpop | Tango  | Tech House | Techno | Teen pop |  \
	Texas blues | Thillana (South India) | Thrashcore | Thrash metal | 	Tientos | Tinga | Trance | Tribal house | \
 	Trikitixa (Basque Accordion music) | Trip-hop | Tumba | Turntablism | Two tone | UK garage | \
 	Vaudeville | Verbunkos (Hungarian folk music) | Verismo | Vocal house | Waila (Chicken Scratch)  | \
 	Waltz | Wassoulou | Western swing | Xhosa | Zarzuela (Spanish operetta) | Zeibekiko (Greek Dance 9/8 Rytmus) | \
 	Ziglibithy | Zolo (Hyper Bitchy rhythms) | Zouglou | Zouk  |  Zydeco",


"<genre>": "Future Samba | Fonk Arabic | Digital Zulu | 2-step garage  | 8-bit | A-cappella  | \
 	Acid Jazz | Acid Rock | Afrobeat  | Nigerian Apala  | Arabesque | Avant-garde jazz  | Avant-garde metal  | \
 	Avant-punk | Bachata  | Baile Funk | Balinese Gamelan  | Ballet  | Bamboo band  | Bambuco  | Baroque  | Miami bass | Booty bass | Batucada  | \
 	Beatboxing  | Bebop  | Bhangra  | Bhangragga | Bhangramuffin | Big Beat | \
 	Bluegrass  | Blues  |  Bitpop  | Bocet | Bohemian Dub  | Boi  | Bolero  | Bomba | \
 	Bombay pop | Bongo  |  Bossa nova |  Breakbeat  | Breakcore  |  Britfunk |  Britpop | Broken beat  | \
 	Bubblegum pop  |  Bikutsi  | Calypso  |  Canto popular  | \
 	Cantopop  | Capoeira  | Carnatic music | Cello rock | Cha-cha-cha | Chamber music |  | \
 	Chemical breaks | Chicago house | Chicken scratch | Chillout | Chimurenga | Classical | Clicks 'n' Cuts |  \
	Compas meringue  | Country | Cowpunk | Crunk  | Cumbia  |  	Cybergrind | Dancehall | \
 	Darkcore  | Darkwave | Death metal | Delta blues | Deep house | Detroit techno  | Digital hardcore |  \
	Disco | Diva house | Doo wop | Doom metal | Downtempo | Drone  | Drum and bass | \
	Dub | Dub Techno | Dubtronica | Dubstep | E-Grind | Easy listening | Electro | Electroclash | Electropop | Muzak | \
 	Emo | Eurodance | Europop | Experimental noise | Fandango  | Flamenco  | \
 	Folk | Folktronica | Forró  | Free jazz | Freestyle | Fuji | Funk | Funky house | G-funk | Gaikyoku | \
 	Gamelan  | Gangsta rap  | Gavotte | Gharnati | Ghettotech |  Glam punk | Glitch | Gnawa | \
 	Goa | Gospel | Gothic | Gregorian chant | Grime  | Grunge | Habanera  | \
	| Hungarian-Transylvanian wedding songs (Hajnali) | Happy hardcore | Hard house | Heavy metal | Hi-NRG | \
 	Highlife | Hiplife | Hip hop | Hip pop | Hindustani classical music | Honky tonk | Horror punk | \
 	House | Hula | Hyphy | Illbient | Indietronica | Indie rock | Industrial  | IDM  | \
 	| Italo Disco | J-Pop  | Jazz | Jesus music | Jitterbug | Jive | Nigerian Juju | Jumpstyle | Jungle | Kamba pop | Karaoke | Balinese monkeychant (Kecak) | \
 	Hungarian Gypsy dance songs (Khelimaski djili) | Krautrock |  Kulning (Swedish folk songs) | \
 	Kveding (Traditional Norwegian songs) | Kwaito | Kwassa kwassa | Latin jazz | Lhamo (Tibetan opera) | Lovers rock | Luhya omutibo | \
	Luk grung (Popular Thai music from the early 20th century) | Lullaby | Makossa | Makossa-soukous | Mambo | Mariachi | \
 	Marimba  | Math rock | Mbalax |	Mbaqanga (Township Jive) | Memphis blues | \
 	Mento | Merengue | Mineras | Minimal techno  | Modinha | Motown | Musique concrete | Muzak  | Narodna muzika (Serbian Folk Music) | \
 	Neo-Psychedelia | Neo Soul (Nu Soul) | Neue Volksmusik | New Age | New Jack Swing  | \
 	New Orleans blues | New Orleans jazz | New York House (i.e. US Garage) | Nintendocore | Noise music  | Nordic folk music | \
 	Nortec (Electronic style from Tijuana) | Nu breaks | Oldies | Olonkho (Yakut epic songs) | Opera  |  \
	Orovela (Eastern Georgian work songs) | P-Funk | Paisley Underground  | \
 	Palm wine sound  | Panchai baja (Nepalese wedding music) | Panchavadyam (Temple music from Kerala) |  Parisian soukous | \
 	Parranda (Afro-Venezuelan form) | Pennywhistle jive | Peroveta anedia | Phleng luk tung | Piedmont blues | \
 	Pisiq (Greenlandic folk song) | Pixiefunk  | Pleng phua cheewit (Thai protest rock) | Poco-poco  | Polka |  \
	Pop rai |  Pornocore | Porro (Colombian big band) | Post-grunge | Post-industrial | Post-Traumatic-Stress-Core | \
 	Power electronics | Progressive house | Protopunk | Psychedelic trance (Psy-trance) | Psychobilly | Psychosomatic trance | \
 	Psych-pop | Punk funk | Punk rock | Qawwali (Sufi religious music) | Raggamuffin (Ragga) | Ragga-soca | \
 	Ragga-zouk | Ragtime | Rai  | Rap | Rave | Reggae | Reggaeton | Rekilaulu (Finnish rhyming sleigh songs) | \
 	Rhapsody | Rhythm & Blues | Rímur (Icelandic heroic epic songs) | Ring Bang (Barbadian Soca) | Riot grrrl | \
 	Rock | Rock opera | Rockabilly | Rocksteady | Rodeo music | Rokon fada | Rondeaux | Roots reggae | Rumba |  \
	Yambu (Cuban Rumba) | Guaguanco (Cuban Rumba) | Salsa  | Samba | Saya (Bolivia) | Serialism | Shango | \
 	Shoegaze | Showtunes | Siguiriyas | Ska | Ska punk | Skacore (Third wave of Ska) | Skate punk | Skronk |  \
	Kihoalu (Hawaian Slack-key guitar) | Smooth jazz | Soca | Soft rock | Soukous | Soul jazz | Southern Gospel | \
 	Southern rock | Space age pop | Space rock | Speedcore | Speed garage | Spirituals | Stoner metal | Stoner rock | \
 	Surf rock | Swamp blues | Swing | Sygyt (Tuvan Throat Singing)  | Synthpop | Tango  | Tech House | Techno | Teen pop |  \
	Texas blues | Thillana (South India) | Thrashcore | Thrash metal | 	Tientos | Tinga | Trance | Tribal house | \
 	Trikitixa (Basque Accordion music) | Trip-hop | Tumba | Turntablism | Two tone | UK garage | \
 	Vaudeville | Verbunkos (Hungarian folk music) | Verismo | Vocal house | Waila (Chicken Scratch)  | \
 	Waltz | Wassoulou | Western swing | Xhosa | Zarzuela (Spanish operetta) | Zeibekiko (Greek Dance 9/8 Rytmus) | \
 	Ziglibithy | Zolo (Hyper Bitchy rhythms) | Zouglou | Zouk  |  Zydeco",

"<music-adjective-terminal>":	"sonic | artistic | inventive acoustic | creative | musical | innovative musical | original melodic | expressive acoustic | visionary sonic | \
								enterprisingly musical | stylish sonic | elegant | exquisite musical",

"<artist-descriptive-noun-terminal>": 	"talent | ferocity | courage | weight | cowardice | nerve | stoutheartedness | endowment | dauntlessness | savagery | genius | furiousness | violence | ornamentation | wildness | severeness | simplicity | accessibility | straightforwardness | comprehensibility | unpretentiousness | naturalness | clarity | spareness | austerity | effortlessness | affectation | pretentiousness | posturing | facade | mulishness | recalcitrance",

"<structure-description>":	"European technical execution | \
							slinking garage syncopations | \
							supple subbass push | \
							dense analogue experiments | \
							digitally dissected orchestral figures | \
							devastatingly heavy <genre> mutations | \
							dadaist post-pop and <genre> | \
							rousing mini-orchestral swells | \
							the synth drones of Klaus Schulze | \
							the wind-chilled electronics of Thomas Köner | \
							sumptuous Chicago reductions | \
							the chugging machinations steeped in the traditions of Scandinavian machine music | \
							hazy washes of reverbed harps | \
							rippling xylophonics |	 \
							majestic cloud-like structures of droning synth tones | \
							febrile rhythm mechanics | \
							wispily resonant distortion | 	 \
							waves of static | \
							spherical bell tones | \
							sea-sick rhythms | \
							an assortment of disembodied voices | \
							expertly manipulated rhythm alchemy  | \
							beautifully tempered zones of twilight ambient  | \
							reverberant, quivering sustains | \
							avant-garde chamber instrumentation | \
							gloriously wild natural timbres | \
							grim, crust-laden darkness | \
							fat skronked basslines under fractured, minimal percussion | \
							hazy synthetic electronical embellishments |  \
							overheated arcade game melodies | \
							exothermal synthlines | \
							symphonic droning | \
							drifting electronica | \
							oblique hi-end processing | \
							utterly sick digital spasms | \
							unfathomably complex textures | \
							layered spaciousness | \
							intricately funked syncopations edging on the territory of Autechre or Alva Noto | \
							dense thickets of digitally applied crackle | \
							sinister Euro-porno soundtracks | \
							modern amorphous psychedelia |	 \
							hyper-prismic agitated synthlines | \
							spectrally sifted electronics | \
							alien analogue tones |  \
							a pure, transcendental rave feeling | \
							a bubbly pop appreciation | \
							a mindblowing dubscape of effects | \
							a persistent undulating pulse of bass | \
							a cacophany of autistic rhythms | \
							a fragrant, effortless warmth | \
							a deluge of piano flecked gems | \
							a veneer of melancholy |  \
							a growing amalgam of contradictions |  \
							a blistering feast of distortion and noise-rock virtuosity | \
							a JS Bach-meets-krautrock bassline  | \
							a fragrant, bubblegum flavoured ditty | \
							a veritable haberdashery of exquisitely vintage musical textures | \
							a Flying Lotus-style bass reduction |  \
							distorted crescendos and electronic squiggles | \
							hi-scoring aquakrunk madness | \
							layered embers of sound | \
							an eerily impeccable falsetto | \
							textural guitar-scapes | \
							soft, smoky sax lines | \
							flickering electronic rhythm sections | \
							cinematic string samples of the Caretaker variety |  \
							head-pressurised technohouse vibes	| \
							sticky, wriggly electro influences | \
							an alchemical blend of post-rave electronics | \
							endlessly arpeggiated chords | \
							drum machines left to run for days through myriad pattern permutations | \
							enunciated consonants and floppy fringe harmonies | \
							hummable melodies and post-pop slacker tendencies | \
							psychedelic rhythm manipulation |  \
							narcotic keys |  \
							spacious Balearic keys |  \
							rootsy one-drop dub keys |  \
							lysergic trumpet lines panned to infinity  |  \
							slurred articulations |  \
							synaesthetic ecstasy |  \
							deep, rustic darkness |  \
							wonderfully shambolic tendencies | \
							haunted-house analogue tactics |  \
							foggy northern European landscapes |  \
							wicked ragga-bashment flava |  \
							stringently reduced techno |  \
 							glacially paced gothic stoner rock | \
							heavy rolling dancehall grinders |  \
							orchestral level pomp and bombast |  \
							seriously dextrous rhythm section arrangements",

"<artist-description-phrase>": 	"<adverb> defies categorisation | \
								demonstrates an innate grasp of the sublime qualities of <genre>  | \
								makes for an uncommonly good performance that <verb-phrase-singular> | \
								compliments credible <genre> <genre-noun> with a mighty doublepack of deadly bass variations that <verb-phrase-singular> | \
								<adverb> elevates <genre> sophistication with <genre-adjective> <genre> <genre-noun> | \
								writhes <adverb> with overdriven intensity and deeply sinister undercurrents | \
								tries to solve an inherently under-constrained musical problem, trying to make sense out of a 3D sonic world using auditory projections that are <adverb> two-dimensional | \
								<adverb> hoists up the profile of screeched-out abstract vocals and mournful, desolate lyrics",

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

"<time>": 			"<epoch> | <time-period> <epoch>",

"<time-period>": 	"early | late | mid",

"<epoch>": 			"20th century | 19th century | 21st century | Medieval era | renaissance era |  \
					baroque  | classical  | impressionist | neo-impressionist  | romantic  |  \
					futurist  | modernist  | postmodernist  | nouveau-realist  |  \
					expressionist  | neo-expressionist  | atonal  | neo-surrealist  |  \
					purist  | avant-minimalist  | post-luminist  | noveau-constructivist  |  \
					lyrical abstractionist  | post-cynical meta-realist period | maximalist  |  \
					vegan-deconstructivist  | modular constructivist  | subversive |  \
					organic abstractionist ",

<!--"<adverb>":			"`getSynonyms(<adverb-terminal>, "r");` | <adverb-terminal", -->
"<adverb>":				"<adverb-terminal> | <adverb-terminal>",

"<adverb-terminal>":	"brilliantly | astutely | adeptly | robustly | amazingly | carefully | \
						inadequately | abstractly | absurdly | accidentally  | brightly",

"<adverb-time-terminal>":	"occasionally | sporadically | infrequently | periodically | \
							irregularly | intermittently | frequently | repeatedly | continually | recurrently",

"<song-description-phrase>":	"<adverb> defies categorisation | \
								slides out a <genre-adjective> groove of immense proportions | \
								\
								chugs a long like a malfunctioning mechanical beast | \
								\
								is an asymmetric, geniusly constructed dancefloor killer | \
								\
								is one of the richest spacial dub constructions ever heard | \
								\
								is a frenzied crescendo of panning stabs and a washed out, chugging backbone that doesn't let up | \
								\
								is a sweet-like-tropical blend of <genre>, <genre> and dubstep | \
								\
								is an eighty-minute odyssey into stoner heaven | \
								\
								is as foul-smelling as an oily anal leakage | \
								\
								is pieced together from a plethora of unidentified samples, field recordings and found sounds | \
								\
								is a retro reconstruction of <genre> style balladry that teeters on the edge of <genre> pastiche | \
								\
								has critics and fans alike, queuing up to drape compliments over it's shiny chassis | \
								\
								is a deep & dark tech-house number, whose B-side dub remix, takes it even deeper, adding loads of effect throws, percussion solos and dramatic breakdowns | \
								\
								is a deep & dark blues-house number from the <time>. It's ragingly infectious vocals are laced with moody blues guitar riffs, layers upon layers of percussion, hypnotizing filtered  stabs and the obligatory driving bass line | \
								\
								is an incredible, <adverb> mesmerising sound that will tempt, allure, petrify and utterly mind-f**k you in equal measure | \
								\
								is an uneasy listening experience, catapulting the listener <adverb> at times with irrepressible spirited contrasts | \
								\
								suddenly explodes into an unrelenting, glistening wall of discordance, sounding like a thousand church organs screeching out | \
								\
								has all the claustrophobia of the nastier end of <genre>, though within the unearthly racket, still maintains an uplifting optimism | \
								\
								contains passages of deep melodic beauty. This is unquestionably a journey that is <adverb> rooted in atonal explorations | \
								\
								is a schizophrenic composition, <adverb> and without warning cutting between sparse, low-end tension and thumping organ clusters | \
								is a sexy, groovy little stomper, that just keeps on building and building while <gerund-song-phrase> | \
								\
								is one of those avant-gardist EPs showcasing how versatile <genre> can get | \
								\
								is high grade bass music so intense you can blow-dry your hair right in front of the bass bins | \
								\
								does not initially seem to be doing anything special, but the subtlety and intensity eventually worms its way into your heart",

"<verb-phrase>":		"feels | sounds | strikes one as | comes across as | shows signs of being | \
						resonates as | reverberates as | echoes as | tintinnabulates as |\
						gently throbs and is | softly palpitates, feeling | roars, suggesting a vibe that is",

"<verb-phrase-singular>":	"floats in and out of your consciousness with a wool-lined ease | \
							sits deeply in <adverb-terminal> smoky atmospherics | \
							drowns out the sound of jaws hitting the floor",

"<verb-phrase-plural>":  	"<plural-subject-song-verb> with <structure-description> and <structure-description> | \
							float in and out of your consciousness with a wool-lined ease | \
							sit deep in <adverb-terminal> smoky atmospherics | \
							simply drown out the sound of jaws hitting the floor", 

"<plural-subject-song-verb>":  "rock | shine | shimmer | chug | drone | sparkle | unnerve | tremble | surprise | startle | sparkle | scintillate",

"<singular-subject-song-verb>": "rocks | shines | shimmers | chugs | drones | sparkles | unnerves | \
								trembles | surprises | startles | sparkles | scintillates"

};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

labelYearGrammar = { 

"<start>": "<label>, <year>",
			
"<label>": 			"Kompakt | Hyperdub | Tongut  | Soul Jazz | Strictly Rhythm | Defected | \
					  Studio 1 | Nonesuch | Mille-Plateaux  | Force Inc. | Bpitch Control | \
					  Shitkatapult | Warp | The Leaf | Kranky | Thoughtless Music | Unfoundsound",
					  
"<year>": 			"1984 | 1997 | 1999 | 2001 | 2003| 2008 | 2009 | 2011 | \
					2013 | 2014 |2014 | 2014 | 2013 | 2014 | 2013 | 2014 | 2014 | \
					2013 | 2014 | 2015 | 2015 | 2014"
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
