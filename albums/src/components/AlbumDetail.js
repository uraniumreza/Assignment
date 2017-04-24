import React from 'react'
import {View, Text, Image} from 'react-native'
import Card from './Card'
import CardSection from './CardSection'

const AlbumDetail = (props) => {
  return(
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            style = {styles.thumbnailStyle}
            source = {{uri:props.album.thumbnail_image}}
          />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style = {styles.coverPhotoStyle}
          source={{uri: props.album.image}}
        />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  headerTextStyle: {
    fontSize: 18
  },

  thumbnailStyle: {
    height: 50,
    width: 50
  },

  coverPhotoStyle: {
    height: 350,
    flex: 1,
    width: null
  },

  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
};

export default AlbumDetail;
