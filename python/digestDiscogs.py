
###################################
# Extract usable data from 
# http://www.discogs.com/data
###################################

import xmltodict
import gzip
import io



def handle_artist(_, artist):
    str = artist['name'] + " \n"
    print str
    global f
    f.write(str)
    return True

f = io.open('artists.txt', 'w', encoding='utf8')
xmltodict.parse(gzip.GzipFile('discogs_20150201_artists.xml.gz'), item_depth=2, item_callback=handle_artist)
