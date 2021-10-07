import React from "react";
import Header from "./components/header";
import Headline from "./components/headline/Headline";
import ShareButton from "./components/button";
import ListItem from "./components/listItem";
import { connect } from 'react-redux';
import { fetchPosts } from './actions';
import './app.scss';

const dataArray = [{
  fName: "Pancho",
  lName: "Elizalde",
  age: 26,
  online: true
}]

function App({ fetchPosts, posts}) {

  function fetch() {
    fetchPosts();
  }

  const configButton = {
    buttonText: 'Get posts',
    emitEvent: fetch
  }

  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" description="Click the button to render post" tempArray={dataArray}/>
        <ShareButton {...configButton} />
        {posts.length > 0 &&
          <div>
            {posts.map((post, index) => {
              const configListItem = {
                title: post.title,
                description: post.body
              };
              return (
                <ListItem key={index} {...configListItem} />
              )
            })}
          </div>
        }
      </section>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(App);

