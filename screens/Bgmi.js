import React from 'react';
import { StyleSheet, Dimensions, ScrollView, ImageBackground } from 'react-native';
import { Block, theme, Text } from 'galio-framework';
import { Card } from '../components';
import { articles, Images, argonTheme } from "../constants";
const { width } = Dimensions.get('screen');

class Bgmi extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
        <Block flex card shadow style={styles.category}>
              <ImageBackground
                source={{ uri: 'https://images.unsplash.com/photo-1564049489314-60d154ff107d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=761&q=80',}}
                style={[
                  styles.imageBlock,
                  { width: width - theme.SIZES.BASE * 2, height: 252 }
                ]}
                imageStyle={{
                  width: width - theme.SIZES.BASE * 2,
                  height: 252
                }}
              >
                <Block style={styles.categoryTitle}>
                  <Text size={16} bold color={theme.COLORS.WHITE}>
                    Take the Game Challenge like a Tiger and win like a King. You should never get dissappointed. Convert your free time into income. Win it
                  </Text>
                </Block>
              </ImageBackground>
            </Block>
          {/* <Card item={articles[2]} horizontal />
          <Card item={articles[1]} horizontal />     */}
          <Block flex row >
              <Card
                item={articles[0]}
                style={{ marginRight: theme.SIZES.BASE }}
              />
              <Card item={articles[2]} />
            </Block>
            <Block flex row style={{marginTop: -15}}>
              <Card
                item={articles[3]}
                style={{ marginRight: theme.SIZES.BASE }}
              />
              <Card item={articles[1]} />
            </Block>
            
          <Card style={{marginTop: 10}} item={articles[4]} horizontal  />
        </Block>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.bgmi}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  categoryTitle: {
    height: "100%",
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    textAlign: 'center'
  },
  bgmi: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    textAlign: 'center',
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Bgmi;
