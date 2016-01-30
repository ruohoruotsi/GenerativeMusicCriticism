
###################################
# Extract usable data from 
# http://www.discogs.com/data
###################################

import xmltodict
import gzip
import io


###################################
# artists
###################################
def handle_artist(_, artist):
    str = artist['name'] + " \n"
    print(str)
    global artistsFile
    artistsFile.write(str)
    return True

#artistsFile = io.open('artists.txt', 'w', encoding='utf8')
#xmltodict.parse(gzip.GzipFile('discogs_20150201_artists.xml.gz'), item_depth=2, item_callback=handle_artist)


###################################
# labels
###################################
def handle_label(_, label):
    str = label['name'] + " \n"
    print(str)
    global labelsFile
    labelsFile.write(str)
    return True

#
# grab data from http://data.discogs.com
#
labelsFile = io.open('labels.txt', 'w', encoding='utf8')
xmltodict.parse(gzip.GzipFile('discogs_20150201_labels.xml.gz'), item_depth=2, item_callback=handle_label)
