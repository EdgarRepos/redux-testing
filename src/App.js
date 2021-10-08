import React, { useState } from "react";
import Header from "./components/header";
import Headline from "./components/headline/Headline";
import ListItem from "./components/listItem";
import { connect } from 'react-redux';
import { fetchPosts } from './actions';
import './app.scss';
import SharedButton from "./components/button";


const dataArray = [{
  fName: "Pancho",
  lName: "Elizalde",
  age: 26,
  online: true
}]

function App({ fetchPosts, posts}) {
  const [hideBtn, setHideBtn] = useState(false);

  function exampleMethod_updatesState() {
    setHideBtn(prevhideBtn => !prevhideBtn);
  }

  function fetch() {
    fetchPosts();
    exampleMethod_updatesState();
  }

  const configButton = {
    buttonText: 'Get posts',
    emitEvent: fetch
  }

  return (
    <div className="App" data-test="app-component">
      <Header />
      <section className="main">
        <Headline header="Posts" description="Click the button to render post" tempArray={dataArray}/>
        {!hideBtn &&
          <SharedButton {...configButton} />
        }
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

